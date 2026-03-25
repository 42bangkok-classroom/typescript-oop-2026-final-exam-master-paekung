import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import type { ApiResponse } from './interfaces/response.interface';
import { res } from './interfaces/res.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): ApiResponse<res> {
    const data = this.appService.getHello();
    return { success: true, data , message: 'Hello NestJS'};
  }
}
