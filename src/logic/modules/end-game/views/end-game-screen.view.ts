import { AssetKey, StorageKey } from '@shared/data';
import { SmartFitComponent } from '@features/resize';
import { Component, EntityStorage, ViewBuilder } from 'mysh-pixi';
import { Container } from '@pixi/display';
import { Sprite } from '@pixi/sprite';
import { EndScreenComponent } from '../components';
import { EndGameSign } from './end-game-sign.view';

export const EndGameScreenView = (tag: Component, endGameText: string) => {
  const collection = EntityStorage.get(StorageKey.UI);

  return new ViewBuilder(Container)
    .asEntity(collection)
    .withComponent(EndScreenComponent)
    .withComponent(tag)
    .withAnchor(0.5, 0.5)
    .isInteractive(true)
    .isVisible(false)

    .withChildren()

    .withNode(Sprite)
    .asEntity(collection)
    .withComponent(SmartFitComponent)
    .withTexture(AssetKey.BarBackground)
    .withAnchor(0.5, 0.5)
    .withNode(EndGameSign(collection, endGameText))
    .withPositionY(-100)

    .endChildren()
    .build();
};
