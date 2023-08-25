import { createTRPCRouter, publicProcedure } from "../trpc";

export const typeRouter = createTRPCRouter({
    /**
     * 查询类型
     */
    queryType: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.billType.findMany()
    })
})
