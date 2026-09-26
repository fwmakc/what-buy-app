export async function readFile(
  fileHandle: FileSystemFileHandle | null,
): Promise<string> {
  if (!fileHandle) {
    return '';
  }

  const file = await fileHandle.getFile();
  return await file.text();
}
