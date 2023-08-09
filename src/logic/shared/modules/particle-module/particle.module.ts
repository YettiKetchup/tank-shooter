import { StorageKey } from '@shared/data';
import { ContainerCreateChain, UpdateParticlesChain } from './chains';
import { ParticleContainerComponent } from './components';
import {
  EntitiesCollection,
  EntityStorage,
  EntitySubject,
  Module,
} from 'mysh-pixi';

export class ParticleModule extends Module {
  private _collection: EntitiesCollection | null = null;
  private _onContainerCreate$ = EntitySubject.onAdd(ParticleContainerComponent);

  protected get collection(): EntitiesCollection {
    return this._collection as EntitiesCollection;
  }

  init(): void {
    this._collection = EntityStorage.get(StorageKey.Particles);

    this._onContainerCreate$.subscribe(() => {
      ContainerCreateChain().execute(this.collection);
    });
  }

  update(dt: number): void {
    UpdateParticlesChain().execute(this.collection);
  }

  destroy(): void {
    this._onContainerCreate$.unsubscribe();
  }
}
