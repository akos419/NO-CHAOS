let baseIncome = 5000;
let targetIncome = 30000;

let sales = 0;
let commission = 0;
let totalIncome = 0;

while (totalIncome < targetIncome) {

	sales++;
	commission = 0;

	for (let stage = 1; stage <= 3; stage++) {
       	 if (stage === 1) {
            if (sales >= 5000) {
                commission += 5000 * 0.06;
            }
            else {
                commission += sales * 0.06;
            }
        }
        else if (stage === 2) {
            if (sales > 5000) {
                if (sales >= 10000) {
                    commission += 5000 * 0.08;
                }
                else {
                    commission += (sales - 5000) * 0.08;
                }
            }
        }
        else {

            if (sales > 10000) {
                commission += (sales - 10000) * 0.10;
            }

        }

    }
    totalIncome = baseIncome + commission;
}
console.log("Minimum sales required: $" + sales);

