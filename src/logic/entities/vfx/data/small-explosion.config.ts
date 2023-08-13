import * as particles from '@pixi/particle-emitter';
import { Texture } from '@pixi/core';
import { AssetKey } from '@shared/data';
import { AssetsLoader } from 'mysh-pixi';

export const smallExplosionConfig = (): particles.EmitterConfigV3 => {
  const texture: Texture = AssetsLoader.Textures.get(AssetKey.ExplosionCloud);
  return {
    lifetime: {
      min: 0.5,
      max: 0.5,
    },
    frequency: 0.008,
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
        type: 'moveSpeed',
        config: {
          speed: {
            list: [
              {
                time: 0,
                value: 200,
              },
              {
                time: 1,
                value: 100,
              },
            ],
          },
        },
      },
      {
        type: 'scale',
        config: {
          scale: {
            list: [
              {
                time: 0,
                value: 1,
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
        type: 'rotationStatic',
        config: {
          min: 0,
          max: 360,
        },
      },
      {
        type: 'textureSingle',
        config: {
          texture: texture,
        },
      },
      {
        type: 'spawnShape',
        config: {
          type: 'torus',
          data: {
            x: 0,
            y: 0,
            radius: 10,
            innerRadius: 0,
            affectRotation: false,
          },
        },
      },
    ],
  };
};
