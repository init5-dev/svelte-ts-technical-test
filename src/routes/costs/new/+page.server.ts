import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { PrismaClient } from "@prisma/client";
import { faker}  from '@faker-js/faker'
import { error, redirect } from "@sveltejs/kit";
import type { Cost } from "$lib/models/Cost.js";

const prisma = new PrismaClient()

const schema = z.object({
  category: z.string(),
  categories: z.string().array(),
  amount: z.number().default(1),
  date: z.date().default(new Date(Date.now()))
})

export const load = async () => {
  const response = await prisma.category.findMany({select: {name: true, id:false}})
  const categories = response.map(category => category.name)

  const form = await superValidate(
    {
      categories,
      amount: 0,
      date: new Date(Date.now())
    }, 
  schema)
  
  return {form}
}

export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, schema)

    if (!form.valid) {
      return error(400, 'Invalid form')
    }

    const {category, amount, date} = form.data

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