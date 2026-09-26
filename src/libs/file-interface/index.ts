import type { FileOptions } from './interfaces/file_options.interface';
import type { FileReader } from './interfaces/file_reader.interface';
import type { FileTypes } from './interfaces/file_types.interface';
import type { FileWriter } from './interfaces/file_writer.interface';
import { ReadFileByBrowser } from './read/classes/read_file_by_browser';
import { ReadFileByBrowserApi } from './read/classes/read_file_by_browser_api';
import { ReadFileByElectron } from './read/classes/read_file_by_electron';
import { ReadFileByFetch } from './read/classes/read_file_by_fetch';
import { readFile } from './read/function/read_file';
import { WriteFileByBrowser } from './write/classes/write_file_by_browser';
import { WriteFileByBrowserApi } from './write/classes/write_file_by_browser_api';
import { WriteFileByElectron } from './write/classes/write_file_by_electron';
import { writeFile } from './write/function/write_file';

export {
  FileOptions,
  FileReader,
  FileTypes,
  FileWriter,
  ReadFileByBrowser,
  ReadFileByBrowserApi,
  ReadFileByFetch,
  ReadFileByElectron,
  readFile,
  WriteFileByBrowser,
  WriteFileByBrowserApi,
  WriteFileByElectron,
  writeFile,
};
