import * as particles from '@pixi/particle-emitter';

export class ParticleEmitterComponent {
  constructor(public emitter: particles.Emitter) {
    emitter.emit = true;
  }
}
