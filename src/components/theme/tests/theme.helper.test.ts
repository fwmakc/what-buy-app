import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { applyTheme, getNextTheme, loadTheme, saveTheme, themeLabel } from '../helpers/theme.helper';

describe('getNextTheme', () => {
  it('cycles auto -> light -> dark -> auto', () => {
    expect(getNextTheme('auto')).toBe('light');
    expect(getNextTheme('light')).toBe('dark');
    expect(getNextTheme('dark')).toBe('auto');
  });
});

describe('themeLabel', () => {
  it('returns russian labels', () => {
    expect(themeLabel('auto')).toBe('Авто');
    expect(themeLabel('light')).toBe('Светлая');
    expect(themeLabel('dark')).toBe('Тёмная');
  });
});

describe('applyTheme', () => {
  afterEach(() => {
    document.documentElement.removeAttribute('data-theme');
  });

  it('sets data-theme attribute for explicit themes', () => {
    applyTheme('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');

    applyTheme('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('removes data-theme attribute for auto', () => {
    applyTheme('dark');
    applyTheme('auto');
    expect(document.documentElement.hasAttribute('data-theme')).toBe(false);
  });
});

describe('loadTheme/saveTheme', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('defaults to auto', () => {
    expect(loadTheme()).toBe('auto');
  });

  it('persists a valid theme', () => {
    saveTheme('dark');
    expect(loadTheme()).toBe('dark');
  });

  it('falls back to auto for invalid stored value', () => {
    localStorage.setItem('theme', 'purple');
    expect(loadTheme()).toBe('auto');
  });
});
