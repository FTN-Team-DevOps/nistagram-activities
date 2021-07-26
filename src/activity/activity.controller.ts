import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ActivityService } from './activity.service';

@Controller('/')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @MessagePattern('activities-get')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async myController(@Payload() data: any): Promise<string> {
    return await this.activityService.test();
  }
}
