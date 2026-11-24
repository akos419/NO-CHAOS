public class SquareDigitsNumber{
	public static void main(String[] args){

	for(int num=100; num<=999; num++){
		int numberChecker = num;
		int sum = 0;

		while(numberChecker!=0){
		int digit = numberChecker%10;
		numberChecker = numberChecker/10;
		sum = sum + (digit*digit);
		}
		if(sum==num){
		System.out.println(num);
		}
	}
	}
}