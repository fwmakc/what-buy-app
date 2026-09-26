export async function readBytesFile(fileName: string): Promise<Uint8Array> {
  const { readFile: read } = await import('fs/promises');
  return await read(fileName);
}
