import { writeFile } from '@tauri-apps/plugin-fs';

export async function writeBytesFile(
  fileName: string,
  content: Uint8Array,
): Promise<void> {
  return await writeFile(fileName, content);
}
