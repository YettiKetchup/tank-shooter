import { Module, RegisterSystems } from 'mysh-pixi';
import {
  ChangeBarColor,
  ClearPowerbarSystem,
  FillPowerbarSystem,
  HidePowerBarSystem,
  ShowPowerBarSystem,
} from './systems';

@RegisterSystems([
  { provide: ShowPowerBarSystem },
  { provide: FillPowerbarSystem },
  { provide: ClearPowerbarSystem },
  { provide: ChangeBarColor },
  { provide: HidePowerBarSystem },
])
export class PowerbarModule extends Module {}
