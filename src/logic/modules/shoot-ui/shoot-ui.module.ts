import { Module, RegisterSystems } from 'mysh-pixi';

import {
  DecreaseAmmoSystem,
  BlockAmmoButtons,
  EnableAmmoButtons,
  ClearPowerBarSystem,
} from './systems';

import {
  FillPowerBar,
  HidePowerBarSystem,
  PowerBarColor,
  ShowPowerBarSystem,
} from '@systems/power-bar';

@RegisterSystems([
  { provide: DecreaseAmmoSystem },
  { provide: BlockAmmoButtons },
  { provide: ShowPowerBarSystem },
  { provide: HidePowerBarSystem },
  { provide: FillPowerBar },
  { provide: PowerBarColor },
  { provide: EnableAmmoButtons },
  { provide: ClearPowerBarSystem },
])
export class ShootUIModule extends Module {}
