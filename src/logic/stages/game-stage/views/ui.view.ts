import { ViewBuilder } from 'mysh-pixi';
import { Container } from '@pixi/display';
import { ShootButtonsGroup } from '@modules/shoot-ui';
import { EndGameScreenView } from '@widgets/end-game';

export const UIView = () => {
  //prettier-ignore
  return new ViewBuilder(Container, 'UI')
    .withNode(ShootButtonsGroup())
    .withNode(EndGameScreenView())
  .build();
};
