import { size } from '@tauri-apps/plugin-fs';

export async function sizeDir(dirPath: string): Promise<number> {
  return await size(dirPath);
}
