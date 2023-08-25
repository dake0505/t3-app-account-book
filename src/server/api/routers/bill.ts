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
        type: z.string()
    })).mutation(({ ctx }) => {
        ctx.prisma.bill.create({
            data: { type: 'asd', amount: 1, image: 'imagetest', name: '振鼎鸡' }
        }).catch(err => {
            console.log(err)
        })
    })
})
