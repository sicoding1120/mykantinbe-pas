import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('/list')
  async findAllBook() {
    return await this.productService.findAllProduct();
    }
    
  @Post('/create')
  async createProduct(@Body() payload: any) {
    return await this.productService.createProduct(payload);
  }
}
