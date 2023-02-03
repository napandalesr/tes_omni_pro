import { type IPRoductResponse } from './product.model';
import { Config } from './../../../Config/HttpClient';
import { httpClient } from '../../../Config/HttpClient';
import { type ProductPorts } from './../../Ports/products.port';

export class ProductsRepository implements ProductPorts {
  async getAll (): Promise<IPRoductResponse> {
    const data: IPRoductResponse = await httpClient().get(`https://app-prueba.herokuapp.com/productos`, Config);
    return data;
  }
}
