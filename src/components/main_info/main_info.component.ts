import typescriptLogo from '../../assets/typescript.svg';
import viteLogo from '../../assets/vite.svg';

export default function (): void {
  document.querySelector<HTMLDivElement>(
    '#app #main-info-component',
  )!.innerHTML = `
  <div class="row">
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
  </div>
  <div class="row">
    <h1>Vite + TypeScript</h1>
  </div>
  <div class="row">
    <p class="color-gray">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;
}
