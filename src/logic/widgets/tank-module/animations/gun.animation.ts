import { gsap } from 'gsap';
import { Sprite } from '@pixi/sprite';

export const GunAnimation = (gun: Sprite) => {
  const timeline = gsap.timeline();

  timeline.to(gun, {
    y: 0,
    duration: 0.3,
    ease: 'quart.out',
  });

  timeline.to(
    gun,
    {
      y: 2,
      duration: 0.1,
      ease: 'quart.out',
    },
    '>'
  );

  timeline.to(
    gun,
    {
      y: 0,
      duration: 0.1,
      ease: 'quart.out',
    },
    '>'
  );
};
