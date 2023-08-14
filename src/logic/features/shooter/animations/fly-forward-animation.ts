import { gsap } from 'gsap';
import { Sprite } from '@pixi/sprite';
import { Point } from '@pixi/core';

export const FlyForwardAnimation = (
  sprite: Sprite,
  direction: Point,
  time: number
) => {
  gsap.to(sprite, {
    x: direction.x,
    y: -direction.y,
    duration: time,
    ease: 'none',
  });
};
