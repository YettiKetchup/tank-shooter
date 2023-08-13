import { ViewBuilder } from 'mysh-pixi';
import { Container } from '@pixi/display';
import { SceneView } from './scene.view';
import { UIView } from './ui.view';

export const RootView = () => {
  const projectileParent = SceneView();

  return new ViewBuilder(Container)
    .withNode(projectileParent)
    .withNode(UIView())
    .build();
};
