import { ChainBuilder } from 'mysh-pixi';
import { DetectIntersectionSystem } from '../systems';

export const DetectIntersectionsChain = () => {
  //prettier-ignore
  return new ChainBuilder()
    .withSystem(DetectIntersectionSystem)
  .build();
};
