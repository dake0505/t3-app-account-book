import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
    queryUser: publicProcedure.query(({ ctx, input }) => {
        return ctx.prisma.user.findFirst({
            where: { name: input }
        })
    }),

    updateUser: publicProcedure.input(z.object({
        name: z.string(),
        id: z.string()
    })).mutation(async ({ ctx, input }) => {
        try {
            await ctx.prisma.user.update({
                where: { name: input.name, id: input.id },
                data: {}
            })
        } catch (error) {

        }
    })
})
