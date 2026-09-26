import { readTextFile } from '@tauri-apps/plugin-fs';

export async function readFile(fileName: string): Promise<string> {
  return (await readTextFile(fileName)) || '';
}
