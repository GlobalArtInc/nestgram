import { InteractionComponentType } from '../interaction-component.enums';
import { InteractionComponent } from './interaction-component.decorator';

/**
 * Decorator that marks a method as a button for telegraf.js client.
 * @param interactionId
 */
export const Button = (interactionId: string) =>
  InteractionComponent({ interactionId, type: InteractionComponentType.BUTTON });
