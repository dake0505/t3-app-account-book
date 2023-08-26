import { z } from "zod"
import { createTRPCRouter, publicProcedure } from "../trpc"




export const billRouter = createTRPCRouter({
    getName: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.home.findMany()
    }),
    /**
     * 查询账单
     */
    queryBill: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.bill.findMany()
    }),
    /**
     * 新增账单
     */
    createBill: publicProcedure.input(z.object({
        type: z.string(),
        name: z.string(),
        amount: z.number()
    })).mutation(({ ctx, input }) => {
        ctx.prisma.bill.create({
            data: { type: input.type, amount: input.amount, name: input.name }
        }).catch(err => {
            console.log(err)
        })
    })
})
