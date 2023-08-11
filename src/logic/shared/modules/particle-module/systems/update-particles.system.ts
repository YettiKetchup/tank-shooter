import { Entity, Filtered, System, Includes } from 'mysh-pixi';
import { ParticleEmitterComponent } from '../components';
import { Container } from '@pixi/display';

@Includes(Container, ParticleEmitterComponent)
export class UpdateParticlesSsytem extends System {
  protected onExecute(entities: Filtered<Entity>): void {
    entities.loop((entity) => {
      const container = entity.get(Container);
      const { emitter } = entity.get(ParticleEmitterComponent);
      emitter.update(0.016);

      if (!container.children.length) {
        this.collection.destroy(entity);
      }
    });
  }
}
