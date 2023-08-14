import { PixiRenderer } from '@app/pixi.renderer';
import { ShootButtonComponent } from '@entities/ui/shoot-button';
import { ButtonHoldedComponent } from '@features/interactive';
import { NeedShootComponent } from '@features/shooter';
import { Container } from '@pixi/display';
import { ViewName } from '@shared/data';
import { PlayerTankComponent, TankComponent } from '@widgets/tank';

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
  WatchFor.Removed,
  ButtonHoldedComponent,
  includesPipe(ShootButtonComponent)
)
@Includes(TankComponent, PlayerTankComponent)
export class PlayerShootSystem extends System {
  protected onExecute(filtered: Filtered, shootButton: Entity): void {
    filtered.loop((entity) => {
      const { type } = shootButton.get(ShootButtonComponent);
      const entity$ = entity.observable();

      const projectileParent = PixiRenderer.Application.stage.getChildByName(
        ViewName.Projectiles,
        true
      ) as Container;

      entity$.add(new NeedShootComponent(type, projectileParent));
    });
  }
}
