import { ShootIndicatorComponent } from '@modules/tank-module/components';
import { AssetKey, StorageKey } from '@shared/data';
import { ViewBuilder, EntityStorage } from 'mysh-pixi';
import { Sprite } from 'pixijs';

export const ShootPowerIndicator = () => {
  const collection = EntityStorage.get(StorageKey.UI);
  const shootIndicatorComponent = new ShootIndicatorComponent(
    0xd21404,
    0xed7117,
    0x74b72e
  );

  //prettier-ignore
  return new ViewBuilder(Sprite)
    .asEntity(collection)
      .withComponent(shootIndicatorComponent)
    .withAlpha(0)
    .withTexture(AssetKey.BarBackground)
    .withAnchor(0.5, 0.5)
    .withAngle(90)
    .withPosition(50, 195)
    .withChildren()
      .withNode(Sprite)
        .withTexture(AssetKey.BarValue)
        .withScale(0, 1)
        .withAnchor(1, 0.5)
        .withPositionX(48)
    .endChildren()
  .build();
};
