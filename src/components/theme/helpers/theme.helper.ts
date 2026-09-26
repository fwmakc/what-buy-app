export type Theme = 'auto' | 'light' | 'dark';

const STORAGE_KEY = 'theme';

const THEME_CYCLE: Theme[] = ['auto', 'light', 'dark'];

export function getNextTheme(theme: Theme): Theme {
  const index = THEME_CYCLE.indexOf(theme);
  return THEME_CYCLE[(index + 1) % THEME_CYCLE.length]!;
}

export function themeLabel(theme: Theme): string {
  switch (theme) {
    case 'light':
      return 'Светлая';
    case 'dark':
      return 'Тёмная';
    case 'auto':
      return 'Авто';
  }
}

export function applyTheme(theme: Theme): void {
  if (theme === 'auto') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }
}

export function loadTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'light' || stored === 'dark' ? stored : 'auto';
  } catch {
    return 'auto';
  }
}

export function saveTheme(theme: Theme): void {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Хранилище недоступно — тема просто не сохранится
  }
}
