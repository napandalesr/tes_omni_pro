import { type IAuthResponse } from './auth.model';
import { Config, httpClient, urlBase } from './../../../Config/HttpClient';
import { type AuthPorts } from './../../Ports/auth.port';

export class AuthRepository implements AuthPorts {
  async auth (email: string, password: string): Promise<IAuthResponse> {
    const { status, data } = await httpClient().post(`${urlBase}auth/login`, {
      username: email,
      password
    }, Config);
    return { status, data };
  };
}
