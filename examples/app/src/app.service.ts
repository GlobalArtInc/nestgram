import { Injectable } from '@nestjs/common';
import {
  TextCommandContext,
  Context,
  ContextOf,
  MiddlewareContext,
} from '../../../packages/core/src/context';
import { Telegraf } from 'telegraf';
import { Arguments, Middleware, TextCommand } from '../../../packages/core';

@Injectable()
export class AppService {
  constructor(private readonly client: Telegraf) {}
  getHello(): string {
    return 'Hello World!';
  }

  // testing middleware
  @Middleware()
  async testMiddleWare(@Context() [ctx, next]: MiddlewareContext) {
    next();
  }

  @TextCommand({
    name: 'start',
    description: 'Displays this help message.',
  })
  onStart(@Context() [ctx]: TextCommandContext, @Arguments() args: string[]) {
    ctx.reply(`Start message triggered\nArgs: ${args.join(', ') || 'none'}`);
  }
}
