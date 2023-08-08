import { ChainBuilder, EntitiesCollection } from 'mysh-pixi';
import { DetectIntersectionSystem } from '../systems';

export const DetectIntersectionsChain = (colelction: EntitiesCollection) => {
  //prettier-ignore
  return new ChainBuilder(colelction)
    .withSystem(DetectIntersectionSystem)
  .build();
};
