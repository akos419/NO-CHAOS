import java.util.Scanner;

public class AverageSentinel{
	public static void main(String[] args){
	Scanner input = new Scanner(System.in);

	System.out.println("Enter your first score(-1 to stop): ");
	int score = input.nextInt();

	double average = 0;
	int sum = 0;
	int count = 0;

	while(score != -1){
	count++;
	sum += score;
	average = (double) sum / count;
	System.out.printf("The average is %.3f%n", average);

	System.out.println("Enter your next score: ");
	score = input.nextInt();
	}
	}
}