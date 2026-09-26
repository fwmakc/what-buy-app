import type { FileOptions } from '../../interfaces/file_options.interface';
import type { FileReader } from '../../interfaces/file_reader.interface';

export class ReadFileByFetch implements FileReader {
  async read({ fileName }: FileOptions): Promise<FileOptions> {
    const file = await fetch(fileName!);
    const content = await file?.text();

    return { content, fileName };
  }
}
