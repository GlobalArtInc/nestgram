import { match } from "path-to-regexp";
import { NestGramBaseDiscovery } from "../context";
import { InteractionComponentType } from "./interaction-component.enums";
import { Context, NarrowedContext } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";

export interface InteractionComponentMeta {
  type: InteractionComponentType;
  interactionId: string;
}

export class InteractionComponentDiscovery extends NestGramBaseDiscovery<InteractionComponentMeta> {
  public readonly matcher = match([this.meta.type.toString(), this.meta.interactionId].join('_'));

  public getType() {
    return this.meta.type;
  }

  public getInteractionId() {
    return this.meta.interactionId;
  }

  public isInteractionComponent(): this is InteractionComponentDiscovery {
    return true; 
  }

  public execute(ctx: Context) {
    return super.execute(ctx);
  }

  public toJSON(): Record<string, any> {
    return this.meta;
  }
  
}