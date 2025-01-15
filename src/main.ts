import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/routes/app/app.module';
import config from './config/configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.useGlobalInterceptors(new LoggingInterceptor());  // logging
  await app.listen(config.port ?? 3000);
}
bootstrap();
