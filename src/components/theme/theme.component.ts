import { applyTheme, getNextTheme, loadTheme, saveTheme, themeLabel, type Theme } from './helpers/theme.helper';

export default function (): void {
  const container = document.querySelector<HTMLDivElement>('#app #theme-component');
  if (!container) {
    return;
  }

  container.innerHTML = `
    <button id="theme-toggle" type="button" title="Переключить тему"></button>
  `;

  const button = container.querySelector<HTMLButtonElement>('#theme-toggle')!;
  let theme: Theme = loadTheme();

  const update = (): void => {
    button.textContent = `Тема: ${themeLabel(theme)}`;
  };

  button.addEventListener('click', () => {
    theme = getNextTheme(theme);
    applyTheme(theme);
    saveTheme(theme);
    update();
  });

  update();
}
