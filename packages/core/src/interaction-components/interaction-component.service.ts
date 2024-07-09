import { Injectable, Logger } from "@nestjs/common";
import { InteractionComponentDiscovery, InteractionComponentMeta } from "./interaction-component.discovery";

@Injectable()
export class InteractionComponentService {
  private readonly logger = new Logger(InteractionComponentService.name);

  public readonly cache = new Map<string, InteractionComponentDiscovery>();

  private componentName(type: InteractionComponentMeta['type'], interactionId: InteractionComponentMeta['interactionId']): string {
    return [type, interactionId].join('_');
  }

  public add(component: InteractionComponentDiscovery) {
    const name = this.componentName(component.getType(), component.getInteractionId());

    if (this.cache.has(name)) {
      this.logger.warn(`Interaction Component : ${name} already exists`);
    }

    this.cache.set(name, component);
  }

  public get(type: InteractionComponentMeta['type'], interactionId: InteractionComponentMeta['interactionId']) {
    for (const component of this.cache.values()) {
      if (component.matcher(this.componentName(type, interactionId))) {
        return component;
      }
    }

    return null;
  }

  public remove(type: InteractionComponentMeta['type'], customId: InteractionComponentMeta['interactionId']) {
    this.cache.delete(this.componentName(type, customId));
  }
}