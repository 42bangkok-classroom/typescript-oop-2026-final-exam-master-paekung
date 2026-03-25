import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';


@Module({
  imports: [],
  controllers: [ProductController],
  providers: [
    ProductService,
    {
      provide: APP_FILTER,
      useClass: ApiExceptionFilter,
    },
  ],
})
export class ProductModule {}
