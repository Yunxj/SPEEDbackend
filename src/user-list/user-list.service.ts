import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {User} from './user-list.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findAll() {
    try {
      const result: any = await this.userModel.find();
      return {code: 1, message: 'success', data: result};
    } catch (err) {
      return {code: 0, message: 'fail'};
    }
  }

  async findByName(name: string) {
    try {
      const result = await this.userModel.find({name: new RegExp(name, 'i')});
      return {code: 1, message: 'success', data: result};
    } catch (err) {
      return {code: 0, message: 'login fail'};
    }
  }
}
