//! Many users have come across this warning while working with Next.js in development:
//* warn(prisma-client) There are already 10 instances of Prisma Client actively running.
//* This is a warning that is shown when you create a new Prisma Client instance on every Compilation of your Next.js application.
//? https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices

//! Solution 1: Use a singleton pattern
// db/index.ts
import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

// declare const globalThis: {
//   prismaGlobal: ReturnType<typeof prismaClientSingleton>;
// } & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma


// e.g. in `pages/index.tsx`
import prisma from './db'

export const getServerSideProps = async () => {
  const posts = await prisma.post.findMany()

  return { props: { posts } }
}