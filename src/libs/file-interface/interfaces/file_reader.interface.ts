import type { FileOptions } from './file_options.interface';

export interface FileReader {
  read(options: FileOptions): Promise<FileOptions>;
}
