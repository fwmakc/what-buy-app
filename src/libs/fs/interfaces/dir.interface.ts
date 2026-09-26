import type { ListItem, ListOptions } from './list.interface';

export interface Dir<DirDescriptor, FileDescriptor> {
  currentDir?: DirDescriptor;

  get(): DirDescriptor | undefined;
  set(dir: DirDescriptor): void;

  copy(newDir: DirDescriptor): this | Promise<this>;
  create(newDir: DirDescriptor): void;
  info(): ListItem | Promise<ListItem>;
  list(options?: ListOptions): FileDescriptor[] | Promise<FileDescriptor[]>;
  remove(): void;
  rename(newDir: DirDescriptor): void;

  selectDialog(defaultDir?: DirDescriptor): void;
}
