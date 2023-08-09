import { ViewBuilder } from 'mysh-pixi';
import { Container } from '@pixi/display';
import { AssetKey } from '@shared/data';
import { DecorationView } from '@views/decorations';

export const TreesView = () => {
  //prettier-ignore
  return new ViewBuilder(Container)
    .withNode(DecorationView(AssetKey.TreeGrenLarge, -380, 160))
    .withNode(DecorationView(AssetKey.TreeGrenSmall, -290, 50))
    .withNode(DecorationView(AssetKey.TreeGrenLarge, 330, 400))
    .withNode(DecorationView(AssetKey.TreeGrenSmall, 635, 300))
    .withNode(DecorationView(AssetKey.TreeBrownLarge, 400, -145))
    .withNode(DecorationView(AssetKey.TreeBrownSmall, -460, -200))
    .withNode(DecorationView(AssetKey.TreeBrownLarge, -155, -465))
    .withNode(DecorationView(AssetKey.TreeBrownSmall, 185, -400))
    .withNode(DecorationView(AssetKey.TwigsGreen, 305, 100))
    .withNode(DecorationView(AssetKey.TwigsGreen, -230, 425))
    .withNode(DecorationView(AssetKey.TwigsBrown, 370, -455))
  .build();
};
