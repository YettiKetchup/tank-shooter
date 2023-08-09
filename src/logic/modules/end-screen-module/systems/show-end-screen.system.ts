import { Entity, Filtered, System, Includes } from 'mysh-pixi';
import { EndScreenComponent } from '../components';
import { Container } from '@pixi/display';

@Includes(Container, EndScreenComponent)
export class ShowEndScreenSystem extends System {
  protected onExecute(entities: Filtered<Entity>): void {
    entities.loop((entity) => {
      const container = entity.get(Container);
      container.visible = true;
    });
  }
}
