import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { NestGramModule } from '../../../packages/core';

@Module({
  imports: [
    NestGramModule.forRoot({
      token: process.env.TG_TOKEN,
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
