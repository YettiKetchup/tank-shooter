import { ChainBuilder } from 'mysh-pixi';
import { UpdateParticlesSsytem } from '../systems/update-particles.system';

export const UpdateParticlesChain = () => {
  return new ChainBuilder().withSystem(UpdateParticlesSsytem).build();
};
