import { Container, Sprite } from 'pixijs';
import { System, Filtered, Includes, Entity, AssetsLoader } from 'mysh-pixi';
import { TilesGeneratorComponent, TilesMapComponent } from '../components';

@Includes(TilesGeneratorComponent, TilesMapComponent, Container)
export class GenerateGroundSystem extends System {
  protected onExecute(entities: Filtered): void {
    entities.loop(this.generateEnvironment);
  }

  private generateEnvironment(entity: Entity): void {
    const container = entity.get(Container);
    const { tiles, tileWidth, tileHeight } = entity.get(
      TilesGeneratorComponent
    );

    const { config } = entity.get(TilesMapComponent);

    const width = tiles[0].length;
    const height = tiles.length;
    const areaWidth = width * tileWidth;
    const areaHeight = height * tileHeight;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const tile = new Sprite();
        const textureName = config.get(tiles[y][x]);

        if (textureName) {
          tile.texture = AssetsLoader.Textures.get(textureName);
        }

        tile.anchor.set(0.5, 0.5);

        tile.x = tileWidth * x;
        tile.x -= areaWidth / 2 - tileWidth / 2;

        tile.y = tileHeight * y;
        tile.y -= areaHeight / 2 - tileHeight / 2;

        container.addChild(tile);
      }
    }
  }
}
