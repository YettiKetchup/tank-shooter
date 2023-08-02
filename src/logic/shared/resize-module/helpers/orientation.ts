import { PixiOrientation } from '../data/types';

export const orientation = (): PixiOrientation => {
  const { innerWidth, innerHeight } = window;
  return innerWidth > innerHeight ? 'landscape' : 'portrait';
};
