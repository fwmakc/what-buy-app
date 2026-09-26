import { readFile } from '@tauri-apps/plugin-fs';

export async function readBytesFile(fileName: string): Promise<Uint8Array> {
  return await readFile(fileName);
}
