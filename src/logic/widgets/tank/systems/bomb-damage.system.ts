import { SetDamageComponent } from '@features/damage';
import { TankComponent } from '../components';
import { IntersectedComponent } from '@features/intersection';

import {
  ProjectileComponent,
  ProjectileFallComponent,
} from '@features/shooter';

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
export class BombDamageSystem extends System {
  protected onExecute(filtered: Filtered, projectile: Entity): void {
    filtered.loop((entity) => {
      const entity$ = entity.observable();
      const { damage } = projectile.get(ProjectileComponent);

      entity$.add(new SetDamageComponent(damage));
    });
  }
}
