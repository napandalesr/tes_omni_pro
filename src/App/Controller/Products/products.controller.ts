import { ProductsRepository } from './../../../AccesData/Repositories/Products/products.repository';
import { type ProductReponseDto } from './products.dto';
import { ProductsAdapter } from '../../Adapter/products.adapter';

export class ProductsController {
  async getAll (): Promise<ProductReponseDto> {
    const productAdapter = new ProductsAdapter(new ProductsRepository());
    return await productAdapter.getAll();
  }
}
