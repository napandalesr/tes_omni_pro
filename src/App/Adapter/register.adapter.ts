import { type RegisterDto } from './../Controller/RegisterController/register.dto';
import { type IRegisterResponse } from './../../AccesData/Repositories/Register/register.model';
import { type RegisterPorts } from './../../AccesData/Ports/register.port';

export class RegisterAdapter {
  constructor (private readonly registerPort: RegisterPorts) {}
  async post (data: RegisterDto): Promise<IRegisterResponse> {
    return await this.registerPort.post(data);
  }
}
