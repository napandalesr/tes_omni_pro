export interface RegisterDtoResponse {
  status: number
  data: any
}

export interface RegisterDto {
  email: string
  username: string
  password: string
  name: Name
}

interface Name {
  firstname: string
  lastname: string
}
