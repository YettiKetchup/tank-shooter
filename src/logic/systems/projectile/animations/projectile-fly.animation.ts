import { gsap } from 'gsap';
import { Sprite } from '@pixi/sprite';

export const ProjectileFlyAnimation = (
  sprite: Sprite,
  scale: number,
  direction: number,
  time: number
): Promise<void> => {
  return new Promise((resolve) => {
    const timeline = gsap.timeline();

    timeline.to(sprite, {
      y: -direction,
      duration: time,
      ease: 'none',
      onComplete: () => resolve(),
    });

    timeline.to(
      sprite.scale,
      {
        x: scale,
        y: scale,
        duration: time / 2,
        ease: 'none',
      },
      '<'
    );

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
  });
};
