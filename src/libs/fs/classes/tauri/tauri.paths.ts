import {
  appCacheDir,
  appDataDir,
  documentDir,
  homeDir,
  resourceDir,
} from '@tauri-apps/api/path';

import type { DefaultPaths } from '../../interfaces/default_paths.interface';

export class TauriPaths implements DefaultPaths<string> {
  async app(): Promise<string> {
    return await resourceDir();
  }

  async cache(): Promise<string> {
    return await appCacheDir();
  }

  async data(): Promise<string> {
    return await appDataDir();
  }

  async documents(): Promise<string> {
    return await documentDir();
  }

  async home(): Promise<string> {
    return await homeDir();
  }
}
