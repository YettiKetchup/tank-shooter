import { Sprite } from '@pixi/sprite';
import { PowerbarComponent } from '../components';
import { ViewName } from '@shared/data';
import {
  Entity,
  Filtered,
  Includes,
  OnChanges,
  System,
  WatchFor,
} from 'mysh-pixi';

@OnChanges(WatchFor.Changed, PowerbarComponent)
@Includes(Sprite, PowerbarComponent)
export class ChangeBarColor extends System {
  protected onExecute(filtered: Filtered, entity: Entity): void {
    const powerbar = entity.get(PowerbarComponent, true);
    const sprite = entity.get(Sprite);
    const progress = sprite.getChildByName(ViewName.PowerbarValue) as Sprite;

    if (progress) {
      this.setColor(powerbar, progress);
    }
  }

  private setColor(powerbar: PowerbarComponent, view: Sprite): void {
    if (powerbar.value <= 0.3) {
      view.tint = powerbar.minColor;
    } else if (powerbar.value > 0.3 && powerbar.value <= 0.6) {
      view.tint = powerbar.midColor;
    } else if (powerbar.value > 0.6) {
      view.tint = powerbar.maxColor;
    }
  }
}
