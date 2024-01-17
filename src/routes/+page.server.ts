import { error } from '@sveltejs/kit'
import { PrismaClient } from "@prisma/client"

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
      return error(422, {
        message: 'Malformed cost file'
      })
    }      
  }
}