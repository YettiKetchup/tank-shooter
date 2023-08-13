import { Module, RegisterSystems } from 'mysh-pixi';
import {
  DisableShootButtonsSystem,
  EnableShootButtonsSystem,
  ExplodeTankProjectileSystem,
  IncreasePlayerPower,
  PlayerShootSystem,
  UpdateAmmoCount,
} from './systems';

@RegisterSystems([
  { provide: PlayerShootSystem },
  { provide: IncreasePlayerPower },
  { provide: DisableShootButtonsSystem },
  { provide: EnableShootButtonsSystem },
  { provide: UpdateAmmoCount },
  { provide: ExplodeTankProjectileSystem },
])
export class BattleModule extends Module {}
