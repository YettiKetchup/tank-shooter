import { Module, RegisterSystems } from 'mysh-pixi';
import { CreateParticleSystem, UpdateParticlesSystem } from './systems';

@RegisterSystems([
  { provide: CreateParticleSystem },
  { provide: UpdateParticlesSystem },
])
export class ParticlesModule extends Module {}
