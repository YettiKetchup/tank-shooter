import { Container } from '@pixi/display';
import { ParticleEmitterComponent } from '../components';
import { Filtered, System, Includes, OnHook, Lifecycle } from 'mysh-pixi';

@OnHook(Lifecycle.Update)
@Includes(Container, ParticleEmitterComponent)
export class UpdateParticlesSystem extends System {
  protected onExecute(filtered: Filtered): void {
    filtered.loop((entity) => {
      const container = entity.get(Container);
      const { emitter } = entity.get(ParticleEmitterComponent);

      emitter.update(0.016);

      if (!container.children.length) {
        entity.destroy();
      }
    });
  }
}
