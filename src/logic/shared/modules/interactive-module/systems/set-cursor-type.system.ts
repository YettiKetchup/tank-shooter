import { Container } from '@pixi/display';
import { System, Filtered, Includes } from 'mysh-pixi';
import { CursorTypeComponent } from '../components';
import { Sprite } from '@pixi/sprite';

@Includes(CursorTypeComponent, Sprite)
export class SetCursorTypeSystem extends System {
  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const container = entity.get(Sprite);
      const { type } = entity.get(CursorTypeComponent);
      container.cursor = type;
    });
  }
}
