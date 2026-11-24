#average_sentinel

score = int(input("Enter your first score(-1 to stop): "))

sum = 0
average = 0
count = 0

while score != -1:
	count += 1
	sum += score
	average = sum/count
	print(f"Your average is {average:.3f}")
	score = int(input("Enter your next score(-1 to stop): "))

