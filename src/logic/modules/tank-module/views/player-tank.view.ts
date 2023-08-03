import { ViewBuilder, EntitiesCollection } from 'mysh-pixi';
import { TankView } from './tank.view';
import { PlayerTankComponent } from '../components/player-tank.component';

export const PlayerTankView = (collection: EntitiesCollection) => {
  //prettier-ignore
  return new ViewBuilder(TankView('red'))
    .withPosition(0, 320)
    .asEntity(collection)
      .withComponent(new PlayerTankComponent())
  .build();
};
