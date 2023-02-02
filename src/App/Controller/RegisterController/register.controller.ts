import { RegisterRepository } from './../../../AccesData/Repositories/Register/register.repository';
import { RegisterAdapter } from './../../Adapter/register.adapter';
import { type RegisterDto, type RegisterDtoResponse } from './register.dto';

export class RegisterController {
  async post (data: RegisterDto): Promise<RegisterDtoResponse> {
    const registerAdapter = new RegisterAdapter(new RegisterRepository());
    return await registerAdapter.post(data);
  }
}
