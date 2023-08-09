import { EntitiesCollection, EntityStorage, Module } from 'mysh-pixi';
import { DestroyDecalChain } from './chains/destroy-decal.chain';

export class DecalModule extends Module {
  protected get collection(): EntitiesCollection {
    return this._collection as EntitiesCollection;
  }

  private _collection: EntitiesCollection | null = null;

  constructor(private _collectionKeys: string[]) {
    super();
  }

  public init(): void {
    this._collection = EntityStorage.combine(
      'decal-module',
      this._collectionKeys
    );
  }

  public update(dt: number): void {
    DestroyDecalChain().execute(this.collection);
  }
}
