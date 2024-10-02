import db from '../src/index'

//? Seed data to the database

async function main() {
    const alice = await db.user.upsert({
      where: { email: 'alice@gmail.com' },
      update: {},
      create: {
        email: 'alice@gmail.com',
        name: 'alice',
        OnRampTransaction: {
          create: {
            startTime: new Date(),
            status: "Success",
            amount: 20000,
            token: "122",
            provider: "HDFC Bank",
          },
        },
      },
    })
    const bob = await db.user.upsert({
      where: { number: '9999999998' },
      update: {},
      create: {
        number: '9999999998',
        password: 'bob',
        name: 'bob',
        OnRampTransaction: {
          create: {
            startTime: new Date(),
            status: "Failure",
            amount: 2000,
            token: "123",
            provider: "HDFC Bank",
          },
        },
      },
    })
    console.log({ alice, bob })
  }
  main()
    .then(async () => {
      await db.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await db.$disconnect()
      process.exit(1)
    })