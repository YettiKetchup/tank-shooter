import * as particles from '@pixi/particle-emitter';
import { Texture } from '@pixi/core';
import { AssetsLoader } from 'mysh-pixi';
import { AssetKey } from '@shared/data';

export const mediumExplosionConfig = (): particles.EmitterConfigV3 => {
  const texture: Texture = AssetsLoader.Textures.get(AssetKey.ExplosionCloud);

  return {
    lifetime: {
      min: 0.5,
      max: 0.5,
    },
    particlesPerWave: 20,
    frequency: 0.1,
    emitterLifetime: 0.31,
    maxParticles: 1000,
    addAtBack: false,
    pos: {
      x: 0,
      y: 0,
    },
    behaviors: [
      {
        type: 'alpha',
        config: {
          alpha: {
            list: [
              {
                time: 0,
                value: 0.8,
              },
              {
                time: 1,
                value: 0.1,
              },
            ],
          },
        },
      },
      {
        type: 'moveSpeedStatic',
        config: {
          min: 350,
          max: 350,
        },
      },
      {
        type: 'scale',
        config: {
          scale: {
            list: [
              {
                time: 0,
                value: 0.5,
              },
              {
                time: 1,
                value: 0.3,
              },
            ],
          },
          minMult: 1,
        },
      },
      {
        type: 'color',
        config: {
          color: {
            list: [
              {
                time: 0,
                value: 'ffffff',
              },
              {
                time: 1,
                value: 'f5b830',
              },
            ],
          },
        },
      },
      {
        type: 'textureSingle',
        config: {
          texture: texture,
        },
      },
      {
        type: 'spawnBurst',
        config: {
          start: 0,
          spacing: 0,
          distance: 0,
        },
      },
    ],
  };
};
