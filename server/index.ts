import express from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API routes
const server = registerRoutes(app);

// Static file serving and client-side routing
if (process.env.NODE_ENV === "production") {
  serveStatic(app);
} else {
  // Development mode - use Vite's dev server
  setupVite(app, server);
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, "0.0.0.0", () => {
  log(`Server running on port ${PORT}`);
});

export default app;