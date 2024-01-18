import { error, redirect } from '@sveltejs/kit'
import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const actions = {
  default: async ({ request }) => {
    const data = Object.fromEntries(await request.formData())

    if (!(data.fileToUpload as File).name || (data.fileToUpload as File).name === 'undefined'
    ) {
      return error(400, {
        message: 'Please, select a file'
      })
    }

    const { fileToUpload } = data as { fileToUpload: File }

    console.log('Submited file:', fileToUpload.name)

    const content = await fileToUpload.text()
    let success = false

    try {
      const json = JSON.parse(content)
      const {category, amount, date} = json

      console.log(category)

      await prisma.category.update({
        where: {
          name: category
        },
        data: {
          costs: {
            create: {
              amount, 
              date: new Date(Date.parse(date)),
              file: fileToUpload.name
            }
          }
        }
      }) 

      success = true
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
    
    if (success) throw redirect(302, '/costs') 
  }
}