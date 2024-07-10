---
id: listeners

slug: listeners

title: Listeners

description: Listeners are used to listen to events emitted by Telegram.

sidebar_position: 3
---

NestGram supports interacting with all [telegram events](https://telegraf.js.org/classes/Composer.html#on-3) via the `@On` decorator.

```typescript title="src/app.service.ts"
import {Injectable, Logger} from '@nestjs/common';
import {On, Context, ContextOf} from '@nestgramjs/core';

@Injectable()
export class AppService {
    private readonly logger = new Logger(AppService.name);

    @On('message')
    async onMessage(@Context() [ctx]: ContextOf<'message'>) {
        this.logger.log(ctx);
    }
}
```
