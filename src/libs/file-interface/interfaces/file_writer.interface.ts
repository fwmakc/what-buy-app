import type { FileOptions } from './file_options.interface';

export interface FileWriter {
  write(options: FileOptions): Promise<FileOptions>;
}
