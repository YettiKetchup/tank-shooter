import { EntitiesCollection, ChainBuilder } from 'mysh-pixi';
import { HoldPointerSystem, SetCursorTypeSystem } from '../systems';

export const SetInteractivityChain = (collection: EntitiesCollection) => {
  //prettier-ignore
  return new ChainBuilder(collection)
    .withSystem(new HoldPointerSystem())
    .withSystem(new SetCursorTypeSystem())
  .build();
};
