import { ChainBuilder } from 'mysh-pixi';
import {
  RestartGameSystem,
  ShowEndScreenSystem,
  StartTimerSystem,
} from '../systems';

export const EnemyDefatedChain = () => {
  //prettier-ignore
  return new ChainBuilder()
    .withSystem(ShowEndScreenSystem)
      .withDisabled(true)
    .withSystem(StartTimerSystem)
    .withSystem(RestartGameSystem)
    .build();
};
