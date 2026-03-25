import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      "service": "purchase-api",
      "version": "1.0.0"
    };
  }
}
