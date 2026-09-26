import type { FileOptions } from '../../interfaces/file_options.interface';
import type { FileWriter } from '../../interfaces/file_writer.interface';

export class WriteFileByBrowser implements FileWriter {
  async write({ fileName, content }: FileOptions): Promise<FileOptions> {
    const blob = new Blob([content!], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = fileName!;
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    return { fileName };
  }
}
