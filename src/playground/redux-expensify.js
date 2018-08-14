import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description, 
        note, 
        amount, 
        createdAt
    }
});

// REMOVE_EXPENSE
const removeExpense = (
    { 
        id
    } = {}) => ({
        type: 'REMOVE_EXPENSE',
        id
});

// EDIT_EXPENSE
const editExpense = ( id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});


// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
});
// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
});
// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});
// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action ) => {
    switch( action.type ) {
        case 'ADD_EXPENSE': 
            return [
                ...state, 
                action.expense
            ];
        case 'REMOVE_EXPENSE': 
            return state.filter(({ id }) => id !== action.id );
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if ( expense.id === action.id )
                {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } 
                else 
                {
                    return expense;
                }
            });
        default: 
            return state;
    }
};

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = ( state = filtersReducerDefaultState, action  ) => {
    switch( action.type ) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: action.sortBy
            };
            case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default: 
            return state;
    }
};

// Filters Reducer


// Store Creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

// const expense1 = store.dispatch(addExpense({description: 'Rent', amount: 100 }));
// const expense2 = store.dispatch(addExpense({description: 'Coffee', amount: 300 }));
// store.dispatch(removeExpense({ id: expense1.expense.id }));
// store.dispatch(editExpense( expense2.expense.id, { amount: 500 }));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));
store.dispatch(setEndDate());

const demoState = {
    expenses: [{
        id: 'poewjqknfa',
        description: 'January Rent',
        note: 'This was the final payment for that address.',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};
