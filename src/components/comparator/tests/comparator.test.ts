import { describe, expect, it } from 'vitest';
import {
  calcUnitPrice,
  compareRows,
  formatMoney,
  formatPercent,
  formatUnitPrice,
  parseInputNumber,
} from '../helpers/comparator.helper';

describe('parseInputNumber', () => {
  it('parses a plain number', () => {
    expect(parseInputNumber('90')).toBe(90);
  });

  it('parses a decimal number with comma', () => {
    expect(parseInputNumber('90,5')).toBe(90.5);
  });

  it('parses a decimal number with dot', () => {
    expect(parseInputNumber('0.5')).toBe(0.5);
  });

  it('returns null for empty string', () => {
    expect(parseInputNumber('')).toBeNull();
    expect(parseInputNumber('   ')).toBeNull();
  });

  it('returns null for zero and negative values', () => {
    expect(parseInputNumber('0')).toBeNull();
    expect(parseInputNumber('-5')).toBeNull();
  });

  it('returns null for non-numeric strings', () => {
    expect(parseInputNumber('abc')).toBeNull();
  });
});

describe('calcUnitPrice', () => {
  it('divides price by amount', () => {
    expect(calcUnitPrice(90, 800)).toBe(0.1125);
    expect(calcUnitPrice(100, 1000)).toBe(0.1);
  });
});

describe('compareRows', () => {
  it('marks the cheapest row as best and calculates overpay', () => {
    const results = compareRows([
      { price: 90, amount: 800 },
      { price: 100, amount: 1000 },
    ]);

    expect(results[0].valid).toBe(true);
    expect(results[0].isBest).toBe(false);
    expect(results[0].unitPrice).toBeCloseTo(0.1125, 10);
    expect(results[0].overpay).toBeCloseTo(10, 10);
    expect(results[0].overpayPercent).toBeCloseTo(12.5, 10);

    expect(results[1].valid).toBe(true);
    expect(results[1].isBest).toBe(true);
    expect(results[1].overpay).toBeNull();
  });

  it('handles empty rows list', () => {
    const results = compareRows([]);

    expect(results).toHaveLength(0);
  });

  it('marks invalid rows and ignores them', () => {
    const results = compareRows([
      { price: null, amount: 800 },
      { price: 100, amount: null },
      { price: 50, amount: 500 },
    ]);

    expect(results[0].valid).toBe(false);
    expect(results[0].unitPrice).toBeNull();
    expect(results[1].valid).toBe(false);
    expect(results[2].isBest).toBe(true);
  });

  it('marks all tied rows as best', () => {
    const results = compareRows([
      { price: 100, amount: 1000 },
      { price: 50, amount: 500 },
    ]);

    expect(results[0].isBest).toBe(true);
    expect(results[1].isBest).toBe(true);
  });

  it('shows a single valid row without overpay', () => {
    const results = compareRows([{ price: 90, amount: 800 }]);

    expect(results[0].isBest).toBe(true);
    expect(results[0].overpay).toBeNull();
  });
});

describe('formatting', () => {
  it('formats money with two decimals', () => {
    expect(formatMoney(10)).toBe('10,00');
    expect(formatMoney(2.5)).toBe('2,50');
  });

  it('formats unit price with up to four decimals', () => {
    expect(formatUnitPrice(0.1125)).toBe('0,1125 ₽/ед');
    expect(formatUnitPrice(0.1)).toBe('0,10 ₽/ед');
  });

  it('formats percent with one decimal', () => {
    expect(formatPercent(12.5)).toBe('12,5');
  });
});
