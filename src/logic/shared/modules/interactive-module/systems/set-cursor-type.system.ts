import { Container } from 'pixijs';
import { System, Filtered, Includes } from 'mysh-pixi';
import { CursorTypeComponent } from '../components';

@Includes(CursorTypeComponent, Container)
export class SetCursorTypeSystem extends System {
  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const container = entity.get(Container);
      const { type } = entity.get(CursorTypeComponent);
      container.cursor = type;
    });
  }
}
