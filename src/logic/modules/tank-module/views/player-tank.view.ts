import { ViewBuilder } from 'mysh-pixi';
import { EntitiesCollection } from 'mysh';
import { TankView } from './tank.view';

export const PlayerTankView = (collection: EntitiesCollection) => {
  //prettier-ignore
  return new ViewBuilder(TankView('red'))
    .inPosition(0, 300)
    .withAngle(180)
    .asEntity(collection)
  .build();
};
