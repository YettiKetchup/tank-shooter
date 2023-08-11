import { ButtonHoldedComponent } from '@features/interactive';
import { ShootIndicatorComponent } from '../components';
import { Sprite } from '@pixi/sprite';
import { clamp } from '@shared/utils';
import { ShootButtonComponent } from '@views/ui';
import {
  Entity,
  Filtered,
  Includes,
  System,
  OnChanges,
  WatchFor,
  includesPipe,
} from 'mysh-pixi';

@OnChanges(
  WatchFor.Changed,
  ButtonHoldedComponent,
  includesPipe(ShootButtonComponent)
)
@Includes(Sprite, ShootIndicatorComponent)
export class FillPowerBar extends System {
  protected onExecute(entities: Filtered, data: Entity): void {
    entities.loop((entity) => {
      const { chargingSpeed } = data.get(ShootButtonComponent);
      const indicator$ = entity.get(ShootIndicatorComponent, true);
      const view = entity.get(Sprite).children[0];

      indicator$.value += chargingSpeed;
      indicator$.value = clamp(indicator$.value, 0, 1);

      view.scale.x = indicator$.value;
    });
  }
}
