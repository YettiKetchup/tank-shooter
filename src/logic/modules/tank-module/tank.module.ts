import { AmmoCountComponent, ShootIndicatorComponent } from './components';
import { StorageKey } from '@shared/data';
import { OnShootHoldChain, OnShootStartChain } from './chains';

import {
  ButtonHoldedComponent,
  ButtonPointerDown,
} from '@shared/modules/interactive-module';

import {
  Chain,
  EntityStorage,
  EntitySubject,
  Module,
  includesPipe,
} from 'mysh-pixi';

export class TankModule extends Module {
  private _onShootStartChain: Chain | null = null;
  private _onShootHoldChain: Chain | null = null;

  private _shootButtonPressed$ = EntitySubject.onAdd(ButtonPointerDown);
  private _shootButtonHolded$ = EntitySubject.onChange(ButtonHoldedComponent);

  init(): void {
    const collection = EntityStorage.combine('tank-module', [
      StorageKey.Game,
      StorageKey.UI,
    ]);

    this._onShootStartChain = OnShootStartChain(collection);
    this._onShootHoldChain = OnShootHoldChain(collection);

    this.handleshoot();
  }

  destroy(): void {
    this._shootButtonPressed$.unsubscribe();
    this._shootButtonHolded$.unsubscribe();
  }

  private handleshoot(): void {
    const includes = [AmmoCountComponent];
    this._shootButtonPressed$.pipe(includesPipe(...includes));

    this._shootButtonPressed$.subscribe(this.onShootStart.bind(this));
    this._shootButtonHolded$.subscribe(this.onShootHold.bind(this));
  }

  private onShootStart(): void {
    this._onShootStartChain?.execute();
  }

  private onShootHold(): void {
    this._onShootHoldChain?.execute();
  }
}
