import * as particles from '@pixi/particle-emitter';
import { Texture } from '@pixi/core';
import { AssetsLoader } from 'mysh-pixi';
import { AssetKey } from '@shared/data';

export const bigExplosionConfig = (): particles.EmitterConfigV3 => {
  const texture: Texture = AssetsLoader.Textures.get(AssetKey.ExplosionCloud);

  return {
    lifetime: {
      min: 0.5,
      max: 1,
    },
    ease: [
      {
        s: 0,
        cp: 0.329,
        e: 0.548,
      },
      {
        s: 0.548,
        cp: 0.767,
        e: 0.876,
      },
      {
        s: 0.876,
        cp: 0.985,
        e: 1,
      },
    ],
    frequency: 0.001,
    emitterLifetime: 0.1,
    maxParticles: 100,
    addAtBack: true,
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
                value: 0.74,
              },
              {
                time: 1,
                value: 0,
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
                value: 700,
              },
              {
                time: 1,
                value: 50,
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
                value: 0.2,
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
        type: 'rotation',
        config: {
          accel: 0,
          minSpeed: 0,
          maxSpeed: 200,
          minStart: 0,
          maxStart: 360,
        },
      },
      {
        type: 'textureSingle',
        config: {
          texture: texture,
        },
      },
      {
        type: 'spawnPoint',
        config: {},
      },
    ],
  };
};
