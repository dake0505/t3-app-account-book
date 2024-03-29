import { exampleRouter } from "~/server/api/routers/example";
import { createTRPCRouter } from "~/server/api/trpc";
import { billRouter } from "./routers/bill";
import { typeRouter } from "./routers/type";
import { userRouter } from "./routers/user";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  bill: billRouter,
  billType: typeRouter,
  user: userRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
