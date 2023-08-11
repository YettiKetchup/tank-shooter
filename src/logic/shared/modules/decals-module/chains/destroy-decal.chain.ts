import { ChainBuilder } from 'mysh-pixi';
import { DestroyDecalSystem } from '../systems';

export const DestroyDecalChain = () => {
  return new ChainBuilder().withSystem(DestroyDecalSystem).build();
};
