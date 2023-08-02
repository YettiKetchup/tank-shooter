import { ViewBuilder } from 'mysh-pixi';
import { Container } from 'pixijs';

export const GameUIView = () => {
  //prettier-ignore
  return new ViewBuilder(Container)
  .build();
};
