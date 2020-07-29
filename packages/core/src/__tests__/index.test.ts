import { answer } from "../index";
import { getClient } from "../db";
import { Client } from "pg";

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

  it("works", async () => {
    expect(await answer(client)).toEqual(
      "11111111-2222-3333-4444-555555555555"
    );
  });
});
