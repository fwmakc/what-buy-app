export async function selectDirDialog(
  defaultDir?: FileSystemDirectoryHandle | string,
): Promise<FileSystemDirectoryHandle> {
  return (await (window as any).showDirectoryPicker({
    startIn: defaultDir,
  })) as FileSystemDirectoryHandle;
}
