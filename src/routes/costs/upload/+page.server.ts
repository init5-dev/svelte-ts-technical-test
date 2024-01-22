import { error, redirect } from '@sveltejs/kit'
import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData()
    const file = data.get('file')

    if (!(file as File).name || (file as File).name === 'undefined'
    ) {
      return error(400, {
        message: 'Please, select a file'
      })
    }

    const content = await file?.text()
    let success = false

    try {
      const json = JSON.parse(content)
      const {category, amount, date} = json

      await prisma.category.update({
        where: {
          name: category
        },
        data: {
          costs: {
            create: {
              amount, 
              date: new Date(Date.parse(date)),
              file: file?.name
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
          return error(422, {
            message: 'This cost is already registered'
          })
        } else if (e.code === 'P2025') {
          return error(422, {
            message: 'File data is incorrect'
          })
        } else {
          return error(422, {
            message: e.message
          })
        }
      }

      return error(422, {
        message: 'Malformed cost file'
      })
    } 
    
   if (success) throw redirect(302, '/costs?status=updated') 
  }
}