export async function renameFile(
  oldFilePath: string,
  newFilePath: string,
): Promise<void> {
  const { rename } = await import('fs/promises');
  await rename(oldFilePath, newFilePath);
}
