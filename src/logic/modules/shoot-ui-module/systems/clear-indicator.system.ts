import { Sprite } from '@pixi/sprite';
import { System, Filtered, Includes } from 'mysh-pixi';
import { ShootIndicatorComponent } from '../components';

@Includes(Sprite, ShootIndicatorComponent)
export class ClearIndicatorSystem extends System {
  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const indicator$ = entity.get(ShootIndicatorComponent, true);
      const view = entity.get(Sprite).children[0];
      indicator$.value = 0;
      view.scale.x = indicator$.value;
    });
  }
}
