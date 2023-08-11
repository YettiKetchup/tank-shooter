import { Sprite } from '@pixi/sprite';
import { ProjectileComponent, ProjectileFallComponent } from '../components';
import { Entity, Filtered, System, Includes } from 'mysh-pixi';
import { clamp } from '@shared/utils';
import { ProjectileFlyAnimation } from '../animations';

@Includes(Sprite, ProjectileComponent)
export class AnimateProjectileSystem extends System {
  protected async onExecute(entities: Filtered<Entity>): Promise<void> {
    await entities.parallel(async (entity) => {
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
