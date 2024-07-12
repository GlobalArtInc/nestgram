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

  @TextCommand({
    name: 'ping',
    description: 'pong.',
  })
  onStart(@Context() [ctx]: TextCommandContext) {
    ctx.reply(`pong`);
  }
}
