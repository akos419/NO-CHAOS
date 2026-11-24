#vowel_consonant_counter

text = str(input("Enter text of your choice: "))

vowel = 'aeiou'
consonant = 'qwrtypsdfghjklzxcvbnm'
vowel_count = 0
consonant_count = 0
vowel_checker = ''
consonant_checker = ''

for letter in text:
	for alphabet in vowel:
		if letter == alphabet and letter not in vowel_checker:
			vowel_count += 1
			vowel_checker = letter + vowel_checker
	for character in consonant:
		if letter==character and letter not in consonant_checker:
			consonant_count += 1
			consonant_checker = letter + consonant_checker

print(f"There are {vowel_count} vowels and {consonant_count} consonants in the string")
	