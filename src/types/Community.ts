import { ObjectId } from 'mongodb';
import InterestTag from './InterestTag';

type Community = {
  _id: ObjectId;
  name: string; // could be title as well
  // TODO: implement
  // channels: Channel[];
  users: ObjectId[]; // see ServerUser
  interests: InterestTag[];
};

export default Community;
