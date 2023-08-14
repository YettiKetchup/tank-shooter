import { Sprite } from '@pixi/sprite';
import { ViewName } from '@shared/data';
import { clamp } from '@shared/utils';
import { PowerbarComponent } from '../components';
import { ButtonHoldedComponent } from '@features/interactive';
import { ShootButtonComponent } from '@entities/ui/shoot-button';
import {
  Entity,
  Filtered,
  Includes,
  OnChanges,
  System,
  WatchFor,
  includesPipe,
} from 'mysh-pixi';

@OnChanges(
  WatchFor.Changed,
  ButtonHoldedComponent,
  includesPipe(ShootButtonComponent)
)
@Includes(Sprite, PowerbarComponent)
export class FillPowerbarSystem extends System {
  protected onExecute(filtered: Filtered, shootButton: Entity): void {
    filtered.loop((entity) => {
      const { chargingSpeed } = shootButton.get(ShootButtonComponent);
      const powerbar$ = entity.get(PowerbarComponent, true);
      const sprite = entity.get(Sprite);
      const progress = sprite.getChildByName(ViewName.PowerbarValue);

      if (progress) {
        let { value } = powerbar$;
        value += chargingSpeed;
        value = clamp(value, 0, 1);
        powerbar$.value = value;

        progress.scale.x = value;
      }
    });
  }
}
