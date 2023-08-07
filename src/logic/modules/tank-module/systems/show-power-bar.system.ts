import { Sprite } from 'pixijs';
import {
  PixiEntity,
  System,
  SystemEntitiesCollection,
  Includes,
} from 'mysh-pixi';
import { ShootIndicatorComponent } from '../components';

@Includes(Sprite, ShootIndicatorComponent)
export class ShowPowerBarSystem extends System<PixiEntity> {
  constructor(private _show: boolean) {
    super();
  }

  protected onExecute(entities: SystemEntitiesCollection<PixiEntity>): void {
    entities.loop((entity) => {
      const sprite = entity.get(Sprite);
      sprite.alpha = this._show ? 1 : 0;
    });
  }
}
