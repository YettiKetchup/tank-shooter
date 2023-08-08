import { ChainBuilder } from 'mysh-pixi';
import { DetectIntersectionSystem } from '../systems';

export const DetectIntersectionsChain = () => {
  return new ChainBuilder().withSystem(DetectIntersectionSystem).build();
};
