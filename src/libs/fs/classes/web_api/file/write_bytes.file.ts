export async function writeBytesFile(
  fileHandle: FileSystemFileHandle | null,
  content: Uint8Array,
): Promise<void> {
  if (!fileHandle) {
    return;
  }

  const chunkSize: number = 65536;

  const writable = await fileHandle.createWritable();

  try {
    const safeContent = new Uint8Array(content.buffer.slice(0));

    for (let offset = 0; offset < safeContent.length; offset += chunkSize) {
      const chunk = safeContent.slice(
        offset,
        Math.min(offset + chunkSize, safeContent.length),
      );
      await writable.write(chunk);
    }
  } finally {
    await writable.close();
  }
}
