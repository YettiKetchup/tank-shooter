import { Sprite } from '@pixi/sprite';
import gsap from 'gsap';

export const fadeInDecalAnimation = (decal: Sprite, onComplete: () => void) => {
  gsap.to(decal, {
    alpha: 0,
    duration: 1,
    onComplete: onComplete,
  });
};
