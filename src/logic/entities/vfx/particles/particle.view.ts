import * as particles from '@pixi/particle-emitter';
import { Container } from '@pixi/display';
import { StorageKey } from '@shared/data';
import { EntityStorage, ViewBuilder } from 'mysh-pixi';
import { ParticleEmitterComponent } from '@features/vfx';

export const ParticleView = (particle: particles.EmitterConfigV3) => {
  const collection = EntityStorage.get(StorageKey.VFX);
  const containerRef = new Container();
  const emitter = new particles.Emitter(containerRef, particle);

  return new ViewBuilder(containerRef)
    .asEntity(collection)
    .withComponent(new ParticleEmitterComponent(emitter))
    .build();
};
