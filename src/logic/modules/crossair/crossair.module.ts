import { Module, RegisterSystems } from 'mysh-pixi';
import { DestroyCrossairSystem, MoveCrossairSystem } from './systems';
import { PlayerTankComponent } from '@views/tank';
import {
  InstantiateCrossairSystem,
  ShowCrossairSystem,
} from '@systems/crossair';

@RegisterSystems([
  { provide: InstantiateCrossairSystem, includes: [PlayerTankComponent] },
  { provide: DestroyCrossairSystem },
  { provide: MoveCrossairSystem },
  { provide: ShowCrossairSystem },
])
export class CrossairModule extends Module {}
