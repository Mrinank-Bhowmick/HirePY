import { Hono } from "hono";
import { cors } from "hono/cors";
import { handle } from "hono/vercel";

// Import routes
import interviewsRoute from "../routes/interviews";

const app = new Hono().basePath("/api");

// CORS middleware
app.use("/*", cors());

// Root endpoint
app.get("/", async (c) => {
  return c.json({ hello: "world", message: "HirePY API" });
});

// Add routes here
app.route("/interviews", interviewsRoute);

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
export const PATCH = handle(app);
