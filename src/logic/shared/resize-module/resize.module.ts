import { EntityStorage, Module } from 'mysh-pixi';
import { PixiOrientation, ResizeChainCalback } from './data/types';
import { OnResizeStaticChain, OnResizeDynamicChain } from './chains/';
import { orientation } from './helpers/orientation';

export class ResizeModule extends Module {
  private _resizeStaticChain: ResizeChainCalback | null = null;
  private _resizeDynamicChain: ResizeChainCalback | null = null;
  private _prevOrientation: PixiOrientation | null = null;

  public static width: number = 0;
  public static height: number = 0;
  // public static aspectRatio: number = 1.36 as const;

  public static designResolutionLandscape = {
    width: 0,
    height: 0,
  };

  public static designResolutionPortrait = {
    width: 0,
    height: 0,
  };

  constructor(private _colelctionKey: string) {
    super();
  }

  init(): void {
    const collection = EntityStorage.get(this._colelctionKey);
    this._resizeStaticChain = OnResizeStaticChain(collection);
    this._resizeDynamicChain = OnResizeDynamicChain(collection);

    this.onResize();
    window.addEventListener('resize', () => this.onResize(), false);
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
