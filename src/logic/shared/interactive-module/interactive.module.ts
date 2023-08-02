import { Module, EntityStorage } from 'mysh-pixi';
import { SetInteractivityChain } from './chains/set-interactivity.chain';

export class InteractiveModule extends Module {
  constructor(private _colelctionKey: string) {
    super();
  }

  public init(): void {
    const collection = EntityStorage.get(this._colelctionKey);
    const setInteractivity = SetInteractivityChain(collection);
    setInteractivity.execute();
  }
}
