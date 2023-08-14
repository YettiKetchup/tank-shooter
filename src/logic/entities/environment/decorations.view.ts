import { ViewBuilder } from 'mysh-pixi';
import { Container } from '@pixi/display';
import { AssetKey } from '@shared/data';
import { DecorationView } from './decoration.view';

export const DecorationsView = () => {
  return new ViewBuilder(Container)
    .withNode(DecorationView(AssetKey.Tracks, -30, 370))
    .withAngle(45)

    .withNode(DecorationView(AssetKey.Tracks, 30, -370))
    .withAngle(45)

    .withNode(DecorationView(AssetKey.Oil, 555, -35))

    .withNode(DecorationView(AssetKey.Barrel, 575, -55))
    .withAngle(45)

    .withNode(DecorationView(AssetKey.BarrelTop, -125, -235))
    .withNode(DecorationView(AssetKey.BarrelTop, -125, -280))
    .withNode(DecorationView(AssetKey.BarrelTop, -125, -280))
    .withNode(DecorationView(AssetKey.BarrelTop, -125, -255))
    .withNode(DecorationView(AssetKey.Sandbag, -550, -50))
    .withNode(DecorationView(AssetKey.Sandbag, -600, -100))
    .withNode(DecorationView(AssetKey.Sandbag, -575, -80))

    .withNode(DecorationView(AssetKey.SandbagBroken, -635, -10))
    .withAngle(-40)

    .build();
};
