import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Activity } from './activity.model';
import { ActivityService } from './activity.service';
import { ActivityCreateDTO } from './dto/activity-create.dto';
import { ActivitySearchDTO } from './dto/activity-search.dto';
import { ActivityUpdateDTO } from './dto/activity-update.dto';

@Controller('/')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @MessagePattern('activities-get')
  async search(@Payload() params: ActivitySearchDTO): Promise<Activity[]> {
    return await this.activityService.findAll(params);
  }

  @MessagePattern('activities-create')
  async create(@Payload() payload: ActivityCreateDTO): Promise<Activity> {
    return await this.activityService.create(payload);
  }

  @MessagePattern('activities-update')
  async update(
    @Payload() payload: { _id: string; data: ActivityUpdateDTO },
  ): Promise<Activity> {
    return await this.activityService.update(payload._id, payload.data);
  }
}
