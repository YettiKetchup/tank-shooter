import { Container } from '@pixi/display';
import { HealthbarComponent } from '../components';
import { HealthComponent } from '@features/damage';
import { Sprite } from '@pixi/sprite';
import { ViewName } from '@shared/data';
import {
  Entity,
  Filtered,
  Includes,
  OnChanges,
  System,
  WatchFor,
} from 'mysh-pixi';

@OnChanges(WatchFor.Changed, HealthComponent)
@Includes(HealthbarComponent)
export class UpdateHealthbarSystem extends System {
  protected onExecute(filtered: Filtered, updated: Entity): void {
    const entity = this.getHealthBar(filtered, updated);

    if (entity) {
      const sprite = entity.get(Container);
      const bar = sprite.getChildByName(ViewName.HealthbarValue) as Sprite;
      const { value, maxHealth } = updated.get(HealthComponent);

      let delta = value / maxHealth;
      delta = delta < 0 ? 0 : delta;
      bar.scale.x = delta;
    }
  }

  private getHealthBar(filtered: Filtered, updated: Entity): Entity | null {
    return (
      filtered.list.find(
        (e) => e.get(HealthbarComponent).attached === updated.get(Container)
      ) || null
    );
  }
}
