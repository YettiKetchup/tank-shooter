import { Container } from '@pixi/display';

type ViewFactory = () => Container;

export class VFXMapper {
  private static _vfx: Map<string, Map<string, ViewFactory>> = new Map();

  public static add(collection: string, name: string, view: ViewFactory): void {
    let items = this._vfx.get(collection);
    if (!items) items = new Map<string, ViewFactory>();

    items.set(name, view);
    this._vfx.set(collection, items);
  }

  public static get(collection: string, name: string): ViewFactory | null {
    return this._vfx.get(collection)?.get(name) || null;
  }
}
