import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ActivityModule } from './activity/activity.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URI), ActivityModule],
})
export class AppModule {}
