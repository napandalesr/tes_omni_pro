export interface IRegisterResponse {
  status: number
  data: any
}

export interface registerModel {
  email: string
  username: string
  password: string
  name: Name
}

interface Name {
  firstname: string
  lastname: string
}
