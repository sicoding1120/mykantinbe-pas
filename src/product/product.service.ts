import { HttpException, Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly bookRepository: Repository<Product>,
  ) {}

  async createProduct(payload: any) {
    const product = await this.bookRepository.findOne({
      where: { name: payload.name },
    });
    if (product) {
      throw new HttpException('error product already exist', 422);
    }
    const newProduct = this.bookRepository.save(payload);

    return newProduct;
  }

    async findAllProduct() {
        return this.bookRepository.find();
    }
}
