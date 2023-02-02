import { type IAuthResponse } from './../../AccesData/Repositories/Auth/auth.model';
import { type AuthPorts } from './../../AccesData/Ports/auth.port';

export class AuthAdapter {
  constructor (private readonly authsPort: AuthPorts) {}
  async auth (email: string, password: string): Promise<IAuthResponse> {
    return await this.authsPort.auth(email, password);
  }
}
