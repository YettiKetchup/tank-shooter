import { EntityStorage, Module } from 'mysh-pixi';
import { GenerateGroundSystem } from './systems/generate-ground.system';

export class TilesGeneratorModule extends Module {
  constructor(private _collectionKeys: string[]) {
    super();
  }

  init(): void {
    const collection = EntityStorage.combine(
      'tiles-generator',
      this._collectionKeys
    );

    const generateSystem = new GenerateGroundSystem();
    generateSystem.execute(collection);
  }
}
