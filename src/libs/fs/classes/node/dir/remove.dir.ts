export async function removeDir(dirPath: string): Promise<void> {
  const { rm } = await import('fs/promises');
  await rm(dirPath, { recursive: true });
}
