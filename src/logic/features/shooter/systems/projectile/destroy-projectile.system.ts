import { Sprite } from '@pixi/sprite';
import { ProjectileComponent, ProjectileFallComponent } from '../../components';

import {
  Filtered,
  System,
  Includes,
  OnChanges,
  WatchFor,
  Entity,
  sleep,
} from 'mysh-pixi';

@OnChanges(WatchFor.Added, ProjectileFallComponent)
@Includes(ProjectileComponent)
export class DestroyProjectileSystem extends System {
  protected async onExecute(entities: Filtered, data: Entity): Promise<void> {
    const sprite = data.get(Sprite);
    sprite.alpha = 0;
    await sleep(1000);
    data.destroy();
  }
}
