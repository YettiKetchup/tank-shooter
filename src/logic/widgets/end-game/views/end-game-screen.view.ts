import { AssetKey, StorageKey } from '@shared/data';
import { SmartFitComponent } from '@features/resize';
import { EntityStorage, ViewBuilder } from 'mysh-pixi';
import { Container } from '@pixi/display';
import { Sprite } from '@pixi/sprite';
import { EndScreenComponent } from '../components';
import { EndGameSign } from './end-game-sign.view';

export const EndGameScreenView = () => {
  const collection = EntityStorage.get(StorageKey.UI);

  //prettier-ignore
  return new ViewBuilder(Container)
    .asEntity(collection)
      .withComponent(EndScreenComponent)
    .withAnchor(0.5, 0.5)
    .isInteractive(true)
    .isVisible(false)
    .withChildren()
      .withNode(Sprite)
        .asEntity(collection)
          .withComponent(SmartFitComponent)
        .withTexture(AssetKey.BarBackground)
        .withAnchor(0.5, 0.5)
      .withNode(EndGameSign(collection))
      .withPositionY(-100)
    .endChildren()
  .build();
};
