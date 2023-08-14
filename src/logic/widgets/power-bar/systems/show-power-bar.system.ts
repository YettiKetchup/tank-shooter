import { Sprite } from '@pixi/sprite';
import { PowerbarComponent } from '../components';
import { ButtonPointerDown } from '@features/interactive';
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
  WatchFor.Added,
  ButtonPointerDown,
  includesPipe(ShootButtonComponent)
)
@Includes(Sprite, PowerbarComponent)
export class ShowPowerBarSystem extends System {
  protected onExecute(filtered: Filtered): void {
    filtered.loop((entity) => {
      const sprite = entity.get(Sprite);
      sprite.alpha = 1;
    });
  }
}
