import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TActivityAction =
  | 'like'
  | 'dislike'
  | 'favorite'
  | 'deleted'
  | 'comment'
  | 'message'
  | 'tag'
  | 'location'; //follow
export type ActivityDocument = Activity & Document;

@Schema({
  timestamps: {
    createdAt: true,
    updatedAt: true,
  },
})
export class Activity {
  @Prop()
  user: string; // IUser['id'];
  @Prop()
  targetUser?: string; // User['id']; // meesage, tag
  @Prop()
  publication?: string; // IPublication['id']; //sve sem message
  @Prop()
  text?: string; // message, tag, comment, location
  @Prop()
  action: TActivityAction;
  @Prop()
  taimeStamp: string; //mmddyyyy hh:mm:ss
}

export const ActivitySchema = SchemaFactory.createForClass(Activity);
