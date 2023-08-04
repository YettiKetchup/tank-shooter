import { ShootButtonsView } from '@modules/tank-module/views/ui';
import { ViewBuilder } from 'mysh-pixi';
import { Container } from 'pixijs';

export const GameUIView = () => {
  //prettier-ignore
  return new ViewBuilder(Container)
    .withNode(ShootButtonsView())
  .build();
};
