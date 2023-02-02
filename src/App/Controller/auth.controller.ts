import { type AuthDto } from './auth.dto';
import { AuthRepository } from './../../AccesData/Repositories/Auth/auth.repository';
import { AuthAdapter } from './../Adapter/auth.adapter';

export class AuthController {
  async auth (email: string, password: string): Promise<AuthDto> {
    console.log(email, password);
    const authAdapter = new AuthAdapter(new AuthRepository());
    console.log("authAdapter", authAdapter);
    return await authAdapter.auth(email, password);
  }
}
