import { WinScreenComponent } from '../components';
import { EndGameScreenView } from './end-game-screen.view';

export const WinScreenView = () =>
  EndGameScreenView(new WinScreenComponent(), 'YOU WIN!');
