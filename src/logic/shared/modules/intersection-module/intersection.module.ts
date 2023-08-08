import { Chain, EntitiesCollection, EntityStorage, Module } from 'mysh-pixi';
import { DetectIntersectionsChain } from './chains';

export class IntersectionModule extends Module {
  private _detectIntersectionChain: Chain | null = null;

  constructor(private _collectionKeys: string[]) {
    super();
  }

  init(): void {
    const collection = EntityStorage.combine(
      'intersections',
      this._collectionKeys
    );

    this._detectIntersectionChain = DetectIntersectionsChain(collection);

    // this._detectIntersectionChain?.execute();
  }

  update(dt: number): void {
    this._detectIntersectionChain?.execute();
  }
}
