import { setupCounter } from './helpers/setup_counter.helper';

export default function (): void {
  document.querySelector<HTMLDivElement>('#app #counter-component')!.innerHTML =
    `
  <button id="counter" type="button"></button>
`;

  setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
}
