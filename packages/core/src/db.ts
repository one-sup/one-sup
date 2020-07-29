import { Client } from "pg";

let client: Client;

export async function getClient() {
  if (!client) {
    client = new Client({
      database: "sup_bot",
    });
    await client.connect();
  }
  return client;
}
