import { GunAnimation } from '../animations';
import { Sprite } from '@pixi/sprite';
import { TankComponent } from '../components';
import { ViewName } from '@shared/data';
import { NeedShootComponent } from '@features/shooter';
import {
  Filtered,
  Includes,
  System,
  OnChanges,
  WatchFor,
  Entity,
} from 'mysh-pixi';

@OnChanges(WatchFor.Removed, NeedShootComponent)
@Includes(Sprite, TankComponent)
export class AnimateShootGunSystem extends System {
  protected onExecute(entities: Filtered, entity: Entity): void {
    const sprite = entity.get(Sprite);
    const gun = sprite.getChildByName(ViewName.TankGun) as Sprite;
    GunAnimation(gun);
  }
}
