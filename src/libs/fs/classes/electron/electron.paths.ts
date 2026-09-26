import type { DefaultPaths } from '../../interfaces/default_paths.interface';

export class ElectronPaths implements DefaultPaths<string> {
  async app(): Promise<string> {
    return await (window as any).electronPathsAPI?.app();
  }

  async cache(): Promise<string> {
    return await (window as any).electronPathsAPI?.cache();
  }

  async data(): Promise<string> {
    return await (window as any).electronPathsAPI?.data();
  }

  async documents(): Promise<string> {
    return await (window as any).electronPathsAPI?.documents();
  }

  async home(): Promise<string> {
    return await (window as any).electronPathsAPI?.home();
  }
}
