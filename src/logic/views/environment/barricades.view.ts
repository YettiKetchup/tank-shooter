import { ViewBuilder } from 'mysh-pixi';
import { Container } from '@pixi/display';
import { AssetKey } from '@shared/data';
import { DecorationView } from './decoration.view';

export const BarricadesView = () => {
  //prettier-ignore
  return new ViewBuilder(Container)
    // Player barricade
    .withNode(DecorationView(AssetKey.Fence, 0, 175))
    .withNode(DecorationView(AssetKey.Barricade, 100, 175))
    .withNode(DecorationView(AssetKey.BarricadeBroken, -100, 175))
    .withNode(DecorationView(AssetKey.Fence, 185, 200))
      .withAngle(45)
    .withNode(DecorationView(AssetKey.Fence, -185, 200))
      .withAngle(-45)

    //Enemy Barricade
    .withNode(DecorationView(AssetKey.BarricadeBroken, 0, -175))
    .withNode(DecorationView(AssetKey.Barricade, 70, -175))
    .withNode(DecorationView(AssetKey.Barricade, -70, -175))
    .withNode(DecorationView(AssetKey.Fence, 165, -200))
      .withAngle(-45)
    .build()
};
