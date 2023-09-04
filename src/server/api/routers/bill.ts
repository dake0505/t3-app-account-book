import dayjs from "dayjs"
import { z } from "zod"
import { createTRPCRouter, publicProcedure } from "../trpc"




export const billRouter = createTRPCRouter({
    /**
     * 查询账单
     */
    queryBill: publicProcedure.input(z.object({
        date: z.string().datetime().optional(),
    })).query(({ ctx, input }) => {
        return ctx.prisma.bill.findMany({
            where: {
                createdAt: {
                    gte: dayjs(input.date).startOf('D').toISOString(),
                    lt:  dayjs(input.date).endOf('D').toISOString(),
                }
            }
        })
    }),

    queryBillByMonth: publicProcedure.input(z.object({
        date: z.string().datetime().optional(),
    })).query(({ ctx, input }) => {
        return ctx.prisma.bill.findMany({
            where: {
                createdAt: {
                    gte: dayjs(input.date).startOf('M').toISOString(),
                    lt:  dayjs().endOf('M').toISOString(),
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
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
