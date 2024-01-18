import type {Cost} from "$lib/models/Cost"
import { PrismaClient } from "@prisma/client"
import type { PageServerLoad } from "./$types"

const prisma = new PrismaClient()

export const load = (async () => {
  const response = await prisma.cost.findMany()
  const costs: Cost[] = []

  for (const entry of response) {
    const {id, categoryId, amount, date, file} = entry

    const category = (await prisma.category.findUnique({
      where: {
        id: categoryId
      }
    }))?.name

    const cost = {
      id,
      category,
      amount,
      date,
      file
    }

    costs.push(cost)
  }
  
  return { feed: costs }
}) satisfies PageServerLoad