var customerName = 'bob';
const leastFavoriteCustomer = 'Henry';

function upperCaseCustomerName(name){
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer(){
bestCustomer = 'not bob';

}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'bob';
    return leastFavoriteCustomer;
}