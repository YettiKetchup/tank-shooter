import { Sprite } from '@pixi/sprite';
import { CrossairComponent } from '../components';
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
@Includes(Sprite, CrossairComponent)
export class ShowCrossairSystem extends System {
  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const sprite = entity.get(Sprite);
      sprite.alpha = 1;
    });
  }
}
