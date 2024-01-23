export interface Category {
  id?: number
  name: string
  costs: Cost[]
}

export interface Cost {
  id?: number
  category?: string
  categoryId?: number
  amount: number
  date: Date
}