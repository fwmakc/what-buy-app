export interface ComparatorInputRow {
  price: number | null;
  amount: number | null;
}

export interface ComparatorRowResult {
  valid: boolean;
  unitPrice: number | null;
  isBest: boolean;
  overpay: number | null;
  overpayPercent: number | null;
}

const EPSILON = 1e-9;

export function parseInputNumber(value: string): number | null {
  const normalized = value.trim().replace(',', '.');
  if (normalized === '') {
    return null;
  }
  const parsed = Number(normalized);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return null;
  }
  return parsed;
}

export function calcUnitPrice(price: number, amount: number): number {
  return price / amount;
}

export function compareRows(rows: ComparatorInputRow[]): ComparatorRowResult[] {
  const results: ComparatorRowResult[] = rows.map(row => {
    const valid = row.price !== null && row.amount !== null;
    return {
      valid,
      unitPrice: valid ? calcUnitPrice(row.price!, row.amount!) : null,
      isBest: false,
      overpay: null,
      overpayPercent: null,
    };
  });

  let best: number | null = null;
  for (const result of results) {
    if (result.valid && (best === null || result.unitPrice! < best)) {
      best = result.unitPrice!;
    }
  }
  if (best === null) {
    return results;
  }

  for (let index = 0; index < results.length; index++) {
    const result = results[index];
    const row = rows[index];
    if (!result || !row) {
      continue;
    }
    if (!result.valid) {
      continue;
    }
    result.isBest = Math.abs(result.unitPrice! - best) < EPSILON;
    if (!result.isBest) {
      result.overpay = (result.unitPrice! - best) * row.amount!;
      result.overpayPercent = (result.unitPrice! / best - 1) * 100;
    }
  }

  return results;
}

export function formatMoney(value: number): string {
  return value.toLocaleString('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function formatUnitPrice(value: number): string {
  return `${value.toLocaleString('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  })} ₽/ед`;
}

export function formatPercent(value: number): string {
  return value.toLocaleString('ru-RU', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}
