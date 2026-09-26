import type { FileTypes } from './file_types.interface';
import type { ListItem } from './list.interface';

export interface File<FileDescriptor, DirDescriptor> {
  currentFile?: FileDescriptor;
  currentDir?: DirDescriptor;

  get(): FileDescriptor | undefined;
  set(file?: FileDescriptor, dir?: DirDescriptor): void;

  clear(): void;
  copy(newFile: FileDescriptor): this | Promise<this>;
  create(newFile: FileDescriptor): void;
  info(): ListItem | Promise<ListItem>;
  read(): string | Promise<string>;
  readBytes(): Uint8Array | Promise<Uint8Array>;
  rename(newFile: FileDescriptor): void;
  remove(): void;
  write(content: string): void;
  writeBytes(content: Uint8Array): void;

  saveDialog(fileTypes?: FileTypes): FileDescriptor | Promise<FileDescriptor>;
  openDialog(fileTypes?: FileTypes): FileDescriptor | Promise<FileDescriptor>;
}
