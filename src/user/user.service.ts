import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {User} from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModal: Model<User>) {}
  async insertUser(params: User) {
    try {
      const {name, password, role} = params;
      const newPaper = new this.userModal({name, password, role});
      const result1 = await newPaper.save();
      const result2: any = await this.userModal.find(params);
      console.log('result1', result1);
      console.log('result2', result2);
      return {code: 1, message: 'register success', data: result2[0].role};
    } catch (err) {
      return {code: 0, message: 'login fail'};
    }
  }
  async getUser(query: User) {
    try {
      const result: any = await this.userModal.find(query);
      console.log('result', result);
      let message;
      if (result.length === 0) {
        message = 'name or password or role is wrong please check';
      } else {
        message = 'login success';
      }
      return {code: 1, message, data: result[0].role};
    } catch (err) {
      return {code: 0, message: 'login fail'};
    }
  }
  async deleteUser(param: {id: string}) {
    const {id} = param;
    const result = await this.userModal.deleteOne({
      _id: id,
    });
    console.log('result2', result);
    return {code: 1, message: 'sucess'};
  }
}
