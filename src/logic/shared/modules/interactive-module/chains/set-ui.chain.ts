import { ChainBuilder } from 'mysh-pixi';
import {
  ButtonClickShiftSystem,
  SetButtonSystem,
  DisableButtonSystem,
} from '../systems';

export const SetUIChain = () => {
  return new ChainBuilder()
    .withSystem(SetButtonSystem)
    .withSystem(ButtonClickShiftSystem)
    .withSystem(DisableButtonSystem)
    .build();
};
