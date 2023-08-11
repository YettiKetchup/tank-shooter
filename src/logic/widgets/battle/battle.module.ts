import { Module, RegisterSystems } from 'mysh-pixi';
import { PlayerTankComponent } from '@views/tank';
import { AnimateShootGunSystem } from '@systems/tank';
import { DetectIntersectionSystem } from '@features/intersection/systems';

import { ChangeHealthBarValueSystem } from './systems';

@RegisterSystems([
  { provide: AnimateShootGunSystem, includes: [PlayerTankComponent] },
  { provide: ChangeHealthBarValueSystem },
  { provide: DetectIntersectionSystem },
])
export class BattleModule extends Module {}
