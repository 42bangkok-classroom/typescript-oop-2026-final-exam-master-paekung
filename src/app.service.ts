import { Injectable } from '@nestjs/common';
import { res } from './interfaces/res.interface';

@Injectable()
export class AppService {
  getHello(): res {
    return {
      service: 'purchase-api',
      version: '1.0.0',
    };
  }
}
