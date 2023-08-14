import { Sprite } from '@pixi/sprite';
import { FlyParabolicAnimation } from '../../animations';
import { clamp } from '@shared/utils';

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
  FlyParabolicProjectileComponent,
  ProjectileComponent,
} from '../../components';

@OnChanges(WatchFor.Added, FlyParabolicProjectileComponent)
@Includes(Sprite, ProjectileComponent)
export class ProjectileFlyParabolicSystem extends System {
  protected async onExecute(
    entities: Filtered,
    projectile: Entity
  ): Promise<void> {
    const sprite = projectile.get(Sprite);
    const { flyTime, delta } = projectile.get(ProjectileComponent);

    let scale = 2 / delta.y;
    scale = clamp(scale, 1, 3.5);

    FlyParabolicAnimation(sprite, 2, flyTime);
    await sleep(flyTime * 1000);
  }
}
