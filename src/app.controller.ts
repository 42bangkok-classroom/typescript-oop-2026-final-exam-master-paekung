import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiResponse } from './interfaces/response.interface';


export class Test {
  service: string;
  version: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<ApiResponse<Test>> {
    const data = {service:'test' , version : 'test'};
    return { success: true, data , message : "Hello NestJS"};
  }
}
