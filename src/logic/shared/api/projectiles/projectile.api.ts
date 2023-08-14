import { ProjectileData } from './data/types';
import { fakeData } from './fake.data';

export class ProjectileAPI {
  private static _data: ProjectileData[] = [];

  public static async fetch(url: string): Promise<ProjectileData[]> {
    this._data = fakeData;
    return this._data;
  }

  public static get(key: string): ProjectileData {
    return this._data.find((config) => config.type === key) as ProjectileData;
  }
}
