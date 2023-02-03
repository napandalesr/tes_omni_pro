export interface IPRoductResponse {
  status: number
  data: ProductModel[]
}

export interface ProductModel {
  id: number
  name: string
  priceOld: string
  bestPrice: string
  tallas: []
  stock: number
  images: []
  state: string
  description: string
}
