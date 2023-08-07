import { Entity, EntitySubject, Module, includesPipe } from 'mysh-pixi';
import { ButtonHoldedComponent } from '@shared/modules/interactive-module';

import {
  AmmoCountComponent,
  AmmoDamageComponent,
  ShootButtonComponent,
} from './components';

export class TankModule extends Module {
  private _shootButtonHold$ = EntitySubject.onChange(ButtonHoldedComponent);

  init(): void {
    this.handleshoot();
  }

  destroy(): void {
    this._shootButtonHold$.unsubscribe();
  }

  private handleshoot(): void {
    const includes = [
      ShootButtonComponent,
      AmmoCountComponent,
      AmmoDamageComponent,
    ];

    this._shootButtonHold$.pipe(includesPipe(...includes));
    this._shootButtonHold$.subscribe(this.onShoot.bind(this));
  }

  private onShoot(entity: Entity): void {
    // console.log(entity);
  }
}
