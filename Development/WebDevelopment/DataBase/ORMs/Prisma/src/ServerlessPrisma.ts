// Initialize DB (prisma)
// 1. Get your connection url from neon.db or aieven.tech
// postgres://avnadmin:password@host/db
// Copy
// 2. Get connection pool URL from Prisma accelerate
// https://www.prisma.io/data-platform/accelerate
// prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiNTM2M2U5ZjEtNmNjMS00MWNkLWJiZTctN2U4NzFmMGFhZjJmIiwidGVuYW50X2lkIjoiY2I5OTE2NDk0MzFkNWZmZWRmNmFiYzViMGFlOTIwYzFhZDRjMGY5MTg1ZjZiNDY0OTc3MzgyN2IyMzY2OWIwMiIsImludGVybmFsX3NlY3JldCI6Ijc0NjE4YWY2LTA4NmItNDM0OC04MzIxLWMyMmY2NDEwOTExNyJ9.HXnE3vZjf8YH71uOollsvrV-TSe41770FPG_O8IaVgs
// Copy
// 3. Initialize prisma in your project
// Make sure you are in the backend folder
// npm i prisma
// npx prisma init
// Copy
 
// Replace DATABASE_URL in .env
// DATABASE_URL="postgres://avnadmin:password@host/db"
// Copy
// Add DATABASE_URL as the connection pool url in wrangler.toml
// name = "backend"
// compatibility_date = "2023-12-01"

// [vars]
// DATABASE_URL = "prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiNTM2M2U5ZjEtNmNjMS00MWNkLWJiZTctN2U4NzFmMGFhZjJmIiwidGVuYW50X2lkIjoiY2I5OTE2NDk0MzFkNWZmZWRmNmFiYzViMGFlOTIwYzFhZDRjMGY5MTg1ZjZiNDY0OTc3MzgyN2IyMzY2OWIwMiIsImludGVybmFsX3NlY3JldCI6Ijc0NjE4YWY2LTA4NmItNDM0OC04MzIxLWMyMmY2NDEwOTExNyJ9.HXnE3vZjf8YH71uOollsvrV-TSe41770FPG_O8IaVgs"
// Copy
// 💡
// You should not have your prod URL committed either in .env or in wrangler.toml to github
// wranger.toml should have a dev/local DB url
// .env should be in .gitignore
// 4. Initialize the schema

// 5. Migrate your database
// npx prisma migrate dev --name init_schema


// 6. Generate the prisma client 
// npx prisma generate --no-engine
// Copy
// 7. Add the accelerate extension
// npm install @prisma/extension-accelerate
// Copy
// 8. Initialize the prisma client
// import { PrismaClient } from '@prisma/client/edge'
// import { withAccelerate } from '@prisma/extension-accelerate'

// const prisma = new PrismaClient({
//     datasourceUrl: env.DATABASE_URL,
// }).$extends(withAccelerate())
