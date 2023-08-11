import { ButtonPointerDown } from '@features/interactive';
import { TankComponent } from '@views/tank';
import { ShootButtonComponent } from '@views/ui';
import { ProjectileView } from '../views';
import {
  Entity,
  Filtered,
  Includes,
  System,
  OnChanges,
  WatchFor,
  includesPipe,
} from 'mysh-pixi';

@OnChanges(
  WatchFor.Added,
  ButtonPointerDown,
  includesPipe(ShootButtonComponent)
)
@Includes(TankComponent)
export class InstantiateProjectileSystem extends System<Entity> {
  protected onExecute(entities: Filtered, data: Entity): void {
    entities.loop((entity) => {
      const { type } = data.get(ShootButtonComponent);
      const { shootPoint } = entity.get(TankComponent);

      const projectile = ProjectileView(type);
      projectile.alpha = 0;
      shootPoint.addChild(projectile);
    });
  }
}
