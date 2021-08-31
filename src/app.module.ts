import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { ActivityModule } from './activity/activity.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI || ''),
    PrometheusModule.register(),
    ActivityModule,
  ],
})
export class AppModule {}
