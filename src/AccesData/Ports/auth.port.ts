import { type IAuthResponse } from './../Repositories/Auth/auth.model';

export interface AuthPorts {
  auth: (email: string, password: string) => Promise<IAuthResponse>
}
