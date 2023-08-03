import { ViewBuilder } from 'mysh-pixi';
import { Container } from 'pixijs';
import { EnvironmentView } from './environment-item.view';
import { AssetKey } from '@shared/aseets/asset-key.enum';

export const DecorationsView = () => {
  //prettier-ignore
  return new ViewBuilder(Container)
    .withNode(EnvironmentView(AssetKey.Tracks, -30, 370))
      .withAngle(45)

    .withNode(EnvironmentView(AssetKey.Tracks, 30, -370))
      .withAngle(45)

    .withNode(EnvironmentView(AssetKey.Oil, 555, -35))
    .withNode(EnvironmentView(AssetKey.Barrel, 575, -55))
      .withAngle(45)
      
    .withNode(EnvironmentView(AssetKey.BarrelTop, -125, -235))
    .withNode(EnvironmentView(AssetKey.BarrelTop, -125, -280))
    .withNode(EnvironmentView(AssetKey.BarrelTop, -125, -280))
    .withNode(EnvironmentView(AssetKey.BarrelTop, -125, -255))
    .withNode(EnvironmentView(AssetKey.Sandbag, -550, -50))
    .withNode(EnvironmentView(AssetKey.Sandbag, -600, -100))
    .withNode(EnvironmentView(AssetKey.Sandbag, -575, -80))
    .withNode(EnvironmentView(AssetKey.SandbagBroken, -635, -10))
      .withAngle(-40)
  .build();
};
