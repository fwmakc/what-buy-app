import { Directory, Filesystem } from '@capacitor/filesystem';

import type { DefaultPaths } from '../../interfaces/default_paths.interface';

interface CapacitorDirType {
  target: Directory;
  uri: string;
}

export class CapacitorPaths implements DefaultPaths<CapacitorDirType> {
  async app(): Promise<CapacitorDirType> {
    const target = Directory.External;
    const path = await Filesystem.getUri({
      path: '',
      directory: target,
    });
    return {
      target,
      uri: path.uri,
    };
  }

  async cache(): Promise<CapacitorDirType> {
    const target = Directory.Cache;
    const path = await Filesystem.getUri({
      path: '',
      directory: target,
    });
    return {
      target,
      uri: path.uri,
    };
  }

  async data(): Promise<CapacitorDirType> {
    const target = Directory.Data;
    const path = await Filesystem.getUri({
      path: '',
      directory: target,
    });
    return {
      target,
      uri: path.uri,
    };
  }

  async documents(): Promise<CapacitorDirType> {
    const target = Directory.Documents;
    const path = await Filesystem.getUri({
      path: '',
      directory: target,
    });
    return {
      target,
      uri: path.uri,
    };
  }

  async home(): Promise<CapacitorDirType> {
    const target = Directory.ExternalStorage;
    const path = await Filesystem.getUri({
      path: '',
      directory: target,
    });
    return {
      target,
      uri: path.uri,
    };
  }
}
