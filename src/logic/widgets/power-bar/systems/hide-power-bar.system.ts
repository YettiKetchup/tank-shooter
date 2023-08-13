import { Sprite } from '@pixi/sprite';
import { PowerbarComponent } from '../components';
import { ButtonHoldedComponent } from '@features/interactive';
import { ShootButtonComponent } from '@entities/ui/shoot-button';
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
@Includes(Sprite, PowerbarComponent)
export class HidePowerBarSystem extends System {
  protected onExecute(filtered: Filtered): void {
    filtered.loop((entity) => {
      const sprite = entity.get(Sprite);
      sprite.alpha = 0;
    });
  }
}
