import { Module } from '@nestjs/common';
import { AuthModule } from '@/routes/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '@/routes/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.development.env', '.production.env'],
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
