export const fileHandle: {
  value: FileSystemFileHandle | string | undefined;
  file?: FileSystemFileHandle;
  dir?: FileSystemDirectoryHandle;
} = {
  value: undefined,
  file: undefined,
  dir: undefined,
};
