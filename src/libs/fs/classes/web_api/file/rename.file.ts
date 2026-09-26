export async function renameFile(
  fileHandle: FileSystemFileHandle,
  newFileHandle: FileSystemFileHandle,
): Promise<FileSystemFileHandle | undefined> {
  const file = await fileHandle.getFile();
  const content = await file.arrayBuffer();

  const writable = await newFileHandle.createWritable();

  try {
    await writable.write(content);
  } finally {
    await writable.close();
  }

  return newFileHandle;
}
