import { TActivityAction } from '../activity.model';

export class ActivityCreateDTO {
  targetUser?: string; // User['id']; // meesage, tag
  publication?: string; // IPublication['id']; //sve sem message
  text?: string; // message, tag, comment, location
  action: TActivityAction;
}