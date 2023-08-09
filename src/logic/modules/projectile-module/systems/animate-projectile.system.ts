import { gsap } from 'gsap';
import { Sprite } from '@pixi/sprite';
import { Entity, Filtered, System, Includes } from 'mysh-pixi';
import { ProjectileComponent, ProjectileFallComponent } from '../components';

@Includes(Sprite, ProjectileComponent)
export class AnimateProjectileSystem extends System {
  protected onExecute(entities: Filtered<Entity>): void {
    entities.loop((entity) => {
      const sprite = entity.get(Sprite);
      const projectile = entity.get(ProjectileComponent);

      const flyTo = projectile.distanceDelta * projectile.flyDistance;
      const time = flyTo / projectile.speed;
      const flyTimeline = gsap.timeline();

      sprite.alpha = 1;

      //TODO: Clean up this mess
      flyTimeline.to(sprite, {
        y: -flyTo,
        duration: time,
        ease: 'none',
        onComplete: () => {
          const entity$ = entity.observable();
          entity$.add(new ProjectileFallComponent());
        },
      });

      flyTimeline.to(
        sprite.scale,
        {
          x: 2,
          y: 2,
          duration: time / 2,
          ease: 'none',
        },
        '<'
      );

      flyTimeline.to(
        sprite.scale,
        {
          x: 1,
          y: 1,
          duration: time / 2,
          ease: 'none',
        },
        '>'
      );
    });
  }
}
