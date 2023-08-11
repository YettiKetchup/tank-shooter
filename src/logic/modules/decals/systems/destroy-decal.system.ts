import { DecalComponent, MarkedAsDestroy } from '@components/decals';
import { Sprite } from '@pixi/sprite';
import { fadeInDecalAnimation } from '../animations';
import {
  Excludes,
  Filtered,
  Includes,
  OnChanges,
  System,
  WatchFor,
} from 'mysh-pixi';

@OnChanges(WatchFor.ReadyToWork, DecalComponent)
@Includes(Sprite, DecalComponent)
@Excludes(MarkedAsDestroy)
export class DestroyDecalSystem extends System {
  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const { lifeTime } = entity.get(DecalComponent);
      const sprite = entity.get(Sprite);

      entity.add(new MarkedAsDestroy());

      setTimeout(() => {
        if (sprite && !sprite.destroyed) {
          fadeInDecalAnimation(sprite, () => {
            entity.destroy();
          });
        }
      }, lifeTime);
    });
  }
}
