import { IntersectedComponent } from '@features/intersection';
import { TankComponent } from '@views/tank';

import {
  ProjectileComponent,
  ProjectileFallComponent,
} from '@systems/projectile';

import {
  Entity,
  Filtered,
  Includes,
  OnChanges,
  System,
  WatchFor,
} from 'mysh-pixi';

@OnChanges(WatchFor.Added, ProjectileFallComponent)
@Includes(IntersectedComponent, TankComponent)
export class DamageTankSystem extends System<Entity> {
  protected onExecute(entities: Filtered, data: Entity): void {
    entities.loop((entity) => {
      const { damage } = data.get(ProjectileComponent);
      let { health } = entity.get(TankComponent);

      health -= damage;
      if (health <= 0) health = 0;

      const tank$ = entity.get(TankComponent, true);
      tank$.health = health;
    });
  }
}
