import { Client as DBClient } from "pg";

/**
 * @param dbClient
 * @param setOfParticipantIDs
 * @returns The ID of the standup record
 */
export async function createParticipantSet(
  dbClient: DBClient,
  setOfParticipantIDs: number[]
): Promise<number> {
  try {
    await dbClient.query("BEGIN");
    const standupID = (
      await dbClient.query(`
        INSERT INTO standups DEFAULT VALUES RETURNING id
      `)
    ).rows[0].id;
    await Promise.all(
      setOfParticipantIDs.map((participantID) => {
        return dbClient.query(
          `
          INSERT INTO standups_participants(standup_id, participant_id) VALUES($1, $2)
        `,
          [standupID, participantID]
        );
      })
    );
    await dbClient.query("COMMIT");
    return standupID;
  } catch (error) {
    await dbClient.query("ROLLBACK");
    throw error;
  }
}

export async function getParticipantSet(
  dbClient: DBClient,
  standupID: number
): Promise<number[]> {
  const result = await dbClient.query(
    `
    SELECT participant_id FROM standups_participants WHERE standups_participants.standup_id = $1
  `,
    [standupID]
  );
  return result.rows.map((row) => row.participant_id);
}

