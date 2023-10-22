import {Module} from '@nestjs/common';
import {UserService} from './user-list.service';
import {UserController} from './user-list.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {User, UserSchema} from './user-list.model';

@Module({
  imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}])],
  providers: [UserService],
  controllers: [UserController],
})
export class UsersModule {}
