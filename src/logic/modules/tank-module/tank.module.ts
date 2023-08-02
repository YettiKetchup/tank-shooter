import { HoldedComponent } from '@shared/interactive-module';
import { PlayerTankComponent } from './components/player-tank.component';
import { Module, EntitySubject, includes } from 'mysh-pixi';

export class TankModule extends Module {
  public init(): void {
    const subscriber$ = EntitySubject.onChange(HoldedComponent);

    subscriber$.pipe(includes(PlayerTankComponent));

    subscriber$.subscribe((entity) => {
      console.log('ololololo');
    });
  }
}
