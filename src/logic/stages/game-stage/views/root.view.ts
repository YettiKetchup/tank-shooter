import { ViewBuilder } from 'mysh-pixi';
import { Container } from 'pixijs';
import { BarrelView } from './barrel.view';

export const RootView = () => {
  //prettier-ignore
  return new ViewBuilder(Container)
    .withNode(BarrelView())
  .build()
};
