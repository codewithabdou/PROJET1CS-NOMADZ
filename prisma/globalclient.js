import { PrismaClient } from "@prisma/client"

const globalForPrisma = globalThis 

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({errorFormat: 'minimal',})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma