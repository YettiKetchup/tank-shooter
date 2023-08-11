import { EndScreenComponent } from '../components';
import { Container } from '@pixi/display';
import { TankComponent } from '@views/tank';
import {
  Entity,
  Filtered,
  System,
  Includes,
  OnChanges,
  WatchFor,
} from 'mysh-pixi';

@OnChanges(WatchFor.Changed, TankComponent)
@Includes(Container, EndScreenComponent)
export class ShowEndScreenSystem extends System<Entity> {
  protected onExecute(entities: Filtered, data: Entity): void {
    entities.loop((entity) => {
      const { health } = data.get(TankComponent);

      if (health <= 0) {
        const enity$ = entity.observable();
        enity$.visible = true;
      }
    });
  }
}
