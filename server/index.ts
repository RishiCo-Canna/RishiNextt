import express from "express";
import { registerRoutes } from "./routes";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

(async () => {
  const server = registerRoutes(app);
  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
})();