import { ViewBuilder } from 'mysh-pixi';
import { Container } from 'pixijs';
import { GameSceneView } from './game-scene.view';
import { GameUIView } from './game-ui.view';

export const RootView = () => {
  //prettier-ignore
  return new ViewBuilder(Container)
    .withNode(GameUIView()) // UI
    .withNode(GameSceneView()) // Game
  .build()
};
