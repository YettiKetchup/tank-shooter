import { Sprite } from '@pixi/sprite';
import { TankComponent } from '@views/tank';
import { HealthbarComponent } from '@views/ui';
import {
  Entity,
  Filtered,
  Includes,
  System,
  OnChanges,
  WatchFor,
} from 'mysh-pixi';

@OnChanges(WatchFor.Changed, TankComponent)
@Includes(Sprite, HealthbarComponent)
export class ChangeHealthBarValueSystem extends System<Entity> {
  protected onExecute(entities: Filtered, data: Entity): void {
    entities.loop((entity) => {
      const { health } = data.get(TankComponent);
      const sprite = entity.get(Sprite);
      const valueBar = sprite.children[0];
      valueBar.scale.x = health / 100;
    });
  }
}
