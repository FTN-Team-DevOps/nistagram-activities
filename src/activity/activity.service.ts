import { Injectable } from '@nestjs/common';

@Injectable()
export class ActivityService {
  // constructor() {}

  async test() {
    return 'ok';
  }
}
