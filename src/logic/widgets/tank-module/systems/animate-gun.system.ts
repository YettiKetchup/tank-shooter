import { Sprite } from '@pixi/sprite';
import { Entity, Filtered, System, Includes } from 'mysh-pixi';
import { PlayerTankComponent } from '../components';
import { GunAnimation } from '../animations';

@Includes(Sprite, PlayerTankComponent)
export class AnimateGunSystem extends System {
  protected onExecute(entities: Filtered<Entity>): void {
    entities.loop((entity) => {
      const gun = entity.get(Sprite).children[0] as Sprite;
      GunAnimation(gun);
    });
  }
}
