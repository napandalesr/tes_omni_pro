import { type ProductReponseDto } from './../Controller/Products/products.dto';
import { type ProductPorts } from './../../AccesData/Ports/products.port';

export class ProductsAdapter {
  constructor (private readonly productsPort: ProductPorts) {}
  async getAll (): Promise<ProductReponseDto> {
    return await this.productsPort.getAll();
  }
}
