import * as particles from '@pixi/particle-emitter';
import { Container } from '@pixi/display';
import { Entity, Filtered, System, Includes, Excludes } from 'mysh-pixi';
import {
  ParticleContainerComponent,
  ParticleEmitterComponent,
} from '../components';

@Includes(Container, ParticleContainerComponent)
@Excludes(ParticleEmitterComponent)
export class CreateParticleSystem extends System {
  protected onExecute(entities: Filtered<Entity>): void {
    entities.loop((entity) => {
      const container = entity.get(Container);
      const { config } = entity.get(ParticleContainerComponent);
      const emitter = new particles.Emitter(container, config);

      entity.add(new ParticleEmitterComponent(emitter));
    });
  }
}
