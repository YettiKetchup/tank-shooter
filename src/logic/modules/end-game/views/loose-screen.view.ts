import { LooseScreenComponent } from '../components';
import { EndGameScreenView } from './end-game-screen.view';

export const LooseScreenView = () =>
  EndGameScreenView(new LooseScreenComponent(), 'YOU LOOSE!');
