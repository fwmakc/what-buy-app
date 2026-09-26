interface FileType {
  description?: string;
  mime?: string;
  extensions: string[];
}

export type FileTypes = FileType[];
