import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set the default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' } );
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action );
    expect(state).toEqual([
        expenses[0],
        expenses[2]
    ]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action );
    expect(state).toEqual([
        expenses[0],
        expenses[1],
        expenses[2]
    ]);
});

test('should add an expense', () => {
    const newExpense = {
        id: '10',
        description: 'Coffee Jar',
        note: '',
        amount: 12000,
        createdAt: moment(0).add(5, 'days').valueOf()
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    };
    const state = expensesReducer(expenses, action );
    expect(state).toEqual([
        ...expenses,
        newExpense
    ]);
});

test('should edit an expense by id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            ...expenses[0],
            description: 'Gum Jar'
        }
    };
    const state = expensesReducer(expenses, action );
    expect(state[0].description).toBe('Gum Jar');
});
 
test('should not edit an expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            ...expenses[0],
            description: 'Gum Jar'
        }
    };
    const state = expensesReducer(expenses, action );
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [ expenses[1] ]
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});