#square_digit_number

for num in range(100,1000):
	number_checker = num
	sum = 0
	while(number_checker != 0):
		digit = number_checker%10
		number_checker /= 10
		sum = sum + (digit*digit)	
	if(sum == num):
		print(num)