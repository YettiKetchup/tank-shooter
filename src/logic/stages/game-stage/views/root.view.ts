import { ViewBuilder } from 'mysh-pixi';
import { Container } from '@pixi/display';
import { SceneView } from './scene.view';
import { UIView } from './ui.view';

export const RootView = () => {
  return new ViewBuilder(Container)
    .withNode(SceneView())
    .withNode(UIView())
    .build();
};
