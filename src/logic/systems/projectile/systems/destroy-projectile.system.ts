import {
  ProjectileComponent,
  ProjectileFallComponent,
} from '@systems/projectile';

import {
  Filtered,
  System,
  Includes,
  OnChanges,
  WatchFor,
  Entity,
} from 'mysh-pixi';

@OnChanges(WatchFor.Added, ProjectileFallComponent)
@Includes(ProjectileComponent)
export class DestroyProjectileSystem extends System {
  protected onExecute(entities: Filtered, data: Entity): void {
    data.destroy();
  }
}
