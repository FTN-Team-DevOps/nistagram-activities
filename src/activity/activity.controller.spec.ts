import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { ActivityController } from './activity.controller';
import { Activity, ActivitySchema } from './activity.model';
import { ActivityService } from './activity.service';

describe('ActivityController', () => {
  let controller: ActivityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forFeature([
          { name: Activity.name, schema: ActivitySchema },
        ]),
      ],
      controllers: [ActivityController],
      providers: [ActivityService],
    }).compile();

    controller = module.get<ActivityController>(ActivityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
