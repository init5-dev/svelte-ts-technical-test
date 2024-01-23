import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { PrismaClient } from "@prisma/client";
import { error, redirect } from "@sveltejs/kit";
import type { Cost } from "$lib/models/Cost.js";
import UploadError from "$lib/errors/upload-errors.js";

const prisma = new PrismaClient()

const now = new Date()

const schema = z.object({
  category: z.string(),
  categories: z.string().array(),
  amount: z.number().int().positive().min(1),
  date: z.date().max(now)
})

export const load = async () => {
  const response = await prisma.category.findMany({select: {name: true, id:false}})
  const categories = response.map(category => category.name)

  const form = await superValidate(
    {
      categories,
      amount: 1,
      date: now
    }, 
  schema)
  
  return {form}
}

export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, schema)

    if (!form.valid) {
      console.log(form)
      return {
        error: {
          code: UploadError.INVALID_FILE_DATA,
          message: 'The date cannot be a date in the future'
        }
      }
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
   
    if (success) throw redirect(302, '/costs?status=updated') 
  }
}