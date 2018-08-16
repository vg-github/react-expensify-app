import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpenseList = (props) => (
    <div>
        <p>You have {props.expenses.length} expenses, totalling: {numeral(getExpensesTotal(props.expenses)/100).format('$0,0.00')}</p>
        {props.expenses.length == 0 && <p>No expenses available.</p>}
        {props.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense} />)}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseList);