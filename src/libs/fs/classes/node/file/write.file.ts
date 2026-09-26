export async function writeFile(
  fileName: string,
  content: string,
): Promise<void> {
  const { writeFile: write } = await import('fs/promises');
  await write(fileName, content, 'utf-8');
}
