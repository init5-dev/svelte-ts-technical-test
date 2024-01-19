import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const load = async () => {
  const response = await prisma.cost.findMany();
  const costs = [];
  for (const entry of response) {
    const { id, categoryId, amount, date, file } = entry;
    const category = (await prisma.category.findUnique({
      where: {
        id: categoryId
      }
    }))?.name;
    const cost = {
      id,
      category,
      amount,
      date,
      file
    };
    costs.push(cost);
  }
  return { feed: costs };
};
export {
  load
};
