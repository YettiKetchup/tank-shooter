import { Container } from 'pixijs';
import { Includes, System, Filtered } from 'mysh-pixi';
import { ChangableDisabledAlpha, DisabledButtonComponent } from '../components';

@Includes(Container, ChangableDisabledAlpha)
export class AlphaDisabledChildren extends System {
  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const alpha = entity.get(ChangableDisabledAlpha);
      const container = entity.get(Container);

      container.children.forEach((child) => {
        child.alpha = entity.has([DisabledButtonComponent])
          ? alpha.onDisable
          : alpha.onEnable;
      });
    });
  }
}
