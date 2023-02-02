import { type RegisterPorts } from './../../Ports/register.port';
import { type IRegisterResponse, type registerModel } from './register.model';
import { Config, httpClient, urlBase } from './../../../Config/HttpClient';

export class RegisterRepository implements RegisterPorts {
  async post (dataPost: registerModel): Promise<IRegisterResponse> {
    const { status, data } = await httpClient().post(`${urlBase}users`, {
      ...dataPost
    }, Config);
    return { status, data };
  };
}
