import { PrismaClient } from "@prisma/client"
import {Cost, Category} from '../src/lib/models/Cost'
import {faker} from '@faker-js/faker'

const prisma = new PrismaClient()

const generateFakeData = (
    minCats: number, 
    maxCats: number, 
    minPerCat: number, 
    maxPerCat: number
  ): Category[] => {
  const numCats = minCats + Math.floor(Math.random() * (maxCats - minCats))
  const categories: Category[] = []

  for (let id:number=0; id < numCats; id++) {
    const numCosts = minPerCat + Math.floor(Math.random() * (maxPerCat - minPerCat))
    const costs: Cost[] = []

    for (let id:number=0; id < numCosts; id++) {
      const cost: Cost = {
        amount: Number(faker.commerce.price()),
        date: faker.date.between({
          from: '2023-01-01T00:00:00.000Z', 
          to:'2024-01-01T00:00:00.000Z'}),
          file: faker.system.filePath()
      }

      costs.push(cost)
    }

    let categoryName = faker.commerce.productMaterial()
    let i = 0
    let skip = false

    while (categories.find(category => category.name === categoryName)) {
      categoryName = faker.commerce.productMaterial()

      if (i >= 10) {
        skip = true
        break
      }

      i++
    }

    if (skip) continue

    const category: Category = {
      name: categoryName,
      costs
    }
    
    categories.push(category)
  }

  return categories
}


async function main() {
  console.log('Seeding database...')
  
  const categories = generateFakeData(3, 15, 3, 20)

  for (const category of categories) {
    const {name, costs} = category

    await prisma.category.create({
      data: {
        name,
        costs: {
          create: costs
        }
      }
    })
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