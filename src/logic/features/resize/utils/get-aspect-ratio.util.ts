export const getAspectRatio = (width: number, height: number): number => {
  return width > height ? width / height : height / width;
};
