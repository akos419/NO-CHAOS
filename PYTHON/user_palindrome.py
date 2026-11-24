#user_palindrome

text = str(input("Enter a word of your choice: "))

reversed_text = ''

for alphabet in text:
	reversed_text = alphabet + reversed_text

if reversed_text == text:
	print("is a Palindrome")
else:
	print("not a Palindrome")