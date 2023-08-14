import { Module, RegisterSystems } from 'mysh-pixi';
import {
  AnimateGunHoldSystem,
  AnimateShootGunSystem,
  BombDamageSystem,
} from './systems';

@RegisterSystems([
  { provide: AnimateShootGunSystem },
  { provide: AnimateGunHoldSystem },
  { provide: BombDamageSystem },
])
export class TankModule extends Module {}
