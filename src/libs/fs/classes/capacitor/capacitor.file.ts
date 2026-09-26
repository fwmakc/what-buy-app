import type { Directory } from '@capacitor/filesystem';

import type { File } from '../../interfaces/file.interface';
import type { FileTypes } from '../../interfaces/file_types.interface';
import type { ListItem } from '../../interfaces/list.interface';

import { copyFile } from './file/copy.file';
import { getInfoFile } from './file/get_info.file';
import { readFile } from './file/read.file';
import { readBytesFile } from './file/read_bytes.file';
import { removeFile } from './file/remove.file';
import { renameFile } from './file/rename.file';
import { writeFile } from './file/write.file';
import { writeBytesFile } from './file/write_bytes.file';

export class CapacitorFile implements File<string, Directory> {
  currentFile?: string;
  currentDir?: Directory;

  constructor(file?: string, dir?: Directory) {
    this.set(file, dir);
  }

  get(): string | undefined {
    return this.currentFile;
  }

  set(file?: string, dir?: Directory): void {
    if (file) {
      this.currentFile = file;
    }
    if (dir) {
      this.currentDir = dir;
    }
  }

  async clear(): Promise<void> {
    await this.write('');
  }

  async copy(newFilePath: string): Promise<this> {
    await copyFile(this.currentFile!, newFilePath, this.currentDir);
    return new CapacitorFile(newFilePath) as this;
  }

  async create(newFilePath: string): Promise<void> {
    this.currentFile = newFilePath;
    await this.write('');
  }

  async info(): Promise<ListItem> {
    return await getInfoFile(this.currentFile!, this.currentDir);
  }

  async read(): Promise<string> {
    return await readFile(this.currentFile!, this.currentDir);
  }

  async readBytes(): Promise<Uint8Array> {
    return await readBytesFile(this.currentFile!, this.currentDir);
  }

  async remove(): Promise<void> {
    await removeFile(this.currentFile!, this.currentDir);
    this.currentFile = '';
  }

  async rename(newFilePath: string): Promise<void> {
    await renameFile(this.currentFile!, newFilePath, this.currentDir);
    this.currentFile = newFilePath;
  }

  async write(content: string): Promise<void> {
    await writeFile(this.currentFile!, content, this.currentDir);
  }

  async writeBytes(content: Uint8Array): Promise<void> {
    await writeBytesFile(this.currentFile!, content, this.currentDir);
  }

  async saveDialog(_fileTypes?: FileTypes): Promise<string> {
    return '';
  }

  async openDialog(_fileTypes?: FileTypes): Promise<string> {
    return '';
  }
}
