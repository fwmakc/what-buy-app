import type { FileTypes } from './file_types.interface';

export interface FileOptions {
  content?: string;
  file?: File;
  fileHandle?: FileSystemFileHandle;
  fileName?: string;
  fileTypes?: FileTypes;
}
