import { Texture } from '@pixi/core';
import * as particles from '@pixi/particle-emitter';

export type ProjectileType = 'small' | 'medium' | 'big';

export type ParticleCallback = (texture: Texture) => particles.EmitterConfigV3;

export type ProjectileData = {
  type: ProjectileType;
  count: number;
  damage: number;
  flyDistance: number;
  speed: number;
  chargingSpeed: number;
  particles: ParticleCallback;
};
