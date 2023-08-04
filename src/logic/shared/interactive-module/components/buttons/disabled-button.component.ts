import { AssetsLoader } from 'mysh-pixi';
import { Texture } from 'pixijs';

export class DisabledButtonComponent {
  private _disabled: Texture | null = null;

  public get disabled(): Texture {
    return this._disabled as Texture;
  }

  constructor(disabled: string) {
    this._disabled = AssetsLoader.Textures.get(disabled);
  }
}
