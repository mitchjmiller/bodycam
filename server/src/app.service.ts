import { Injectable } from '@nestjs/common';

export interface AppStatus {
  status: string
}

@Injectable()
export class AppService {
  getStatus(): AppStatus {
    return { status: 'OK' };
  }
}
