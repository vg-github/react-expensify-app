import moment from 'moment';
import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const result = getExpensesTotal([]);
    expect(result).toBe(0);
});

test('should calculate expenses total', () => {
    const result = getExpensesTotal(expenses);
    expect(result).toBe(114195);
});