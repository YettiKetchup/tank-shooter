import { Filtered, Includes, OnChanges, System, WatchFor } from 'mysh-pixi';
import { Point } from '@pixi/core';
import { ProjectileMapper } from '@entities/projectile';
import {
  NeedShootComponent,
  ProjectileSpawnPoint,
  ShootPowerComponent,
} from '@features/shooter';

@OnChanges(WatchFor.Added, NeedShootComponent)
@Includes(ProjectileSpawnPoint, ShootPowerComponent, NeedShootComponent)
export class ShootSystem extends System {
  protected onExecute(filtered: Filtered, shooter: NeedShootComponent): void {
    filtered.loop((entity) => {
      const { container } = entity.get(ProjectileSpawnPoint);
      const { delta } = entity.get(ShootPowerComponent);
      const { type } = entity.get(NeedShootComponent);
      const { parent } = entity.get(NeedShootComponent);

      const view = ProjectileMapper(type, new Point(0, delta));
      const global = container.getGlobalPosition();
      const point = parent.toLocal(global);

      view.position = point;

      parent.addChild(view);
    });
  }
}
