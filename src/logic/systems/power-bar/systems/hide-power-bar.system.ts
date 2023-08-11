import { Sprite } from '@pixi/sprite';
import { ShootIndicatorComponent } from '../components';
import { ButtonHoldedComponent } from '@features/interactive';
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
  WatchFor.Removed,
  ButtonHoldedComponent,
  includesPipe(ShootButtonComponent)
)
@Includes(Sprite, ShootIndicatorComponent)
export class HidePowerBarSystem extends System {
  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const sprite = entity.get(Sprite);
      sprite.alpha = 0;
    });
  }
}
