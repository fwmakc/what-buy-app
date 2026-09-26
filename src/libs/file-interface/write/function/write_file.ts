import type { FileOptions } from '../../interfaces/file_options.interface';
import type { FileWriter } from '../../interfaces/file_writer.interface';

export async function writeFile(
  fileWriter: FileWriter,
  options: FileOptions,
): Promise<FileOptions> {
  if (!options?.content) {
    options.content = '';
  }

  return fileWriter.write(options);
}
