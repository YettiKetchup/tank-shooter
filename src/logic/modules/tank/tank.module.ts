import { Module, RegisterSystems } from 'mysh-pixi';
import { AnimateHoldGunSystem, DamageTankSystem } from './systems';
import { PlayerTankComponent } from '@views/tank';
import { AnimateShootGunSystem } from '@systems/tank';

@RegisterSystems([
  { provide: AnimateHoldGunSystem, includes: [PlayerTankComponent] },
  { provide: AnimateShootGunSystem, includes: [PlayerTankComponent] },
  { provide: DamageTankSystem },
])
export class TankModule extends Module {}
