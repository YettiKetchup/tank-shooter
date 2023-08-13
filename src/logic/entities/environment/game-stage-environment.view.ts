import { EntityStorage, ViewBuilder } from 'mysh-pixi';
import { Container } from '@pixi/display';
import { StorageKey, ViewName } from '@shared/data';
import { groundGrid, groundMapConfig } from './data/ground-tiles.data';
import { TilesGeneratorView } from '@features/tiles-generator';
import { BarricadesView } from './barricades.view';
import { TreesView } from './trees.view';
import { DecorationsView } from './decorations.view';

export const GameStageEnvironmentView = () => {
  const collection = EntityStorage.get(StorageKey.Game);

  return new ViewBuilder(Container)
    .withNode(TilesGeneratorView(collection, groundGrid, groundMapConfig))
    .withNode(Container, ViewName.GroundCracks)
    .withNode(TreesView())
    .withNode(BarricadesView())
    .withNode(DecorationsView())
    .build();
};
