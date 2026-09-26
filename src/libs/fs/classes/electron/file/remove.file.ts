export async function removeFile(fileName: string): Promise<void> {
  const { unlink } = await import('fs/promises');
  await unlink(fileName);
}
