import { Injectable } from '@nestjs/common';
import { On } from '../../../packages/core';
import { CommandContext, Context, ContextOf } from '../../../packages/core/src/context';
import { Telegraf } from 'telegraf';
import { TextCommand } from '../../../packages/core/src/text-commands/decorators';

@Injectable()
export class AppService {
  constructor(private readonly client: Telegraf) {

  }
  getHello(): string {
    return 'Hello World!';
  }

  @TextCommand({
    name: 'help',
    description: 'Displays this help message.',
  })
  onHelp(@Context() [ctx]: CommandContext) {
    console.log(ctx.message.from.first_name + ', I am a bot that helps you with your Telegram needs')
    ctx.reply('Send me a message to get started!');
  }
}
