export interface Category {
  id?: number
  name: string
  costs: Cost[]
}

export interface Cost {
  id?: number
  category?: Category
  categoryId?: number
  amount: number
  date: Date
  file?: string| null
}