import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { AppModule } from './app.module';

// Uncomment if you need them
// import {TransformInterceptor} from './common/interceptors/transform.interceptor';
// import {AllExceptionsFilter} from './common/exceptions/base.exception.filter';
// import {HttpExceptionFilter} from './common/exceptions/http.exception.filter';
// import {generateDocument} from './doc';

const server = express();

const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
    { cors: true }
  );

  app.useGlobalPipes(new ValidationPipe());
  // Uncomment if you need them
  // app.useGlobalInterceptors(new TransformInterceptor());
  // app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter());
  // generateDocument(app);

  return app.init();
};

createNestServer(server);

// Export the server for Vercel
export = server;
