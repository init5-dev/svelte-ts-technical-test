import type {Cost} from "$lib/models/Cost"
import { PrismaClient } from "@prisma/client"
import type { PageServerLoad } from "./$types"

const prisma = new PrismaClient()

export const load = (async ({url}) => {
  const response = await prisma.cost.findMany()
  const costs: Cost[] = []

  const updated = url.searchParams.get('status')

  for (const entry of response) {
    const {id, categoryId, amount, date} = entry

    const category = (await prisma.category.findUnique({
      where: {
        id: categoryId
      }
    }))?.name

    const cost: Cost = {
      id,
      category,
      amount,
      date
    }

    costs.push(cost)
  }
  
  return { feed: {costs, status: updated} }
}) satisfies PageServerLoad