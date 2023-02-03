import { type IPRoductResponse } from './../Repositories/Products/product.model';

export interface ProductPorts {
  getAll: () => Promise<IPRoductResponse>
}
