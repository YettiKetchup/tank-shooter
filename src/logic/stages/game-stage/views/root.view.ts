import { ViewBuilder } from 'mysh-pixi';
import { Container } from '@pixi/display';
import { GameSceneView } from './game-scene.view';
import { GameUIView } from './game-ui.view';

export const RootView = () => {
  //prettier-ignore
  return new ViewBuilder(Container)
    .withNode(GameSceneView()) // Game
    .withNode(GameUIView()) // UI
  .build()
};
