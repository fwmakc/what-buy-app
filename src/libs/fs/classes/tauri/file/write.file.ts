import { writeTextFile } from '@tauri-apps/plugin-fs';

export async function writeFile(
  fileName: string,
  content: string,
): Promise<void> {
  await writeTextFile(fileName, content);
}
