import { ViewBuilder } from 'mysh-pixi';
import { Container } from 'pixijs';

export const RootView = () => {
  //prettier-ignore
  return new ViewBuilder(Container)
  .build()
};
