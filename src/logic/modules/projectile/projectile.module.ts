import { Module, RegisterSystems } from 'mysh-pixi';
import { SetProjectileDeltaSystem } from './systems';
import { PlayerTankComponent } from '@views/tank';
import {
  AnimateProjectileSystem,
  DestroyProjectileSystem,
  InstantiateProjectileSystem,
  ProjectileExplodeSystem,
} from '@systems/projectile';

@RegisterSystems([
  { provide: InstantiateProjectileSystem, includes: [PlayerTankComponent] },
  { provide: AnimateProjectileSystem },
  { provide: ProjectileExplodeSystem },
  { provide: SetProjectileDeltaSystem },
  { provide: DestroyProjectileSystem },
])
export class ProjectileModule extends Module {}
