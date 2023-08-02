import {
  PixiEntity,
  System,
  SystemEntitiesCollection,
  Includes,
} from 'mysh-pixi';

import { Container } from 'pixijs';
import { PixiOrientation } from '../data/types';

import { PivotLandscapeComponent, PivotPortraitComponent } from '../components';

@Includes(PivotLandscapeComponent, PivotPortraitComponent, Container)
export class PivotSystem extends System<PixiEntity> {
  constructor(private _orientation: PixiOrientation) {
    super();
  }

  protected onExecute(entities: SystemEntitiesCollection<PixiEntity>): void {
    entities.loop((entity) => {
      const container = entity.get(Container);
      let pivot =
        this._orientation === 'landscape'
          ? entity.get(PivotLandscapeComponent)
          : entity.get(PivotPortraitComponent);

      let { x, y, isRelative } = pivot;

      if (isRelative) {
        const { width, height } = container.getBounds();
        x = pivot.x * (width / 2);
        y = pivot.y * (height / 2);
      }

      container.pivot.set(x, y);
    });
  }
}
