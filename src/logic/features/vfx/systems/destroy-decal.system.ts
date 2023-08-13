import { Entity, Filtered, OnChanges, System, WatchFor } from 'mysh-pixi';
import { DecalComponent } from '../components';
import { fadeInDecalAnimation } from '../animations';
import { Sprite } from '@pixi/sprite';

@OnChanges(WatchFor.Added, DecalComponent)
export class DestroyDecalSystem extends System {
  protected onExecute(filtered: Filtered, decal: Entity): void {
    const { lifeTime } = decal.get(DecalComponent);

    setTimeout(() => {
      const sprite = decal.get(Sprite);
      fadeInDecalAnimation(sprite, () => {
        decal.destroy();
      });
    }, lifeTime);
  }
}
