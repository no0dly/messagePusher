module.exports = {
    filter(customers, exclusionArr, filtersArr) {
        let filteredCustomers = customers;

        filteredCustomers = filteredCustomers.filter( (customer) => {
            let unmatched = true;
            exclusionArr.map( (exclusion) => {
                if (customer.username.indexOf(exclusion) !== -1 ) {
                    unmatched = false;
                }
            });

            return unmatched;
        });

        filteredCustomers = filteredCustomers.filter( (customer) =>{
            if ( customer.days_since_first_trade < filtersArr[0].min || customer.days_since_first_trade > filtersArr[0].max ) {
                return false;
            }
            if ( customer.days_since_last_trade < filtersArr[1].min || customer.days_since_last_trade > filtersArr[1].max ) {
                return false;
            }
            if ( customer.number_of_recent_trades < filtersArr[2].min || customer.number_of_recent_trades > filtersArr[2].max ) {
                return false;
            }
            if ( customer.average_amount_a < filtersArr[3].min || customer.average_amount_a > filtersArr[3].max ) {
                return false;
            }
            if ( customer.average_amount_b < filtersArr[4].min || customer.average_amount_b > filtersArr[4].max ) {
                return false;
            }
            return true;
        });
        console.log('rerender');
        return filteredCustomers;
    }
}
