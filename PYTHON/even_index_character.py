#even_index_character

text = str(input("Enter text of your choice: "))

length = len(text)

for index in range(0,length):
	for letter in text:
		if index%2==0:
			print(letter)