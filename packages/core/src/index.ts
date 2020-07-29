import { Client } from "pg";

export async function answer(client: Client) {
  const res = await client.query("SELECT * FROM participants");
  return res.rows[0].teams_id;
}
