import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // DTO、バリデーションの設定。whitelist:trueとすることでクライアントから送信されたデータの内DTOに含まれないデータは省かれる
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  // CORSの設定
  app.enableCors({ credentials: true, origin: ['http://localhost:3000'] });
  app.use(cookieParser());
  await app.listen(8080);
}
bootstrap();
