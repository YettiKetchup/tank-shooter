import { ShootIndicatorComponent } from '@systems/power-bar/components';
import { ProjectileComponent } from '@systems/projectile';
import {
  Filtered,
  System,
  Includes,
  OnChanges,
  WatchFor,
  Entity,
} from 'mysh-pixi';

@OnChanges(WatchFor.Changed, ShootIndicatorComponent)
@Includes(ProjectileComponent)
export class SetProjectileDeltaSystem extends System {
  protected onExecute(entities: Filtered, data: Entity): void {
    entities.loop((entity) => {
      const { value } = data.get(ShootIndicatorComponent);
      const projectile = entity.get(ProjectileComponent);
      projectile.distanceDelta = value;
    });
  }
}
