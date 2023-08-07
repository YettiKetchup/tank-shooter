import { TilesGeneratorView } from '@shared/modules/tiles-generator-module';
import { EntityStorage, ViewBuilder } from 'mysh-pixi';
import { Container } from 'pixijs';
import { groundGrid, groundMapConfig } from '../data/ground-tiles.data';
import { TreesView } from './trees.view';
import { BarricadesView } from './barricades.view';
import { DecorationsView } from './decorations.view';
import { StorageKey } from '@shared/data';

export const GameStageEnvironmentView = () => {
  const collection = EntityStorage.get(StorageKey.Game);

  //prettier-ignore
  return new ViewBuilder(Container)
    .withNode(TilesGeneratorView(collection, groundGrid, groundMapConfig))
    .withNode(TreesView())
    .withNode(BarricadesView())
    .withNode(DecorationsView())
  .build();
};
