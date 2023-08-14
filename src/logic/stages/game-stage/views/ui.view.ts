import { ViewBuilder } from 'mysh-pixi';
import { Container } from '@pixi/display';
import { ShootButtonsGroup } from '@entities/ui/shoot-button';
import { WinScreenView, LooseScreenView } from '@modules/end-game';

export const UIView = () => {
  return new ViewBuilder(Container, 'UI')
    .withNode(ShootButtonsGroup())
    .withNode(WinScreenView())
    .withNode(LooseScreenView())
    .build();
};
