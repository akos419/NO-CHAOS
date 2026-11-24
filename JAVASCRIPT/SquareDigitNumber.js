for(let num=100; num<=999; num++){
	let numberChecker = num;
	let sum = 0;
	while(numberChecker != 0){
	let digit = numberChecker%10;
	numberChecker = numberChecker/10;
	sum = sum + (digit*digit);
	}
		if(sum==num){
		console.log(num);
		}
	}