import { ViewBuilder } from 'mysh-pixi';
import { Container } from 'pixijs';
import { EnvironmentView } from './environment-item.view';
import { AssetKey } from '@shared/aseets/asset-key.enum';

export const BarricadesView = () => {
  //prettier-ignore
  return new ViewBuilder(Container)
    // Player barricade
    .withNode(EnvironmentView(AssetKey.Fence, 0, 175))
    .withNode(EnvironmentView(AssetKey.Barricade, 100, 175))
    .withNode(EnvironmentView(AssetKey.BarricadeBroken, -100, 175))
    .withNode(EnvironmentView(AssetKey.Fence, 185, 200))
      .withAngle(45)
    .withNode(EnvironmentView(AssetKey.Fence, -185, 200))
      .withAngle(-45)

    //Enemy Barricade
    .withNode(EnvironmentView(AssetKey.BarricadeBroken, 0, -175))
    .withNode(EnvironmentView(AssetKey.Barricade, 70, -175))
    .withNode(EnvironmentView(AssetKey.Barricade, -70, -175))
    .withNode(EnvironmentView(AssetKey.Fence, 165, -200))
      .withAngle(-45)
  .build()
};
