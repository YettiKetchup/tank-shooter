import { Module, RegisterSystems } from 'mysh-pixi';
import { DestroyCrossairSystem, InstantiateCrossairSystem } from './systems';

@RegisterSystems([
  { provide: InstantiateCrossairSystem },
  { provide: DestroyCrossairSystem },
])
export class CrossairModule extends Module {}
