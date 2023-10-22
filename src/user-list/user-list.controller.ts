import {Controller, Get, Query} from '@nestjs/common';
import {UserService} from './user-list.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findByName(@Query('name') name: string): Promise<any> {
    if (name) {
      return this.userService.findByName(name);
    }
    return this.userService.findAll();
  }
}
