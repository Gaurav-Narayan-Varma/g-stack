import { publicProcedure, router } from "./trpc";
import { z } from "zod";

export const appRouter = router({
  getText: publicProcedure.input(z.object({ foo: z.string() })).query(async (opts) => {
    return { message: "Authenticate to continue" };
  }),
});

export type AppRouter = typeof appRouter;
