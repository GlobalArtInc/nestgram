---
id: message-interactions

title: Message Interactions

sidebar_position: 3
---

**Message interactions** — we'll call them "interaction" moving forward—are a framework for adding interactive elements to the messages your app or bot sends. They're accessible, customizable, and easy to use.

There are several different types of interactions; this documentation will outline the basics of this new framework and each example.

## Button

**Buttons** are interactive components that render on messages. They can be clicked by users, and send an interaction to your app when clicked.

<img src="/img/content/button.jpg" alt="Buttons" width="500" />

```typescript title="src/app.components.ts"
import { Injectable } from '@nestjs/common';
import { Context, Button, ButtonContext, ComponentParam, On, TextCommandContext } from '@nestgramjs/core';
import { Markup, Telegraf } from 'telegraf';

@Injectable()
export class AppService {
  @TextCommand({
    name: 'start',
    description: 'Displays this help message.',
  })
  onStart(@Context() [ctx]: TextCommandContext) {
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
```

