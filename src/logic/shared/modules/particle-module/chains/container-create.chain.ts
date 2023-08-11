import { ChainBuilder } from 'mysh-pixi';
import { CreateParticleSystem } from '../systems/create-particle.system';

export const ContainerCreateChain = () => {
  return new ChainBuilder().withSystem(CreateParticleSystem).build();
};
