import { CrossairView } from '../views';

import {
  FlyForwardProjectileComponent,
  ProjectileComponent,
  TankProjectileComponent,
} from '@features/shooter';
import { Container } from '@pixi/display';

import {
  Entity,
  Filtered,
  Includes,
  OnChanges,
  System,
  WatchFor,
  includesPipe,
  sleep,
} from 'mysh-pixi';

@OnChanges(
  WatchFor.Added,
  FlyForwardProjectileComponent,
  includesPipe(TankProjectileComponent)
)
@Includes(ProjectileComponent)
export class InstantiateCrossairSystem extends System {
  protected async onExecute(
    filtered: Filtered,
    projectile: Entity
  ): Promise<void> {
    await sleep(50);
    const { destinationPoint } = projectile.get(ProjectileComponent);
    const { parent } = projectile.get(Container);

    const crossair = CrossairView();
    crossair.x = destinationPoint.x;
    crossair.y = -destinationPoint.y;

    parent.addChild(crossair);
  }
}
