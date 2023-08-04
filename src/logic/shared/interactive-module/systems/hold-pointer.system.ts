import { Container } from 'pixijs';
import {
  PixiEntity,
  System,
  SystemEntitiesCollection,
  Includes,
} from 'mysh-pixi';

import { ButtonHoldableComponent, ButtonHoldedComponent } from '../components';

@Includes(ButtonHoldableComponent, Container)
export class HoldPointerSystem extends System<PixiEntity> {
  protected onExecute(entities: SystemEntitiesCollection<PixiEntity>): void {
    entities.loop((entity) => {
      let timeoutId: ReturnType<typeof setInterval>;
      const entity$ = entity.observable();
      const container = entity.get(Container);

      container.interactive = true;

      container.on('pointerdown', () => {
        timeoutId = setInterval(() => {
          if (!entity.has([ButtonHoldedComponent])) {
            entity$.add(new ButtonHoldedComponent());
          } else {
            const holded$ = entity.get(ButtonHoldedComponent, true);
            holded$.frames += 1;
          }
        }, 16);
      });

      container.on('pointerup', () => {
        clearInterval(timeoutId);
        if (entity.has([ButtonHoldedComponent])) {
          entity$.remove(ButtonHoldedComponent);
        }
      });
    });
  }
}
