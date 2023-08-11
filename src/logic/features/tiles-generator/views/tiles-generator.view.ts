import { Container } from '@pixi/display';
import { EntitiesCollection, ViewBuilder } from 'mysh-pixi';
import { TilesGeneratorComponent, TilesMapComponent } from '../components';

export const TilesGeneratorView = (
  collection: EntitiesCollection,
  tiles: number[][],
  tilesMapConfig: Map<number, string>,
  width: number = 128,
  height: number = 128
) => {
  return new ViewBuilder(Container)
    .asEntity(collection)
    .withComponent(new TilesGeneratorComponent(tiles, width, height))
    .withComponent(new TilesMapComponent(tilesMapConfig))
    .build();
};
