import { TilesGeneratorView } from '@shared/tiles-generator-module';
import { EntityStorage, ViewBuilder } from 'mysh-pixi';
import { Container } from 'pixijs';
import { groundGrid, groundMapConfig } from '../data/ground-tiles.data';
import { TreesView } from './trees.view';

export const GameStageEnvironmentView = () => {
  const collection = EntityStorage.get('game');

  //prettier-ignore
  return new ViewBuilder(Container)
    .withNode(TilesGeneratorView(collection, groundGrid, groundMapConfig))
    .withNode(TreesView())
  .build();
};
