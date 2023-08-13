import { Container } from '@pixi/display';
import { CursorTypeComponent } from '../components';
import { Filtered, System, Includes, OnHook, Lifecycle } from 'mysh-pixi';

@OnHook(Lifecycle.Init)
@Includes(Container, CursorTypeComponent)
export class SetCursorSystem extends System {
  protected onExecute(filtered: Filtered): void {
    filtered.loop((entity) => {
      const container = entity.get(Container);
      const { type } = entity.get(CursorTypeComponent);
      container.cursor = type;
    });
  }
}
