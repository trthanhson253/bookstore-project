import { User } from './user';
import { ReplyComment } from './reply-comment';

export class Comment {
  public id: number;
  public content: string;
  user:User;
  likes:number;
  replyComment:ReplyComment;
}
