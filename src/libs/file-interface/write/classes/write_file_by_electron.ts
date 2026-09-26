import type { FileOptions } from '../../interfaces/file_options.interface';
import type { FileWriter } from '../../interfaces/file_writer.interface';

export class WriteFileByElectron implements FileWriter {
  async write({ fileName, content }: FileOptions): Promise<FileOptions> {
    const path = await import('path');
    const { writeFile } = await import('fs/promises');

    fileName = path.resolve(fileName!);

    await writeFile(fileName, content!);

    return { fileName };
  }
}
