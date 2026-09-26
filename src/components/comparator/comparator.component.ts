import {
  compareRows,
  formatMoney,
  formatPercent,
  formatUnitPrice,
  parseInputNumber,
  type ComparatorInputRow,
  type ComparatorRowResult,
} from './helpers/comparator.helper';

const MIN_ROWS = 2;
const INITIAL_ROWS = 3;

export default function (): void {
  const container = document.querySelector<HTMLDivElement>('#app #comparator-component');
  if (!container) {
    return;
  }

  container.innerHTML = `
    <h1>Что выгоднее?</h1>
    <div id="comparator-rows" class="column"></div>
    <div class="row">
      <button id="comparator-add" type="button" title="Добавить товар">+</button>
    </div>
  `;

  const rowsElement = container.querySelector<HTMLDivElement>('#comparator-rows')!;
  const addButton = container.querySelector<HTMLButtonElement>('#comparator-add')!;

  const createRow = (): HTMLElement => {
    const row = document.createElement('div');
    row.className = 'comparator-row';
    row.innerHTML = `
      <div class="comparator-row-fields">
        <input
          class="input comparator-input"
          data-field="price"
          type="number"
          min="0"
          step="any"
          inputmode="decimal"
          placeholder="Цена, ₽"
        />
        <input
          class="input comparator-input"
          data-field="amount"
          type="number"
          min="0"
          step="any"
          inputmode="decimal"
          placeholder="Количество"
        />
        <button class="comparator-remove" type="button" title="Удалить строку" aria-label="Удалить строку"><span>×</span></button>
      </div>
      <div class="comparator-row-result"></div>
    `;
    return row;
  };

  const getRowElements = (): HTMLElement[] => Array.from(rowsElement.querySelectorAll<HTMLElement>('.comparator-row'));

  const updateRemoveButtons = (): void => {
    const removable = getRowElements().length > MIN_ROWS;
    rowsElement.querySelectorAll<HTMLButtonElement>('.comparator-remove').forEach(button => {
      button.disabled = !removable;
    });
  };

  const collectRows = (): ComparatorInputRow[] =>
    getRowElements().map(row => {
      const price = row.querySelector<HTMLInputElement>('[data-field="price"]')!;
      const amount = row.querySelector<HTMLInputElement>('[data-field="amount"]')!;
      return {
        price: parseInputNumber(price.value),
        amount: parseInputNumber(amount.value),
      };
    });

  const renderRowResult = (result: ComparatorRowResult, validCount: number): string => {
    if (!result.valid || result.unitPrice === null) {
      return '';
    }
    const overpay =
      result.isBest || result.overpay === null
        ? ''
        : `<span class="comparator-overpay">+${formatMoney(result.overpay)} ₽ (+${formatPercent(
            result.overpayPercent!,
          )}%)</span>`;
    const badge = result.isBest && validCount > 1 ? '<span class="comparator-best">выгодно</span>' : '';
    return `<span class="comparator-unit-price">${formatUnitPrice(result.unitPrice)}</span>${badge}${overpay}`;
  };

  const recalc = (): void => {
    const results = compareRows(collectRows());
    const validCount = results.filter(result => result.valid).length;

    getRowElements().forEach((row, index) => {
      const result = results[index];
      row.classList.toggle('best', result?.isBest === true && validCount > 1);
      row.querySelector<HTMLElement>('.comparator-row-result')!.innerHTML = result
        ? renderRowResult(result, validCount)
        : '';
    });

    updateRemoveButtons();
  };

  addButton.addEventListener('click', () => {
    const row = createRow();
    rowsElement.appendChild(row);
    row.querySelector<HTMLInputElement>('input')!.focus();
    recalc();
  });

  rowsElement.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const button = target.closest<HTMLButtonElement>('.comparator-remove');
    if (!button || button.disabled) {
      return;
    }
    if (getRowElements().length <= MIN_ROWS) {
      return;
    }
    button.closest<HTMLElement>('.comparator-row')!.remove();
    recalc();
  });

  rowsElement.addEventListener('input', recalc);

  for (let index = 0; index < INITIAL_ROWS; index++) {
    rowsElement.appendChild(createRow());
  }
  recalc();
}
