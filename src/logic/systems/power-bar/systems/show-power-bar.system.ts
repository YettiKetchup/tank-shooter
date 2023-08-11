import { Sprite } from '@pixi/sprite';
import { ShootIndicatorComponent } from '../components';
import { ButtonPointerDown } from '@features/interactive';
import { ShootButtonComponent } from '@views/ui';
import {
  Filtered,
  System,
  Includes,
  OnChanges,
  WatchFor,
  includesPipe,
} from 'mysh-pixi';

@OnChanges(
  WatchFor.Added,
  ButtonPointerDown,
  includesPipe(ShootButtonComponent)
)
@Includes(Sprite, ShootIndicatorComponent)
export class ShowPowerBarSystem extends System {
  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const sprite = entity.get(Sprite);
      sprite.alpha = 1;
    });
  }
}
