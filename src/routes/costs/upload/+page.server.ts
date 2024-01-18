import { error } from '@sveltejs/kit'
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

    try {
      const json = JSON.parse(content)

      const newCost = await prisma.cost.create({
        data: {
          ...json,
          file: fileToUpload.name
        }
      })

      console.log('Created new cost with id:', newCost.id)
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          return error(422, {
            message: 'This cost is already registered'
          })
        }
      }

      return error(422, {
        message: 'Malformed cost file'
      })
    }      
  }
}