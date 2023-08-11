import { Sprite } from '@pixi/sprite';
import { clamp } from '@shared/utils';
import { ProjectileComponent, ProjectileFallComponent } from '../components';
import { ProjectileFlyAnimation } from '../animations';
import { ButtonHoldedComponent } from '@features/interactive';
import { ShootButtonComponent } from '@views/ui';
import {
  Filtered,
  Includes,
  System,
  OnChanges,
  WatchFor,
  includesPipe,
} from 'mysh-pixi';

@OnChanges(
  WatchFor.Removed,
  ButtonHoldedComponent,
  includesPipe(ShootButtonComponent)
)
@Includes(Sprite, ProjectileComponent)
export class AnimateProjectileSystem extends System {
  protected onExecute(entities: Filtered): void {
    entities.parallel(async (entity) => {
      const sprite = entity.get(Sprite);
      const projectile = entity.get(ProjectileComponent);

      const time = 0.8;
      const flyTo = projectile.distanceDelta * projectile.flyDistance;
      let scaleTo = 2 / projectile.distanceDelta;
      scaleTo = clamp(scaleTo, 1, 3.5);

      sprite.alpha = 1;

      await ProjectileFlyAnimation(sprite, scaleTo, flyTo, time);
      const entity$ = entity.observable();
      entity$.add(new ProjectileFallComponent());
    });
  }
}
