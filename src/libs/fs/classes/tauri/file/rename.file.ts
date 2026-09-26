import { rename } from '@tauri-apps/plugin-fs';

export async function renameFile(
  oldFilePath: string,
  newFilePath: string,
): Promise<void> {
  await rename(oldFilePath, newFilePath);
}
