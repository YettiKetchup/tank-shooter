import { Sprite } from 'pixijs';
import { System, Filtered, Includes } from 'mysh-pixi';
import { ShootIndicatorComponent } from '../components';
import { clamp } from '@shared/utils';

@Includes(Sprite, ShootIndicatorComponent)
export class FillIndicatorSystem extends System {
  public readonly fillSpeed: number = 0;

  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const indicator$ = entity.get(ShootIndicatorComponent, true);
      const view = entity.get(Sprite).children[0];

      indicator$.value += this.fillSpeed;
      indicator$.value = clamp(indicator$.value, 0, 1);

      view.scale.x = indicator$.value;
    });
  }
}
