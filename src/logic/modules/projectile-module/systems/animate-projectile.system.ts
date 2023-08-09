import { gsap } from 'gsap';
import { Sprite } from '@pixi/sprite';
import { ProjectileComponent, ProjectileFallComponent } from '../components';
import { Entity, Filtered, System, Includes } from 'mysh-pixi';
import { clamp } from '@shared/utils';

@Includes(Sprite, ProjectileComponent)
export class AnimateProjectileSystem extends System {
  protected onExecute(entities: Filtered<Entity>): void {
    entities.loop((entity) => {
      const sprite = entity.get(Sprite);
      const projectile = entity.get(ProjectileComponent);

      const time = 0.8;
      const flyTo = projectile.distanceDelta * projectile.flyDistance;
      let scaleTo = 2 / projectile.distanceDelta;
      scaleTo = clamp(scaleTo, 1, 3.5);

      sprite.alpha = 1;

      this.animateScale(sprite, scaleTo, time);

      this.animateDirection(sprite, flyTo, time, () => {
        const entity$ = entity.observable();
        entity$.add(new ProjectileFallComponent());
      });
    });
  }

  private animateScale(sprite: Sprite, scale: number, time: number): void {
    const timeline = gsap.timeline();

    timeline.to(sprite.scale, {
      x: scale,
      y: scale,
      duration: time / 2,
      ease: 'none',
    });

    timeline.to(
      sprite.scale,
      {
        x: 1,
        y: 1,
        duration: time / 2,
        ease: 'none',
      },
      '>'
    );
  }

  private animateDirection(
    sprite: Sprite,
    direction: number,
    time: number,
    onComplete: () => void
  ): void {
    gsap.to(sprite, {
      y: -direction,
      duration: time,
      ease: 'none',
      onComplete: onComplete,
    });
  }
}
