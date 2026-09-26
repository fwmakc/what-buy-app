import { APP } from '../../libs/app-info';

export default function (): void {
  const keys: string[] = [];

  Object.entries(APP)?.forEach(([key, value]) => {
    if (!value) {
      return;
    }
    keys.push(key);
  });

  document.querySelector<HTMLDivElement>(
    '#app #app-info-component',
  )!.innerHTML = keys.join(', ');
}
