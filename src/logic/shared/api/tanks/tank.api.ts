import { TankData } from './data/types';
import { fakeData } from './fake.data';

export class TankAPI {
  private static _data: TankData[] = [];

  public static async fetch(url: string): Promise<TankData[]> {
    this._data = fakeData;
    return this._data;
  }

  public static get(key: string): TankData {
    return this._data.find((config) => config.type === key) as TankData;
  }
}
