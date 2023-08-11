import { ButtonComponent, DisabledButtonComponent } from '../components';
import { Sprite } from '@pixi/sprite';
import {
  Filtered,
  System,
  Includes,
  Excludes,
  OnChanges,
  WatchFor,
} from 'mysh-pixi';

@OnChanges(WatchFor.Added, DisabledButtonComponent)
@OnChanges(WatchFor.Removed, DisabledButtonComponent)
@Includes(ButtonComponent, Sprite)
@Excludes(DisabledButtonComponent)
export class EnableButtonSystem extends System {
  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const sprite = entity.get(Sprite);
      const button = entity.get(ButtonComponent);

      sprite.texture = button.idle;
      sprite.interactive = true;
    });
  }
}
