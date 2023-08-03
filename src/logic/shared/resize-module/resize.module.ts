import { EntityStorage, Module } from 'mysh-pixi';
import { PixiOrientation, ResizeChainCalback } from './data/types';
import { OnResizeStaticChain, OnResizeDynamicChain } from './chains/';
import { orientation } from './utils/orientation.util';
import { ResizeModuleConfig } from './data/resize-module.config';

export class ResizeModule extends Module {
  private _resizeStaticChain: ResizeChainCalback | null = null;
  private _resizeDynamicChain: ResizeChainCalback | null = null;
  private _prevOrientation: PixiOrientation | null = null;

  constructor(private _collectionKeys: string[]) {
    super();
  }

  init(): void {
    const collection = EntityStorage.combine(
      'resize-module',
      this._collectionKeys
    );

    this._resizeStaticChain = OnResizeStaticChain(collection);
    this._resizeDynamicChain = OnResizeDynamicChain(collection);

    this.onResize();

    if (!ResizeModuleConfig.NODE) return;
    new ResizeObserver(this.onResize.bind(this)).observe(
      ResizeModuleConfig.NODE
    );
  }

  private onResize(): void {
    const orient = orientation();

    if (this._resizeDynamicChain) {
      this._resizeDynamicChain(orient).execute();
    }

    /**
     * Optimization moment.
     * Call static resize systems ONLY when orientation changes.
     */
    if (orient !== this._prevOrientation) {
      this._prevOrientation = orient;
      if (this._resizeStaticChain) {
        this._resizeStaticChain(orient).execute();
      }
    }
  }
}
