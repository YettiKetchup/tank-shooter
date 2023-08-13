import { Sprite } from '@pixi/sprite';
import { FlyForwardAnimation } from '../../animations';

import {
  Entity,
  Filtered,
  Includes,
  OnChanges,
  System,
  WatchFor,
  sleep,
} from 'mysh-pixi';

import {
  FlyForwardProjectileComponent,
  ProjectileComponent,
  ProjectileFallComponent,
} from '../../components';

@OnChanges(WatchFor.Added, FlyForwardProjectileComponent)
@Includes(Sprite, ProjectileComponent)
export class ProjectileFlyFowrardSystem extends System {
  protected async onExecute(
    entities: Filtered,
    projectile: Entity
  ): Promise<void> {
    const entity$ = projectile.observable();
    const sprite = projectile.get(Sprite);
    const { flyTime, destinationPoint } = projectile.get(ProjectileComponent);

    FlyForwardAnimation(sprite, destinationPoint, flyTime);
    await sleep(flyTime * 1000);
    entity$.add(new ProjectileFallComponent());
  }
}
