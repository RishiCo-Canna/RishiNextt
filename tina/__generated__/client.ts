import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '2d620e44761ea1ecd75c5aba5b8806681d26a0e4', queries,  });
export default client;
  