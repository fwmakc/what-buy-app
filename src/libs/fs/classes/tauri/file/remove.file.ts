import { remove } from '@tauri-apps/plugin-fs';

export async function removeFile(fileName: string): Promise<void> {
  await remove(fileName);
}
