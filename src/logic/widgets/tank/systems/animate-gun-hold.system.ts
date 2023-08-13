import { TankComponent } from '../components';
import { ShootPowerComponent } from '@features/shooter';
import { Sprite } from '@pixi/sprite';
import { ViewName } from '@shared/data';
import {
  Entity,
  Filtered,
  Includes,
  OnChanges,
  System,
  WatchFor,
} from 'mysh-pixi';

@OnChanges(WatchFor.Changed, ShootPowerComponent)
@Includes(TankComponent)
export class AnimateGunHoldSystem extends System {
  protected onExecute(filtered: Filtered, entity: Entity): void {
    const { delta } = entity.get(ShootPowerComponent);
    const sprite = entity.get(Sprite);
    const gun = sprite.getChildByName(ViewName.TankGun) as Sprite;
    gun.y = delta * 10;
  }
}
