import { Module, RegisterSystems } from 'mysh-pixi';
import { RestartGameSystem, ShowEndScreenSystem } from './systems';

@RegisterSystems([
  { provide: ShowEndScreenSystem, withDisabled: true },
  { provide: RestartGameSystem },
])
export class EndGameModule extends Module {}
