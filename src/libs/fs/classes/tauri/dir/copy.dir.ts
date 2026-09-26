import { copyFile as copy } from '@tauri-apps/plugin-fs';

export async function copyDir(
  oldFilePath: string,
  newFilePath: string,
): Promise<void> {
  await copy(oldFilePath, newFilePath);
}
