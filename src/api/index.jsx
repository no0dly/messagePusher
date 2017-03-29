module.exports = {
    filter(customers, exclusionArr) {
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

        return filteredCustomers;
    }
}
