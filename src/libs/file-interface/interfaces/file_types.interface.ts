interface FileTypeAccept {
  [key: string]: string[];
}

interface FileType {
  description?: string;
  accept?: FileTypeAccept;
}

export type FileTypes = FileType[];

// const fileTypes: FileTypes = [
//   {
//     description: 'Text files',
//     accept: {
//       'text/plain': ['.txt'],
//     },
//   },
// ];
