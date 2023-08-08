import { gsap } from 'gsap';
import { Entity, Filtered, System, Includes } from 'mysh-pixi';
import { ProjectileComponent, ProjectileFallComponent } from '../components';
import { Sprite } from 'pixijs';
import { getProjectileData } from '@shared/utils';

@Includes(Sprite, ProjectileComponent)
export class AnimateProjectileSystem extends System {
  protected onExecute(entities: Filtered<Entity>): void {
    entities.loop((entity) => {
      const sprite = entity.get(Sprite);
      const { distance, type } = entity.get(ProjectileComponent);
      const { flyDistance, speed } = getProjectileData(type);
      const flyTo = -distance * flyDistance;
      const flyTimeline = gsap.timeline();
      const time = Math.abs(flyTo / speed);

      flyTimeline.to(sprite, {
        y: flyTo,
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
