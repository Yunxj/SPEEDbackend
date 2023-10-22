import {NestFactory} from '@nestjs/core';
import {ValidationPipe} from '@nestjs/common';
import {AppModule} from './app.module';
// import {TransformInterceptor} from './common/interceptors/transform.interceptor';
// import {AllExceptionsFilter} from './common/exceptions/base.exception.filter';
// import {HttpExceptionFilter} from './common/exceptions/http.exception.filter';
// import {generateDocument} from './doc';

async function bootstrap() {
  // 解决跨域 {cors: true}
  const app = await NestFactory.create(AppModule, {cors: true});
  // // 统一响应格式
  // app.useGlobalInterceptors(new TransformInterceptor());
  // // 异常过滤器
  // app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter());
  // 启动全局字段校验，保证请求接口字段校验正确
  app.useGlobalPipes(new ValidationPipe());
  // 解决跨域
  // app.enableCors();

  // 创建文档
  // generateDocument(app);
  await app.listen(5001);
}
bootstrap();
