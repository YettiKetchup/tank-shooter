import * as particles from '@pixi/particle-emitter';
import { EntitiesCollection, ViewBuilder } from 'mysh-pixi';
import { Container } from '@pixi/display';
import { ParticleContainerComponent } from '../components';

export const ParticleContainerView = (
  collection: EntitiesCollection,
  config: particles.EmitterConfigV3
) => {
  //prettier-ignore
  return new ViewBuilder(Container)
    .asEntity(collection)
      .withComponent(new ParticleContainerComponent(config), true)
  .build();
};
