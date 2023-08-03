import { Module, EntityStorage, EntitiesCollection } from 'mysh-pixi';
import { SetInteractivityChain } from './chains/set-interactivity.chain';

export class InteractiveModule extends Module {
  private _collection: EntitiesCollection | null = null;

  protected get collection(): EntitiesCollection {
    return this._collection as EntitiesCollection;
  }

  constructor(...colelctionKeys: string[]) {
    super();
    this._collection = EntityStorage.combine(
      'interactive-module',
      colelctionKeys
    );
  }

  public init(): void {
    const setInteractivity = SetInteractivityChain(this.collection);
    setInteractivity.execute();
  }
}
