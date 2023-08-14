import { gsap } from 'gsap';
import { Sprite } from '@pixi/sprite';

export const FlyParabolicAnimation = (
  sprite: Sprite,
  scale: number,
  time: number
) => {
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
};
