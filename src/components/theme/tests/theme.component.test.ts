import { beforeEach, describe, expect, it } from 'vitest';
import ThemeComponent from '../theme.component';

const query = <T extends Element>(selector: string): T => document.querySelector<T>(selector)!;

describe('theme.component', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    document.body.innerHTML = '<div id="app"><div id="theme-component" class="theme-bar"></div></div>';
  });

  it('renders the current theme label', () => {
    ThemeComponent();

    expect(query<HTMLButtonElement>('#theme-toggle').textContent).toBe('Тема: Авто');
    expect(document.documentElement.hasAttribute('data-theme')).toBe(false);
  });

  it('cycles themes on click and persists the choice', () => {
    ThemeComponent();
    const button = query<HTMLButtonElement>('#theme-toggle');

    button.click();
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(button.textContent).toBe('Тема: Светлая');

    button.click();
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(button.textContent).toBe('Тема: Тёмная');

    button.click();
    expect(document.documentElement.hasAttribute('data-theme')).toBe(false);
    expect(button.textContent).toBe('Тема: Авто');
    expect(localStorage.getItem('theme')).toBe('auto');
  });

  it('restores the saved theme from storage', () => {
    localStorage.setItem('theme', 'light');

    ThemeComponent();

    expect(query<HTMLButtonElement>('#theme-toggle').textContent).toBe('Тема: Светлая');
  });
});
