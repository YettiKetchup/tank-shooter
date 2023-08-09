import { Sprite } from '@pixi/sprite';
import { Entity, Filtered, System, Includes, Excludes } from 'mysh-pixi';
import { DecalComponent, MarkedAsDestroy } from '../components';
import { fadeInDecalAnimation } from '../animations';

@Includes(Sprite, DecalComponent)
@Excludes(MarkedAsDestroy)
export class DestroyDecalSystem extends System {
  protected onExecute(entities: Filtered<Entity>): void {
    entities.loop((entity) => {
      const { lifeTime } = entity.get(DecalComponent);
      const sprite = entity.get(Sprite);

      entity.add(new MarkedAsDestroy());

      setTimeout(() => {
        if (sprite && !sprite.destroyed) {
          fadeInDecalAnimation(sprite, () => {
            this.collection.destroy(entity);
          });
        }
      }, lifeTime);
    });
  }
}
