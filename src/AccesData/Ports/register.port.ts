import { type registerModel, type IRegisterResponse } from './../Repositories/Register/register.model';

export interface RegisterPorts {
  post: (data: registerModel) => Promise<IRegisterResponse>
}
