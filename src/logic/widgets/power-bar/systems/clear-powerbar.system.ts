import { Sprite } from '@pixi/sprite';
import { NeedShootComponent } from '@features/shooter';
import { PowerbarComponent } from '../components';
import { ViewName } from '@shared/data';
import { Filtered, Includes, OnChanges, System, WatchFor } from 'mysh-pixi';

@OnChanges(WatchFor.Removed, NeedShootComponent)
@Includes(Sprite, PowerbarComponent)
export class ClearPowerbarSystem extends System {
  protected onExecute(filtered: Filtered): void {
    filtered.loop((entity) => {
      const powerbar = entity.get(PowerbarComponent, true);
      const sprite = entity.get(Sprite);
      const progress = sprite.getChildByName(ViewName.PowerbarValue);

      if (progress) {
        powerbar.value = progress.scale.x = 0;
      }
    });
  }
}
