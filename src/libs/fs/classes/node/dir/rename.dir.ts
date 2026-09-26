export async function renameDir(
  oldPath: string,
  newPath: string,
): Promise<void> {
  const { rename } = await import('fs/promises');
  await rename(oldPath, newPath);
}
