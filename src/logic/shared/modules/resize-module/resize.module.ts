import { EntitiesCollection, EntityStorage, Module } from 'mysh-pixi';
import { PixiOrientation, ResizeChainCalback } from './data/types';
import { OnResizeStaticChain, OnResizeDynamicChain } from './chains/';
import { orientation } from './utils/orientation.util';
import { ResizeModuleConfig } from './data/resize-module.config';
import { EntitySubject } from 'mysh-pixi';
import { ForceResizeComponent } from './components';

export class ResizeModule extends Module {
  private _collection: EntitiesCollection | null = null;
  private _prevOrientation: PixiOrientation | null = null;
  private _onForceResize$ = EntitySubject.onAdd(ForceResizeComponent);

  constructor(private _collectionKeys: string[]) {
    super();
  }

  init(): void {
    this._collection = EntityStorage.combine(
      'resize-module',
      this._collectionKeys
    );

    if (!ResizeModuleConfig.NODE) return;

    new ResizeObserver(() => {
      const orient = orientation();
      if (orient !== this._prevOrientation) {
        this._prevOrientation = orient;
        this.resizeStatic(orient, true);
      }

      this.resizeDynamic(orient);
    }).observe(ResizeModuleConfig.NODE);
  }

  postInit(): void {
    this._onForceResize$.subscribe((entity) => {
      const orient = orientation();
      entity.remove(ForceResizeComponent);

      this.resizeDynamic(orient);
      this.resizeStatic(orient, true);
    });
  }

  destroy(): void {
    this._onForceResize$.unsubscribe();
  }

  private resizeDynamic(orieantation: PixiOrientation): void {
    OnResizeDynamicChain(orieantation).execute(
      this._collection as EntitiesCollection
    );
  }

  private resizeStatic(
    orieantation: PixiOrientation,
    needUpdate: boolean
  ): void {
    if (needUpdate) {
      OnResizeStaticChain(orieantation).execute(
        this._collection as EntitiesCollection
      );
    }
  }
}
