import { NestFactory, Reflector } from '@nestjs/core';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true, transformOptions:{ excludeExtraneousValues:true } }));
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector), { excludePrefixes:['_'] }));
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
  });
  await app.listen(port);
}
bootstrap();
