module.exports = {
    filter(customers, exclusionArr, filtersObj) {
        let filteredCustomers = customers;

        filteredCustomers = filteredCustomers.filter( (customer) => {
            let unmatched = true;
            exclusionArr.map( (exclusion) => {
                if (customer.username.indexOf(exclusion) !== -1 ) {
                    unmatched = false;
                }
                return true;
            });

            return unmatched;
        });

        filteredCustomers = filteredCustomers.filter( (customer) =>{


            for( let filter in customer ) {
                if (filter === "username") {continue};

                if ( customer[filter] < filtersObj[filter].min || customer[filter] > filtersObj[filter].max ) {
                    return false;
                }
            }

            return true;
        });
        return filteredCustomers;
    },
    fetchFormData(form) {
        const usernamesQuery  = document.querySelectorAll('.customer');
        let data              = {};
        let usernamesArr      = [];

        for ( let i=0; i < usernamesQuery.length; i++) {
            usernamesArr.push(usernamesQuery[i].innerText);
        }
        data = {
            message_1: form.messageOne.value,
            message_2: form.messageTwo.value,
            usernames: usernamesArr
        }
        return data;
    },
    storageExclusionsSet(arr) {
        localStorage.setItem( 'exclusions', JSON.stringify(arr));
    },
    storageExclusionsGet() {
        const exclusionsArr = JSON.parse(localStorage.getItem('exclusions'));

        if(JSON.parse(localStorage.getItem('exclusions')) == null) return [];

        return exclusionsArr;
    },
    sortFilters(filtersArr) {
        let sortedFilters = [];
        Object.keys(filtersArr).map((value)=>{
        	sortedFilters.push([value,filtersArr[value].order]);
        });
        sortedFilters.sort(function(a, b) {
            return a[1] - b[1];
        });

        return sortedFilters;
    }
}
