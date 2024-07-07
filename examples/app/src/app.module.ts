import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestGramModule } from '../../../packages/core';

@Module({
  imports: [
    NestGramModule.forRoot({
      token: process.env.TG_TOKEN,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
