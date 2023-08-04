import { ViewBuilder } from 'mysh-pixi';
import { Container } from 'pixijs';
import { EnvironmentView } from './environment-item.view';
import { AssetKey } from '@shared/data';

export const TreesView = () => {
  //prettier-ignore
  return new ViewBuilder(Container)
    .withNode(EnvironmentView(AssetKey.TreeGrenLarge, -380, 160))
    .withNode(EnvironmentView(AssetKey.TreeGrenSmall, -290, 50))
    .withNode(EnvironmentView(AssetKey.TreeGrenLarge, 330, 400))
    .withNode(EnvironmentView(AssetKey.TreeGrenSmall, 635, 300))
    .withNode(EnvironmentView(AssetKey.TreeBrownLarge, 400, -145))
    .withNode(EnvironmentView(AssetKey.TreeBrownSmall, -460, -200))
    .withNode(EnvironmentView(AssetKey.TreeBrownLarge, -155, -465))
    .withNode(EnvironmentView(AssetKey.TreeBrownSmall, 185, -400))
    .withNode(EnvironmentView(AssetKey.TwigsGreen, 305, 100))
    .withNode(EnvironmentView(AssetKey.TwigsGreen, -230, 425))
    .withNode(EnvironmentView(AssetKey.TwigsBrown, 370, -455))
  .build();
};
