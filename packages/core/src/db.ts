import { Client } from "pg";
import { config } from "./config";

let client: Client;

export async function getClient() {
  if (!client) {
    client = new Client({
      host: config.DB_HOST,
      user: config.DB_USER,
      password: config.DB_PASS,
      database: config.DB_NAME,
    });
    await client.connect();
  }
  return client;
}
