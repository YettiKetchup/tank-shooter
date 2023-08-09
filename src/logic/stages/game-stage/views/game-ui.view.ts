import { ViewBuilder } from 'mysh-pixi';
import { Container } from '@pixi/display';
import { ShootButtonsGroup } from '@modules/shoot-ui-module';
import { EndGameScreenView } from '@modules/end-screen-module';

export const GameUIView = () => {
  //prettier-ignore
  return new ViewBuilder(Container)
    .withNode(ShootButtonsGroup())
    .withNode(EndGameScreenView())
  .build();
};
