import type { Dir } from '../../interfaces/dir.interface';
import type { ListItem, ListOptions } from '../../interfaces/list.interface';

import { copyDir } from './dir/copy.dir';
import { createDir } from './dir/create.dir';
import { getInfoDir } from './dir/get_info.dir';
import { removeDir } from './dir/remove.dir';
import { renameDir } from './dir/rename.dir';

export class CapacitorDir implements Dir<string, string> {
  currentDir?: string;

  constructor(dirPath?: string) {
    if (dirPath) {
      this.set(dirPath);
    }
  }

  get(): string | undefined {
    return this.currentDir;
  }

  set(dirPath: string): void {
    this.currentDir = dirPath;
  }

  async copy(newDirPath: string): Promise<this> {
    await copyDir(this.currentDir!, newDirPath);
    return new CapacitorDir(newDirPath) as this;
  }

  async create(newDirPath: string): Promise<void> {
    await createDir(newDirPath);
    this.currentDir = newDirPath;
  }

  async info(): Promise<ListItem> {
    return await getInfoDir(this.currentDir!);
  }

  async list(_options?: ListOptions): Promise<string[]> {
    return await [];
  }

  async remove(): Promise<void> {
    await removeDir(this.currentDir!);
    this.currentDir = '';
  }

  async rename(newDirPath: string): Promise<void> {
    await renameDir(this.currentDir!, newDirPath);
    this.currentDir = newDirPath;
  }

  async selectDialog(defaultDir?: string): Promise<void> {
    if (defaultDir) {
      this.currentDir = defaultDir;
    }
  }
}
