export async function copyFile(
  oldFilePath: string,
  newFilePath: string,
): Promise<void> {
  const { copyFile: copy } = await import('fs/promises');
  await copy(oldFilePath, newFilePath);
}
