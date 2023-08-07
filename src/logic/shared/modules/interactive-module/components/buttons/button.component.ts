import { AssetsLoader } from 'mysh-pixi';
import { Texture } from 'pixijs';

export class ButtonComponent {
  private _idle: Texture | null = null;
  private _hover: Texture | null = null;
  private _pressed: Texture | null = null;
  private _disabled: Texture | null = null;

  public get idle(): Texture {
    return this._idle as Texture;
  }

  public get hover(): Texture {
    return this._hover as Texture;
  }

  public get pressed(): Texture {
    return this._pressed as Texture;
  }

  public get disabled(): Texture {
    return this._pressed as Texture;
  }

  constructor(idle: string, hover: string, pressed: string, disabled: string) {
    this._idle = AssetsLoader.Textures.get(idle);
    this._hover = AssetsLoader.Textures.get(hover);
    this._pressed = AssetsLoader.Textures.get(pressed);
    this._disabled = AssetsLoader.Textures.get(disabled);
  }
}
