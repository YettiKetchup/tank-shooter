import { EntitiesCollection, ChainBuilder } from 'mysh-pixi';
import { HoldPointerSystem } from '../systems/hold-pointer.system';
import { SetCursorTypeSystem } from '../systems/set-cursor-type.system';

export const SetInteractivityChain = (collection: EntitiesCollection) => {
  //prettier-ignore
  return new ChainBuilder(collection)
    .withSystem(new HoldPointerSystem())
    .withSystem(new SetCursorTypeSystem())
  .build();
};
