import { beforeEach, describe, expect, it } from 'vitest';
import ComparatorComponent from '../comparator.component';

const query = <T extends Element>(selector: string): T => document.querySelector<T>(selector)!;

const queryAll = <T extends Element>(selector: string): T[] => Array.from(document.querySelectorAll<T>(selector));

const setInput = (row: HTMLElement, field: string, value: string): void => {
  const input = row.querySelector<HTMLInputElement>(`[data-field="${field}"]`)!;
  input.value = value;
  input.dispatchEvent(new Event('input', { bubbles: true }));
};

describe('comparator.component', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="app"><div id="comparator-component" class="card"></div></div>';
  });

  it('renders exactly three rows initially', () => {
    ComparatorComponent();

    expect(queryAll('.comparator-row')).toHaveLength(3);
  });

  it('adds a row on add button click', () => {
    ComparatorComponent();

    query<HTMLButtonElement>('#comparator-add').click();

    expect(queryAll('.comparator-row')).toHaveLength(4);
  });

  it('removes a row on remove button click', () => {
    ComparatorComponent();

    query<HTMLButtonElement>('#comparator-add').click();
    queryAll<HTMLButtonElement>('.comparator-remove')[3]!.click();

    expect(queryAll('.comparator-row')).toHaveLength(3);
  });

  it('disables remove buttons when minimum rows reached', () => {
    ComparatorComponent();

    queryAll<HTMLButtonElement>('.comparator-remove')[0]!.click();

    expect(queryAll('.comparator-row')).toHaveLength(2);
    queryAll<HTMLButtonElement>('.comparator-remove').forEach(button => expect(button.disabled).toBe(true));
  });

  it('shows unit price, best badge and overpay under each row', () => {
    ComparatorComponent();

    const rows = queryAll<HTMLElement>('.comparator-row');
    setInput(rows[0]!, 'price', '90');
    setInput(rows[0]!, 'amount', '800');
    setInput(rows[1]!, 'price', '100');
    setInput(rows[1]!, 'amount', '1000');

    const resultLines = queryAll<HTMLElement>('.comparator-row-result');
    expect(resultLines).toHaveLength(3);

    expect(resultLines[0]!.textContent).toContain('0,1125 ₽/ед');
    expect(resultLines[0]!.textContent).toContain('+10,00');
    expect(resultLines[0]!.textContent).toContain('+12,5%');

    expect(resultLines[1]!.textContent).toContain('0,10 ₽/ед');
    expect(resultLines[1]!.textContent).toContain('выгодно');

    expect(resultLines[2]!.textContent).toBe('');
    expect(queryAll('.comparator-row')[1]!.classList.contains('best')).toBe(true);
  });
});
