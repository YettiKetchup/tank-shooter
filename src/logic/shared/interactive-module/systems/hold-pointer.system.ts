import { Container } from 'pixijs';
import {
  PixiEntity,
  System,
  SystemEntitiesCollection,
  Includes,
} from 'mysh-pixi';

import { CanHoldComponent, HoldedComponent } from '../components';

@Includes(CanHoldComponent, Container)
export class HoldPointerSystem extends System<PixiEntity> {
  protected onExecute(entities: SystemEntitiesCollection<PixiEntity>): void {
    entities.loop((entity) => {
      let timeoutId: ReturnType<typeof setInterval>;
      const entity$ = entity.observable();
      const container = entity.get(Container);

      container.interactive = true;

      container.on('pointerdown', () => {
        timeoutId = setInterval(() => {
          if (!entity.has([HoldedComponent])) {
            entity$.add(new HoldedComponent());
          } else {
            const holded$ = entity.get(HoldedComponent, true);
            holded$.frames += 1;
          }
        }, 16);
      });

      container.on('pointerup', () => {
        clearInterval(timeoutId);
        if (entity.has([HoldedComponent])) {
          entity$.remove(HoldedComponent);
        }
      });
    });
  }
}
