import * as particles from '@pixi/particle-emitter';
import { Container } from '@pixi/display';

import {
  ParticleContainerComponent,
  ParticleEmitterComponent,
} from '../components';

import {
  Filtered,
  System,
  Includes,
  Excludes,
  OnChanges,
  WatchFor,
} from 'mysh-pixi';

@OnChanges(WatchFor.Added, ParticleContainerComponent)
@Includes(Container, ParticleContainerComponent)
@Excludes(ParticleEmitterComponent)
export class CreateParticleSystem extends System {
  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const { config } = entity.get(ParticleContainerComponent);
      const container = entity.get(Container);
      const emitter = new particles.Emitter(container, config);

      entity.add(new ParticleEmitterComponent(emitter));
    });
  }
}
