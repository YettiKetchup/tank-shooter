import { TextStyle, Text } from 'pixijs';

export const EndGameText = (label: string, size: number = 46) => {
  const style = new TextStyle({
    fill: '#ffffff',
    strokeThickness: 2,
    fontFamily: 'Glowing Bubble',
    fontSize: size,
  });

  const text = new Text(label, style);
  text.anchor.set(0.5, 0.5);

  return text;
};
