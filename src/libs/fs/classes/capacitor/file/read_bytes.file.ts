import type { Directory } from '@capacitor/filesystem';

import { readFile } from './read.file';

export async function readBytesFile(
  fileName: string,
  directory?: Directory,
): Promise<Uint8Array> {
  const data = await readFile(fileName, directory);
  const encoder = new TextEncoder();
  return encoder.encode(data);
}
