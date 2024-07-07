import { Inject, Injectable } from '@nestjs/common';
import { Context, Middleware, Telegraf } from 'telegraf';
import { FilteredContext } from 'telegraf/typings/context';
import { Guard, MaybeArray, NonemptyReadonlyArray } from 'telegraf/typings/core/helpers/util';
import { UpdateType } from 'telegraf/typings/telegram-types';

@Injectable()
export abstract class BaseHandler<Filter extends UpdateType | Guard<Context['update']>> {
  @Inject(Telegraf)
  private readonly client: Telegraf;

  protected on(
    filters: MaybeArray<Filter>,
    ...fns: NonemptyReadonlyArray<Middleware<FilteredContext<Context, Filter>>>
  ) {
    this.client.on(filters, ...fns);
  }
}
