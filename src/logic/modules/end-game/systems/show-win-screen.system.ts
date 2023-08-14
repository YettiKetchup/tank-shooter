import { Container } from '@pixi/display';
import { Filtered, System, Includes, OnChanges, WatchFor } from 'mysh-pixi';
import {
  EndScreenComponent,
  WinGameComponent,
  WinScreenComponent,
} from '../components';

@OnChanges(WatchFor.Added, WinGameComponent)
@Includes(Container, EndScreenComponent, WinScreenComponent)
export class ShowWinScreenSystem extends System {
  protected onExecute(filtered: Filtered): void {
    filtered.loop((entity) => {
      const enity$ = entity.observable();
      enity$.visible = true;
    });
  }
}
