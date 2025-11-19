import { Hono } from "hono";
import { db } from "@/db";
import { interviews } from "@/db/schema";
import { eq } from "drizzle-orm";

const interviewsRoute = new Hono();

// GET all interviews
interviewsRoute.get("/", async (c) => {
  try {
    const allInterviews = await db.select().from(interviews);
    return c.json({ success: true, data: allInterviews });
  } catch {
    return c.json({ success: false, error: "Failed to fetch interviews" }, 500);
  }
});

// POST create new interview
interviewsRoute.post("/", async (c) => {
  try {
    const body = await c.req.json();
    const { position, description, duration, type, userId } = body;

    // Validate required fields
    if (!position || !description || !duration || !type || !userId) {
      return c.json({ success: false, error: "Missing required fields" }, 400);
    }

    const newInterview = await db
      .insert(interviews)
      .values({
        position,
        description,
        duration,
        type,
        userId,
      })
      .returning();

    return c.json({ success: true, data: newInterview[0] }, 201);
  } catch {
    return c.json({ success: false, error: "Failed to create interview" }, 500);
  }
});

// GET specific interview by ID
interviewsRoute.get("/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const interviewId = parseInt(id);

    if (isNaN(interviewId)) {
      return c.json({ success: false, error: "Invalid interview ID" }, 400);
    }

    const interview = await db
      .select()
      .from(interviews)
      .where(eq(interviews.id, interviewId))
      .limit(1);

    if (interview.length === 0) {
      return c.json({ success: false, error: "Interview not found" }, 404);
    }

    return c.json({ success: true, data: interview[0] });
  } catch {
    return c.json({ success: false, error: "Failed to fetch interview" }, 500);
  }
});

export default interviewsRoute;
