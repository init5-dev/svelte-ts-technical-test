import { e as error, r as redirect } from "../../../../chunks/index.js";
import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();
const actions = {
  default: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    console.log("DATA:", request);
    if (!data.fileToUpload.name || data.fileToUpload.name === "undefined") {
      return error(400, {
        message: "Please, select a file"
      });
    }
    const { fileToUpload } = data;
    console.log("Submited file:", fileToUpload.name);
    const content = await fileToUpload.text();
    let success = false;
    try {
      const json = JSON.parse(content);
      const { category, amount, date } = json;
      console.log(category);
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
      });
      success = true;
    } catch (e) {
      console.log("ERROR:", e);
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === "P2002") {
          return error(422, {
            message: "This cost is already registered"
          });
        } else if (e.code === "P2025") {
          return error(422, {
            message: "File data is incorrect"
          });
        } else {
          return error(422, {
            message: e.message
          });
        }
      }
      return error(422, {
        message: "Malformed cost file"
      });
    }
    if (success)
      throw redirect(302, "/costs");
  }
};
export {
  actions
};
