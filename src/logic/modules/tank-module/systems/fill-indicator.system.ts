import { Sprite } from 'pixijs';
import { IndicatorFillSpeed, ShootIndicatorComponent } from '../components';
import { clamp } from '@shared/utils';

import {
  PixiEntity,
  System,
  SystemEntitiesCollection,
  Includes,
} from 'mysh-pixi';

@Includes(Sprite, ShootIndicatorComponent, IndicatorFillSpeed)
export class FillIndicatorSystem extends System<PixiEntity> {
  protected onExecute(entities: SystemEntitiesCollection<PixiEntity>): void {
    entities.loop((entity) => {
      const indicator$ = entity.get(ShootIndicatorComponent, true);
      const speed = entity.get(IndicatorFillSpeed);
      const view = entity.get(Sprite).children[0];

      indicator$.value += speed.value;
      indicator$.value = clamp(indicator$.value, 0, 1);

      view.scale.x = indicator$.value;
    });
  }
}
