import { Injectable } from '@nestjs/common';
import { Button, ButtonContext, ComponentParam, On } from '../../../packages/core';
import { CommandContext, Context, ContextOf } from '../../../packages/core';
import { Markup, Telegraf } from 'telegraf';
import { TextCommand } from '../../../packages/core';

@Injectable()
export class AppService {
  constructor(private readonly client: Telegraf) {

  }
  getHello(): string {
    return 'Hello World!';
  }

  @TextCommand({
    name: 'start',
    description: 'Displays this help message.',
  })
  onStart(@Context() [ctx]: CommandContext) {
    const inlineKeyboard = Markup.inlineKeyboard([
      {
        text: 'Button 1',
        callback_data: 'nestgram/button1',
      },
      {
        text: 'Button 2',
        callback_data: 'nestgram/button2',
      },
    ])

    ctx.reply('Start message', inlineKeyboard);
  }

  @Button('nestgram/:name')
  async handleClickButton(@Context() ctx: ButtonContext, @ComponentParam('name') name: string) {
    await ctx.reply(`clicked on ${name}`);
  }
}
