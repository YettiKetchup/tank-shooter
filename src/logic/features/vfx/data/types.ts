import { Container } from '@pixi/display';
import { Point } from '@pixi/core';

export type CreateParticleData = {
  parent: Container;
  position: Point;
  collection: string;
  view: string;
};
