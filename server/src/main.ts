import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const port: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 4242;

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
  const url = await app.getUrl();
  if (url.includes('[::1]')) {
    console.log(`App is running on: http://localhost:${port}`);
  } else {
    console.log(`Application is running on: ${url}`);
  }
}
bootstrap();
