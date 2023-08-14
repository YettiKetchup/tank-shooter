import { Module, RegisterSystems } from 'mysh-pixi';
import { EndGameEntity } from './entity';
import {
  WinGameSystem,
  RestartGameSystem,
  ShowLooseScreenSystem,
  ShowWinScreenSystem,
  LooseGameSystem,
} from './systems';

@RegisterSystems([
  { provide: WinGameSystem },
  { provide: LooseGameSystem },
  { provide: ShowWinScreenSystem, withDisabled: true },
  { provide: ShowLooseScreenSystem, withDisabled: true },
  { provide: RestartGameSystem },
])
export class EndGameModule extends Module {
  postInit(): void {
    super.postInit();
    EndGameEntity(this.collection);
  }
}
