import type { FileOptions } from '../../interfaces/file_options.interface';
import type { FileReader } from '../../interfaces/file_reader.interface';

export class ReadFileByBrowser implements FileReader {
  async read({ file }: FileOptions): Promise<FileOptions> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e): void => {
        const content = e.target?.result;

        if (typeof content === 'string') {
          resolve({ content, file });
        }
      };

      reader.onerror = (): void => {
        reject(new Error('Ошибка чтения файла'));
      };

      reader.readAsText(file as Blob);
    });
  }
}
