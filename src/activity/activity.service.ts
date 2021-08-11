import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Activity, ActivityDocument } from './activity.model';
import { ActivityCreateDTO } from './dto/activity-create.dto';
import { ActivitySearchDTO } from './dto/activity-search.dto';
import { ActivityUpdateDTO } from './dto/activity-update.dto';

@Injectable()
export class ActivityService {
  constructor(
    @InjectModel(Activity.name)
    private readonly activityModel: Model<ActivityDocument>,
  ) {}

  async findAll(params: ActivitySearchDTO): Promise<Activity[]> {
    return this.activityModel.find(params).exec();
  }

  async create(activity: ActivityCreateDTO): Promise<Activity> {
    return this.activityModel.create(activity);
  }

  async update(_id: string, activity: ActivityUpdateDTO): Promise<Activity> {
    return this.activityModel.findOneAndUpdate(
      { _id },
      { $set: { ...activity } },
      { new: true },
    );
  }
}
