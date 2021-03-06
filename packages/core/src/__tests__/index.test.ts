import { createParticipantSet, getParticipantSet } from "../index";
import { getClient } from "../db";
import { Client, QueryResult } from "pg";

describe("core", () => {
  let client: Client;

  /**
   * Setup:
   * - Connect to the db
   * - Wrap all tests in a transaction
   * - Insert fixtures
   */
  beforeAll(async () => {
    client = await getClient();
    await client.query("BEGIN");
    await client.query(
      "INSERT INTO participants(teams_id) VALUES($1) RETURNING *",
      ["11111111-2222-3333-4444-555555555555"]
    );
  });
  /**
   * Teardown:
   * - Revert any changes to the db made over the entire lifetime of the test suite
   * - Close the db connection
   */
  afterAll(async () => {
    await client.query("ROLLBACK");
    await client.end();
  });

  /**
   * Wrap each test in a transaction so changes to the db don't leak to sibling tests.
   */
  beforeEach(async () => {
    await client.query("BEGIN");
  });
  afterEach(async () => {
    await client.query("ROLLBACK");
  });

  /**
   * Actual tests.
   */

  describe(createParticipantSet, () => {
    it("works", async () => {
      const inserted: QueryResult[] = await Promise.all(
        Array.apply(null, Array(3)).map((_, x) =>
          client.query(
            "INSERT INTO participants(teams_id) VALUES($1) RETURNING *",
            [`${x}0000000-0000-0000-0000-000000000000`]
          )
        )
      );
      const participantIDs = inserted.map((result) => result.rows[0].id);

      const standupID = await createParticipantSet(client, participantIDs);
      const x = await getParticipantSet(client, standupID);

      const associatedParticipantIDs = (
        await client.query(
          `
            SELECT participant_id FROM standups_participants WHERE standup_id = $1
          `,
          [standupID]
        )
      ).rows.map((row) => row.participant_id);
      expect(associatedParticipantIDs).toEqual(participantIDs);
    });
  });

  describe(getParticipantSet, () => {
    it("works", async () => {
      const inserted: QueryResult[] = await Promise.all(
        Array.apply(null, Array(3)).map((_, x) =>
          client.query(
            "INSERT INTO participants(teams_id) VALUES($1) RETURNING *",
            [`${x}0000000-0000-0000-0000-000000000000`]
          )
        )
      );
      const participantIDs = inserted.map((result) => result.rows[0].id);
      const standupID = await createParticipantSet(client, participantIDs);

      const associatedParticipantIDs = await getParticipantSet(
        client,
        standupID
      );
      expect(associatedParticipantIDs).toEqual(participantIDs);
    });
  });
});
