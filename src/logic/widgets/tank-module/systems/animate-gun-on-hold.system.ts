import { Sprite } from 'pixijs';
import { System, Filtered, Includes } from 'mysh-pixi';
import { PlayerTankComponent } from '../components';

@Includes(Sprite, PlayerTankComponent)
export class AnimateGunkOnHold extends System {
  public readonly indicatorValue: number = 0;

  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const gun = entity.get(Sprite).children[0];
      gun.y = this.indicatorValue * 10;
    });
  }
}
