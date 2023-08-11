import { EntityStorage, ViewBuilder } from 'mysh-pixi';
import { Container } from '@pixi/display';
import { StorageKey } from '@shared/data';
import { groundGrid, groundMapConfig } from './data/ground-tiles.data';
import { TilesGeneratorView } from '@features/tiles-generator';
import { BarricadesView } from './barricades.view';
import { TreesView } from './trees.view';
import { DecorationsView } from './decorations.view';
import { DecalableComponent } from '@components/decals';

export const GameStageEnvironmentView = () => {
  const collection = EntityStorage.get(StorageKey.Game);

  //prettier-ignore
  return new ViewBuilder(Container)
    .withNode(TilesGeneratorView(collection, groundGrid, groundMapConfig))
      // .withName('ground-tiles')
    .withNode(Container)
      .asEntity(collection)
      .withComponent(DecalableComponent)
    .withNode(TreesView())
    .withNode(BarricadesView())
    .withNode(DecorationsView())
    .build();
};
