//This is the perentage that determine the transaction charge
const transactionCharge = 0.025;
var amountTendered =100000;
console.log("This is what the billed amount is (less trnsaction charges)");
console.log(amountTendered-(amountTendered*transactionCharge));