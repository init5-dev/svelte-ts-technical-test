import { error, redirect } from '@sveltejs/kit'
import { PrismaClient } from "@prisma/client"
import type { PageServerLoad } from "../$types.js"
import type { Cost } from "$lib/models/Cost.js"
import {faker} from '@faker-js/faker'

const prisma = new PrismaClient()

export const load = (async () => {
  const response = await prisma.category.findMany({select: {name: true, id:false}})
  const categories = response.map(category => category.name)

  return {feed: categories}
}) satisfies PageServerLoad

export const actions = {
  default: async ({ request }) => {
    const data = Object.fromEntries(await request.formData())
    const {category, amount, date} = data

    if (!category || !amount || !date) {
      return error(400, {
        message: 'Incomplete data'
      })
    }

    const newCost: Cost = {
      amount: Number(amount),
      date: new Date(Date.parse(date.toString())),
      file: faker.system.filePath()
    }

    let success = false

    try {
      await prisma.category.update({
        where: {
          name: category.toString()
        },
        data: {
          costs: {
            create: newCost
          }
        }
      })

      success = true
    } catch (err) {
      return error(500, {
        message: 'Error creating new cost'
      })
    }
   
    if (success) throw redirect(302, '/costs') 
  }
}