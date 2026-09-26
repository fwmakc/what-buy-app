export interface ListOptions {
  mask?: string;
  sortBy?: 'name' | 'ext' | 'size' | 'date';
  order?: 'asc' | 'desc';
  limit?: number;
}

export interface ListItem {
  name?: string;
  fileName?: string;
  fileExtension?: string;
  path?: string;
  fullPath?: string;

  meta?: string;
  type?: 'dir' | 'file' | 'symlink';
  size?: number;

  createdAt?: Date;
  modifiedAt?: Date;
  ctime?: number;
  mtime?: number;

  stats?: string;
}
