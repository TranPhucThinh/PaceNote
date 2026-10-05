import { prisma } from './lib/prisma.js'

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'thinh@example.com' },
    update: { name: 'Thinh' },
    create: {
      email: 'thinh@example.com',
      name: 'Thinh'
    }
  })

  console.log(user)
}

main()
  .catch((error: unknown) => {
    console.error(error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
