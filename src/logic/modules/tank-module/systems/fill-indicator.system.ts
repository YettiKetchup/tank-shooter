import { Sprite } from 'pixijs';
import { System, Filtered, Includes } from 'mysh-pixi';
import { IndicatorFillSpeed, ShootIndicatorComponent } from '../components';
import { clamp } from '@shared/utils';

@Includes(Sprite, ShootIndicatorComponent, IndicatorFillSpeed)
export class FillIndicatorSystem extends System {
  protected onExecute(entities: Filtered): void {
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
