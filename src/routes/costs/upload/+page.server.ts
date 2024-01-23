import { redirect } from '@sveltejs/kit'
import { Prisma, PrismaClient } from "@prisma/client"
import UploadError from '$lib/errors/upload-errors.js'
import DatabaseError from '$lib/errors/database-errors.js'

const prisma = new PrismaClient()

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData()
    const file = data.get('file')

    if (!file || !(file instanceof File)) {
      return {
        error: UploadError.NO_FILE
      }
    }

    const content = await file.text()
    let success = false
    let json

    try {
      json = JSON.parse(content)

    } catch (err) {
      return {
        error: UploadError.INVALID_FILE_DATA
      }
    }

    try {
      await prisma.category.update({
        where: {
          name: json.category
        },
        data: {
          costs: {
            create: {
              amount: json.amount,
              date: new Date(Date.parse(json.date)),
            }
          }
        }
      })

      success = true

      console.log('Filed added:', JSON.stringify(json))
    } catch (e) {
      console.log('ERROR:', e)
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          return {
            error: DatabaseError.DUPLICATED_COST
          }
        } 
      }

      return {
        error: UploadError.INVALID_FILE_DATA
      }
    }

    if (success) throw redirect(302, '/costs?status=updated')
  }
}