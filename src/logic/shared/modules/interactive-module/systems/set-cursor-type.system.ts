import { Container } from 'pixijs';
import {
  PixiEntity,
  System,
  SystemEntitiesCollection,
  Includes,
} from 'mysh-pixi';

import { CursorTypeComponent } from '../components';

@Includes(CursorTypeComponent, Container)
export class SetCursorTypeSystem extends System<PixiEntity> {
  protected onExecute(entities: SystemEntitiesCollection<PixiEntity>): void {
    entities.loop((entity) => {
      const container = entity.get(Container);
      const { type } = entity.get(CursorTypeComponent);
      container.cursor = type;
    });
  }
}
