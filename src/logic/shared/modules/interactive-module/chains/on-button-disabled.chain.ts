import { ChainBuilder } from 'mysh-pixi';
import {
  AlphaDisabledChildren,
  DisableButtonSystem,
  EnableButtonSystem,
} from '../systems';

export const OnButtonDisabledChain = () => {
  return new ChainBuilder()
    .withSystem(DisableButtonSystem)
    .withSystem(EnableButtonSystem)
    .withSystem(AlphaDisabledChildren)
    .build();
};
