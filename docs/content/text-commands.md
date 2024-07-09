---
id: text-commands

slug: text-commands

title: Text Commands

description: Text commands are the most common type of command. They are used to send a message to the channel.

sidebar_position: 5
---

Create a simple command handler for messages using `@TextCommand`.

```typescript title="src/app.service.ts"
import { Injectable } from '@nestjs/common';
import { Context, TextCommand, TextCommandContext } from '@nestgramjs/core';

@Injectable()
export class AppService {
    @TextCommand({
        name: 'start',
        description: 'Start command!',
    })
    public onStart(@Context() [ctx]: TextCommandContext) {
        return ctx.reply('Start command triggered!');
    }
}
```

If all goes well, you should see something like this:

![Text Command](/img/content/text_command.png 'Text Command')
