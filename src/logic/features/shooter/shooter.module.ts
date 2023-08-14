import { Module, RegisterSystems } from 'mysh-pixi';
import {
  ProjectileFlyFowrardSystem,
  ProjectileFlyParabolicSystem,
  DestroyProjectileSystem,
  ShootSystem,
  ShootEndSystem,
} from './systems';

@RegisterSystems([
  { provide: ProjectileFlyFowrardSystem },
  { provide: ProjectileFlyParabolicSystem },
  { provide: DestroyProjectileSystem },
  { provide: ShootSystem },
  { provide: ShootEndSystem },
])
export class ShooterModule extends Module {}
