import { PrismaClient } from "@prisma/client"
import Cost from '../src/lib/models/Cost'
import {faker} from '@faker-js/faker'

const prisma = new PrismaClient()

const generateFakeCosts = (length: number): Cost[] => {
  const result: Cost[] = []

  for (let id:number=0; id < length; id++) {
    const cost: Cost = {
      id,
      category: faker.commerce.department(),
      amount: Number(faker.commerce.price()),
      date: faker.date.between({
        from: '2023-01-01T00:00:00.000Z', 
        to:'2024-01-01T00:00:00.000Z'}),
        file: faker.system.filePath()
    }

    result.push(cost)
  }

  return result
}


async function main() {
  console.log('Seeding database...')
  
  const data = generateFakeCosts(100)

  for (const entry of data) {
    const {id, category, amount, date, file} = entry

    const cost = await prisma.cost.create({
      data: {
        id,
        category,
        amount,
        date,
        file
      }
    })

    console.log(`Created cost with id: ${cost.id}`)
  }
  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })