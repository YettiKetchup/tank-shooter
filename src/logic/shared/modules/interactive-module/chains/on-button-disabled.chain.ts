import { ChainBuilder, EntitiesCollection } from 'mysh-pixi';

import {
  AlphaDisabledChildren,
  DisableButtonSystem,
  EnableButtonSystem,
} from '../systems';

export const OnButtonDisabledChain = (collection: EntitiesCollection) => {
  //prettier-ignore
  return new ChainBuilder(collection)
    .withSystem(DisableButtonSystem)
    .withSystem(EnableButtonSystem)
    .withSystem(AlphaDisabledChildren)
  .build();
};
