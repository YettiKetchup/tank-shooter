import { ChainBuilder, EntitiesCollection } from 'mysh-pixi';

import {
  ButtonClickShiftSystem,
  SetButtonSystem,
  DisableButtonSystem,
} from '../systems';

export const SetUIChain = (collection: EntitiesCollection) => {
  //prettier-ignore
  return new ChainBuilder(collection)
    .withSystem(SetButtonSystem)
    .withSystem(ButtonClickShiftSystem)
    .withSystem(DisableButtonSystem)
  .build();
};
