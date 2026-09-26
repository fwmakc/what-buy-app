import { open } from '@tauri-apps/plugin-dialog';

export async function selectDirDialog(defaultDir?: string): Promise<string> {
  return (await open({
    defaultPath: defaultDir,
    multiple: false,
    directory: true,
  })) as string;
}
