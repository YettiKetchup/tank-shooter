import {
  PixiEntity,
  System,
  SystemEntitiesCollection,
  Includes,
} from 'mysh-pixi';

import {
  PositionLandscapeComponent,
  PositionPortraitComponent,
} from '../components';

import { Container } from 'pixijs';
import { PixiOrientation } from '../data/types';

@Includes(PositionLandscapeComponent, PositionPortraitComponent, Container)
export class AbsolutePositionSystem extends System<PixiEntity> {
  constructor(private _orientation: PixiOrientation) {
    super();
  }

  protected onExecute(entities: SystemEntitiesCollection<PixiEntity>): void {
    entities.loop((entity) => {
      const container = entity.get(Container);
      let position =
        this._orientation === 'landscape'
          ? entity.get(PositionLandscapeComponent)
          : entity.get(PositionPortraitComponent);

      container.position.set(position.x, position.y);
    });
  }
}
