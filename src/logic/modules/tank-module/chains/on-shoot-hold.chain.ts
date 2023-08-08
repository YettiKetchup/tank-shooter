import { ChainBuilder, EntitiesCollection } from 'mysh-pixi';
import {
  FillIndicatorSystem,
  ChangeIndicatorColor,
  AnimateGunkOnHold,
} from '../systems';

export const OnShootHoldChain = (collection: EntitiesCollection) => {
  //prettier-ignore
  return new ChainBuilder(collection)
    .withSystem(FillIndicatorSystem)
    .withSystem(ChangeIndicatorColor)
    .withSystem(AnimateGunkOnHold)
  .build();
};
