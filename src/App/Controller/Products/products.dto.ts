export interface ProductReponseDto {
  status: number
  data: ProductDto[]
}

export interface ProductDto {
  id: number
  name: string
  priceOld: string
  bestPrice: string
  tallas: []
  stock: number
  state: string
  images: []
  description: string
}
