export const groundGrid = [
  [10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11],
  [11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10],
  [10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11],
  [11, 10, 11, 12, 14, 14, 14, 14, 14, 14, 14, 14, 13, 10, 11, 10],
  [10, 11, 10, 15, 10, 11, 10, 11, 10, 11, 10, 11, 15, 11, 10, 11],
  [6, 6, 6, 20, 6, 6, 6, 6, 6, 6, 6, 6, 21, 6, 6, 6],
  [1, 0, 1, 5, 1, 0, 1, 0, 1, 0, 1, 0, 5, 0, 1, 0],
  [0, 1, 0, 5, 0, 1, 0, 1, 0, 1, 0, 1, 5, 1, 0, 1],
  [1, 0, 1, 3, 4, 4, 4, 4, 4, 4, 4, 4, 2, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
];

export const groundMapConfig: Map<number, string> = new Map();

groundMapConfig.set(0, 'grass_1.png');
groundMapConfig.set(1, 'grass_2.png');
groundMapConfig.set(2, 'grass_right.png');
groundMapConfig.set(3, 'grass_left.png');
groundMapConfig.set(4, 'grass_road.png');
groundMapConfig.set(5, 'grass_road_up.png');
groundMapConfig.set(6, 'grass_sand.png');

groundMapConfig.set(10, 'sand_1.png');
groundMapConfig.set(11, 'sand_2.png');
groundMapConfig.set(12, 'sand_left.png');
groundMapConfig.set(13, 'sand_right.png');
groundMapConfig.set(14, 'sand_road.png');
groundMapConfig.set(15, 'sand_road_up.png');

groundMapConfig.set(20, 'grass_sand_road_1.png');
groundMapConfig.set(21, 'grass_sand_road_2.png');
