import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const typeRouter = createTRPCRouter({
    /**
     * 查询类型
     */
    queryType: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.billType.findMany()
    }),

    createType: publicProcedure.input(z.object({
        name: z.string()
    })).mutation(async ({ ctx, input }) => {
        try {
            await ctx.prisma.billType.create({
                data: { name: input.name, createdBy: 'admin', updatedby: 'admin' }
            })
            return 'success'
        } catch (error) {

        }

    }),

    deleteType: publicProcedure.input(z.string()).mutation(async ({ ctx, input }) => {
        try {
            await ctx.prisma.billType.delete({
                where: { id: input }
            })
        } catch (error) {

        }
    })
})
