import { z } from "zod"
import { createTRPCRouter, publicProcedure } from "../trpc"
import { prisma } from "~/server/db"
import { type Bill } from "@prisma/client"




export const homeRouter = createTRPCRouter({
    getName: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.home.findMany()
    }),
    createBill: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.home.findMany()
    }),
})
