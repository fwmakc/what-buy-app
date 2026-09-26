export async function readBytesFile(
  fileHandle: FileSystemFileHandle | null,
): Promise<Uint8Array> {
  if (!fileHandle) {
    return new Uint8Array();
  }

  const file = await fileHandle.getFile();
  const arrayBuffer = await file.arrayBuffer();
  return new Uint8Array(arrayBuffer);
}
