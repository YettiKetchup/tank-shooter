import { EntitiesCollection, ViewBuilder } from 'mysh-pixi';
import { Container } from 'pixijs';
import { EndGameText } from './end-game.text';
import { TimerComponent } from '../components';

export const EndGameSign = (collection: EntitiesCollection) => {
  //prettier-ignore
  return new ViewBuilder(Container)
    .withNode(EndGameText('YOU WIN!'))
    .withNode(EndGameText('The game will restart in', 24))
      .withPositionY(45)
    .withNode(EndGameText('0', 96))
      .asEntity(collection)
        .withComponent(new TimerComponent(5))
      .withPositionY(120)
  .build();
};
