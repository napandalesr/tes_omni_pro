import { type IAuthResponse } from './../../AccesData/Repositories/Auth/auth.model';
import { type AuthPorts } from './../../AccesData/Ports/auth.port';

export class AuthAdapter {
  constructor (private readonly authsRepository: AuthPorts) {}
  async auth (email: string, password: string): Promise<IAuthResponse> {
    return await this.authsRepository.auth(email, password);
  }
}
