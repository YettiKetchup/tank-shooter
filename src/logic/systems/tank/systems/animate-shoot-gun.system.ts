import { ButtonHoldedComponent } from '@features/interactive';
import { GunShootAnimation } from '../animations';
import { Sprite } from '@pixi/sprite';
import { TankComponent } from '@views/tank';
import { ShootButtonComponent } from '@views/ui';
import {
  Filtered,
  Includes,
  System,
  OnChanges,
  WatchFor,
  includesPipe,
} from 'mysh-pixi';

@OnChanges(
  WatchFor.Removed,
  ButtonHoldedComponent,
  includesPipe(ShootButtonComponent)
)
@Includes(Sprite, TankComponent)
export class AnimateShootGunSystem extends System {
  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const gun = entity.get(Sprite).children[0] as Sprite;
      GunShootAnimation(gun);
    });
  }
}
