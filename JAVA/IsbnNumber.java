import java.util.Scanner;

public class IsbnNumber{
	public static void main(String[] args){
	Scanner input = new Scanner(System.in);

	System.out.println("Enter your ISBN number: ");
	String number = input.nextLine();

	number = (int) number;
	}
}