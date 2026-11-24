import java.util.Scanner;

public class EvenIndexString{
	public static void main(String[] args){
	Scanner input = new Scanner(System.in);

	System.out.println("Enter a word of your choice: ");
	String text = input.nextLine();

	for(int letter = 0; letter<text.length(); letter++){
		if(letter%2 == 0){
		System.out.println(text[letter]);
		}
	}
	}
}