import { mkdir } from '@tauri-apps/plugin-fs';

export async function createDir(dirPath: string): Promise<void> {
  await mkdir(dirPath, { recursive: true });
}
