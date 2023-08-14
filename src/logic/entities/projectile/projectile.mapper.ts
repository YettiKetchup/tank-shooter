import { Sprite } from '@pixi/sprite';
import { ProjectileType } from '@shared/api/projectiles';
import { ProjectileView } from './views';
import { Point } from '@pixi/core';

type View = (type: ProjectileType, point: Point) => Sprite;

const projectiles: Map<ProjectileType, View> = new Map();
projectiles.set('small', ProjectileView);
projectiles.set('medium', ProjectileView);
projectiles.set('big', ProjectileView);

export const ProjectileMapper = (type: ProjectileType, point: Point) => {
  const projectile = projectiles.get(type) as View;
  return projectile(type, point);
};
