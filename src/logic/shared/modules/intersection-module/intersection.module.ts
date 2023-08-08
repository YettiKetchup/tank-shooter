import { Chain, EntitiesCollection, EntityStorage, Module } from 'mysh-pixi';
import { DetectIntersectionsChain } from './chains';

export class IntersectionModule extends Module {
  private _collection: EntitiesCollection | null = null;
  private _detectIntersectionChain: Chain | null = null;

  constructor(private _collectionKeys: string[]) {
    super();
  }

  init(): void {
    this._collection = EntityStorage.combine(
      'intersections',
      this._collectionKeys
    );

    this._detectIntersectionChain = DetectIntersectionsChain();
  }

  update(dt: number): void {
    this._detectIntersectionChain?.execute(
      this._collection as EntitiesCollection
    );
  }
}
