import { Hono } from "hono";

import { db } from "@/db/db";
import { accounts } from "@/db/schema";

const app = new Hono();
app.get("/", async (c) => {
  const data = await db
    .select({
      id: accounts.id,
      plaidId: accounts.plaidId,
      name: accounts.name,
      userId: accounts.userId,
    })
    .from(accounts);

  return c.json({ data });
});

export default app;
