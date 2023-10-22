import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose';
import {PaperModule} from './paper/paper.module';
import {UserModule} from './user/user.module';
import {UsersModule} from './user-list/user-list.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      'mongodb+srv://yuyihai704:20030704aB@speed.cyoe5v8.mongodb.net/',
      {
        autoCreate: true,
      },
    ),
    PaperModule,
    UserModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
