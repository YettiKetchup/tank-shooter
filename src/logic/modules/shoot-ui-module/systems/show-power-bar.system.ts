import { Sprite } from 'pixijs';
import { System, Filtered, Includes } from 'mysh-pixi';
import { ShootIndicatorComponent } from '../components';

@Includes(Sprite, ShootIndicatorComponent)
export class ShowPowerBarSystem extends System {
  public readonly show: boolean = false;

  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const sprite = entity.get(Sprite);
      sprite.alpha = this.show ? 1 : 0;
    });
  }
}
