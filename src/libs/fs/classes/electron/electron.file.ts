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

export class ElectronFile implements File<string, string> {
  currentFile?: string;
  currentDir?: string;

  constructor(file?: string, dir?: string) {
    this.set(file, dir);
  }

  get(): string | undefined {
    return this.currentFile;
  }

  set(file?: string, dir?: string): void {
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
    await copyFile(this.currentFile!, newFilePath);
    return new ElectronFile(newFilePath) as this;
  }

  async create(newFilePath: string): Promise<void> {
    this.currentFile = newFilePath;
    await this.write('');
  }

  async info(): Promise<ListItem> {
    return await getInfoFile(this.currentFile!);
  }

  async read(): Promise<string> {
    return await readFile(this.currentFile!);
  }

  async readBytes(): Promise<Uint8Array> {
    return await readBytesFile(this.currentFile!);
  }

  async remove(): Promise<void> {
    await removeFile(this.currentFile!);
    this.currentFile = undefined;
  }

  async rename(newFilePath: string): Promise<void> {
    await renameFile(this.currentFile!, newFilePath);
    this.currentFile = newFilePath;
  }

  async write(content: string): Promise<void> {
    await writeFile(this.currentFile!, content);
  }

  async writeBytes(content: Uint8Array): Promise<void> {
    await writeBytesFile(this.currentFile!, content);
  }

  async saveDialog(_fileTypes?: FileTypes): Promise<string> {
    return '';
  }

  async openDialog(_fileTypes?: FileTypes): Promise<string> {
    return '';
  }
}
