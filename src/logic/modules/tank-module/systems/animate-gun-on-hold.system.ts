import { Sprite } from 'pixijs';
import { System, Filtered, Includes } from 'mysh-pixi';
import { PlayerTankComponent } from '../components';
import { clamp } from '@shared/utils';

@Includes(Sprite, PlayerTankComponent)
export class AnimateGunkOnHold extends System {
  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const gun = entity.get(Sprite).children[0];

      gun.y += 0.1;
      gun.y = clamp(gun.y, 0, 10);
    });
  }
}
