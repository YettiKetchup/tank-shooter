import {
  Module,
  EntityStorage,
  EntitySubject,
  EntitiesCollection,
} from 'mysh-pixi';
import { SetInteractivityChain } from './chains/set-interactivity.chain';
import { OnButtonDisabledChain, SetUIChain } from './chains';
import { DisabledButtonComponent } from './components';

export class InteractiveModule extends Module {
  protected get collection(): EntitiesCollection {
    return this._collection as EntitiesCollection;
  }

  private _collection: EntitiesCollection | null = null;
  private _buttonDisabled$ = EntitySubject.onAdd(DisabledButtonComponent);
  private _buttonEnabled$ = EntitySubject.onRemove(DisabledButtonComponent);

  constructor(private _collectionKeys: string[]) {
    super();
  }

  public init(): void {
    this._collection = EntityStorage.combine(
      'interactive-module',
      this._collectionKeys
    );

    const setInteractivity = SetInteractivityChain(this._collection);
    const setUi = SetUIChain(this._collection);

    setInteractivity.execute();
    setUi.execute();

    this._buttonDisabled$.subscribe(this._onButtonDisabled.bind(this));
    this._buttonEnabled$.subscribe(this._onButtonDisabled.bind(this));
  }

  destroy(): void {
    this._buttonDisabled$.unsubscribe();
    this._buttonEnabled$.unsubscribe();
  }

  private _onButtonDisabled(): void {
    const disabledButton = OnButtonDisabledChain(this.collection);
    disabledButton.execute();
  }
}
