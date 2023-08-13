import { ShootButtonComponent } from '@entities/ui/shoot-button';
import { PlayerTankComponent } from '@widgets/tank';
import { ButtonHoldedComponent } from '@features/interactive';
import { ShootPowerComponent } from '@features/shooter';
import { clamp } from '@shared/utils';
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
@Includes(PlayerTankComponent, ShootPowerComponent)
export class IncreasePlayerPower extends System {
  protected onExecute(filtered: Filtered, shootButton: Entity): void {
    filtered.loop((entity) => {
      const power$ = entity.get(ShootPowerComponent, true);
      const { chargingSpeed } = shootButton.get(ShootButtonComponent);

      power$.delta += chargingSpeed;
      power$.delta = clamp(power$.delta, 0, 1);
    });
  }
}
