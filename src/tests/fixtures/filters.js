import moment from 'moment';

const filters = {
    text: '',
    sortyBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const altFilters = {
    text: 'bill',
    sortyBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
};

export { filters, altFilters };