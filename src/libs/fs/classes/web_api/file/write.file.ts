export async function writeFile(
  fileHandle: FileSystemFileHandle | null,
  content: string,
): Promise<void> {
  if (!fileHandle) {
    return;
  }

  const writable = await fileHandle.createWritable();

  try {
    await writable.write(content);
  } finally {
    await writable.close();
  }
}
