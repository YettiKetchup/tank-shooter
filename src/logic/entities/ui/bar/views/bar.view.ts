import { AssetKey } from '@shared/data';
import { ViewBuilder } from 'mysh-pixi';
import { Sprite } from '@pixi/sprite';

export const BarView = (
  progress: number = 0,
  progressName: string,
  color: number = 0xffffff
) => {
  return new ViewBuilder(Sprite)
    .withTexture(AssetKey.BarBackground)
    .withAnchor(0.5, 0.5)
    .withChildren()

    .withNode(Sprite, progressName)
    .withTexture(AssetKey.BarValue)
    .withTint(color)
    .withScale(progress, 1)
    .withAnchor(1, 0.5)
    .withPositionX(48)

    .endChildren()
    .build();
};
