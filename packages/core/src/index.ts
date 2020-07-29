import { Client } from "pg";

export async function answer(client: Client) {
  const res = await client.query(
    'SELECT "teams_id" as "teamsID" FROM participants'
  );
  return res.rows[0].teamsID;
}
