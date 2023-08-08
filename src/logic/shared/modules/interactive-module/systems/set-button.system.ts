import { Sprite, Texture } from 'pixijs';

import {
  System,
  Filtered,
  Includes,
  ObservableEntity,
  ComponentType,
} from 'mysh-pixi';

import {
  ButtonComponent,
  ButtonPointerDown,
  ButtonPointerEnter,
  ButtonPointerLeave,
  ButtonPointerUp,
  DisabledButtonComponent,
} from '../components';

@Includes(ButtonComponent, Sprite)
export class SetButtonSystem extends System {
  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const sprite = entity.get(Sprite);
      const button = entity.get(ButtonComponent);

      sprite.texture = button.idle;
      sprite.interactive = true;

      const entity$ = entity.observable();

      sprite.on('pointerenter', () => {
        this.onEvent(entity$, sprite, button.hover, ButtonPointerEnter);
      });

      sprite.on('pointerleave', () => {
        this.onEvent(entity$, sprite, button.idle, ButtonPointerLeave);
      });

      sprite.on('pointerdown', () => {
        this.onEvent(entity$, sprite, button.pressed, ButtonPointerDown);
      });

      sprite.on('pointerup', () => {
        this.onEvent(entity$, sprite, button.hover, ButtonPointerUp);
      });
    });
  }

  private onEvent(
    entity$: ObservableEntity,
    sprite: Sprite,
    texture: Texture,
    componentType: ComponentType<any>
  ): void {
    if (entity$.instance.has([DisabledButtonComponent])) return;
    sprite.texture = texture;
    entity$.add(new componentType());

    /**
     * Clear state in the next frame after all systems finished
     */
    setTimeout(() => {
      this.clearButtonState(entity$, [
        ButtonPointerUp,
        ButtonPointerDown,
        ButtonPointerEnter,
        ButtonPointerLeave,
      ]);
    }, 16);
  }

  private removeComponent(
    entity$: ObservableEntity,
    componentType: ComponentType<any>
  ): void {
    if (entity$.instance.has([componentType])) {
      entity$.remove(componentType);
    }
  }

  private clearButtonState(
    entity$: ObservableEntity,
    state: ComponentType<any>[]
  ): void {
    state.forEach((component) => this.removeComponent(entity$, component));
  }
}
