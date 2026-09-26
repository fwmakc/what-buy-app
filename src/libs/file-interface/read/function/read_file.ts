import type { FileOptions } from '../../interfaces/file_options.interface';
import type { FileReader } from '../../interfaces/file_reader.interface';

export async function readFile(
  fileReader: FileReader,
  options: FileOptions,
): Promise<FileOptions> {
  return fileReader.read(options);
}
