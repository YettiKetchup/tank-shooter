import { Module, EntityStorage } from 'mysh-pixi';
import { SetInteractivityChain } from './chains/set-interactivity.chain';

export class InteractiveModule extends Module {
  constructor(private _collectionKeys: string[]) {
    super();
  }

  public init(): void {
    const collection = EntityStorage.combine(
      'interactive-module',
      this._collectionKeys
    );

    const setInteractivity = SetInteractivityChain(collection);
    setInteractivity.execute();
  }
}
