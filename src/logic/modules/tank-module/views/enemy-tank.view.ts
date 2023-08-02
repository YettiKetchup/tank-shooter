import { ViewBuilder, EntityStorage } from 'mysh-pixi';
import { TankView } from './tank.view';
import {
  CanHoldComponent,
  CursorTypeComponent,
} from '@shared/interactive-module';

export const EnemyTankView = () => {
  //prettier-ignore
  return new ViewBuilder(TankView('blue'))
    .inPosition(0, -300)
    .asEntity(EntityStorage.get('game'))
      .withComponent(new CanHoldComponent())
      .withComponent(new CursorTypeComponent())
  .build();
};
