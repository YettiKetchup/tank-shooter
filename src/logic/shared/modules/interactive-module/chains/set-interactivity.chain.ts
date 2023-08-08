import { ChainBuilder } from 'mysh-pixi';
import { HoldPointerSystem, SetCursorTypeSystem } from '../systems';

export const SetInteractivityChain = () => {
  //prettier-ignore
  return new ChainBuilder()
    .withSystem(HoldPointerSystem)
    .withSystem(SetCursorTypeSystem)
  .build();
};
