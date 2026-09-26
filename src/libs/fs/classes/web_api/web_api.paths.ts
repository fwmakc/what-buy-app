import type { DefaultPaths } from '../../interfaces/default_paths.interface';

import { selectDirDialog } from './dialog/select_dir.dialog';

export class WebApiPaths implements DefaultPaths<FileSystemDirectoryHandle> {
  directoryHandle?: FileSystemDirectoryHandle;

  async app(): Promise<FileSystemDirectoryHandle> {
    return await this.getHandle();
  }

  async cache(): Promise<FileSystemDirectoryHandle> {
    return await this.getHandle();
  }

  async data(): Promise<FileSystemDirectoryHandle> {
    return await this.getHandle();
  }

  async documents(): Promise<FileSystemDirectoryHandle> {
    return await this.getHandle();
  }

  async home(): Promise<FileSystemDirectoryHandle> {
    return await this.getHandle();
  }

  async getHandle(): Promise<FileSystemDirectoryHandle> {
    if (!this.directoryHandle) {
      this.directoryHandle = await selectDirDialog();
    }
    return this.directoryHandle;
  }
}
