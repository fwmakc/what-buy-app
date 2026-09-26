import { rename } from '@tauri-apps/plugin-fs';

export async function renameDir(
  oldPath: string,
  newPath: string,
): Promise<void> {
  await rename(oldPath, newPath);
}
