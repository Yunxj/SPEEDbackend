import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Delete,
} from '@nestjs/common';
import {UserService} from './user.service';
import {User} from './user.model';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // 添加
  @Post('/add')
  index3(@Body() params: User) {
    console.log('params', params);
    return this.userService.insertUser(params);
  }
  // 查询
  @Get('/list')
  index2(@Query() query: User) {
    console.log('query', query);
    return this.userService.getUser(query);
  }
  // 删除
  @Delete('/delete/:id')
  index1(@Param() param: {id: string}) {
    return this.userService.deleteUser(param);
  }
}
