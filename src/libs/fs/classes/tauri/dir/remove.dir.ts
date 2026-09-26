import { remove } from '@tauri-apps/plugin-fs';

export async function removeDir(dirPath: string): Promise<void> {
  await remove(dirPath, { recursive: true });
}
