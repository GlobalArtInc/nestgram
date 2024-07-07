import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestGramModule } from '../../../packages/core';

@Module({
  imports: [
    NestGramModule.forRoot({
      token: '7261491149:AAEPXNCO6H5LZCFK7-jJW-bOVCY3i8Uv0c0',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
