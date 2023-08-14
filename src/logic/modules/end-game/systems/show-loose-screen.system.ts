import { Container } from '@pixi/display';
import { Filtered, System, Includes, OnChanges, WatchFor } from 'mysh-pixi';
import {
  EndScreenComponent,
  LooseGameComponent,
  LooseScreenComponent,
} from '../components';

@OnChanges(WatchFor.Added, LooseGameComponent)
@Includes(Container, EndScreenComponent, LooseScreenComponent)
export class ShowLooseScreenSystem extends System {
  protected onExecute(filtered: Filtered): void {
    filtered.loop((entity) => {
      const enity$ = entity.observable();
      enity$.visible = true;
    });
  }
}
