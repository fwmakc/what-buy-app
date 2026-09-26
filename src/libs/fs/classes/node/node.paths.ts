import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

import type { DefaultPaths } from '../../interfaces/default_paths.interface';

export class NodePaths implements DefaultPaths<string> {
  async app(): Promise<string> {
    return process.cwd();
  }

  async cache(): Promise<string> {
    const app = process.cwd();
    const home = String(os.homedir());

    let programName;

    try {
      const data = fs.readFileSync(path.join(app, 'package.json'), 'utf8');
      const packageInfo = JSON.parse(data);
      const productName = packageInfo.productName;
      const name = packageInfo.name;
      programName = productName || name;
    } catch (e) {
      console.log(e);
      programName = app.split(/\\|\//iu).at(-1);
    }

    return path.join(home, programName, 'cache');
  }

  async data(): Promise<string> {
    const app = process.cwd();
    const home = String(os.homedir());

    let programName;

    try {
      const data = fs.readFileSync(path.join(app, 'package.json'), 'utf8');
      const packageInfo = JSON.parse(data);
      const productName = packageInfo.productName;
      const name = packageInfo.name;
      programName = productName || name;
    } catch (e) {
      console.log(e);
      programName = app.split(/\\|\//iu).at(-1);
    }

    return path.join(home, programName, 'data');
  }

  async documents(): Promise<string> {
    const home = String(os.homedir());
    return path.join(home, 'Documents');
  }

  async home(): Promise<string> {
    return os.homedir();
  }
}
