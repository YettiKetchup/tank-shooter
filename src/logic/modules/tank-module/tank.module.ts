import { AmmoCountComponent, ShootButtonComponent } from './components';
import { OnShootStartChain } from './chains';
import { StorageKey } from '@shared/data';
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
  private _shootButtonPressed$ = EntitySubject.onAdd(ButtonPointerDown);

  init(): void {
    const collection = EntityStorage.combine('tank-module', [
      StorageKey.Game,
      StorageKey.UI,
    ]);

    this._onShootStartChain = OnShootStartChain(collection);

    this.handleshoot();
  }

  destroy(): void {
    this._shootButtonPressed$.unsubscribe();
  }

  private handleshoot(): void {
    const includes = [ShootButtonComponent];

    this._shootButtonPressed$.pipe(includesPipe(...includes));
    this._shootButtonPressed$.subscribe(() => {
      this.onShootStart();
    });
  }

  private onShootStart(): void {
    this._onShootStartChain?.execute();
  }
}
