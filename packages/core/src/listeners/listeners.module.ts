import {Module, OnApplicationBootstrap, OnModuleInit} from '@nestjs/common';
import { Telegraf } from 'telegraf';

import * as CustomListeners from './handlers';
import { DiscoveryModule } from '@nestjs/core';
import { ExplorerService } from '../nestgram-explorer.service';
import { ListenerDiscovery } from './listener.discovery';
import { Listener } from './decorators';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { BaseHandler, ...listeners } = CustomListeners;

@Module({
  imports: [DiscoveryModule],
  providers: Object.values(listeners),
})
export class ListenersModule implements OnModuleInit {
  constructor(
    private readonly client: Telegraf,
    private readonly explorerService: ExplorerService<ListenerDiscovery>,
  ) {}

  onModuleInit() {
    const explorer = this.explorerService.explore(Listener.KEY);
    
    explorer.forEach((listener) => {
      const eventType = listener.getType();
      const event = listener.getEvent();
      this.client[eventType](event, (...args: unknown[]) => listener.execute(args));
    });
  }
}