public class SalesCommission{
	public static void main(String[] args){

	double baseIncome = 5000;
	double targetIncome = 30000;

	int sales = 0;
	double commission = 0;
	double totalIncome = 0;

	while(totalIncome<targetIncome){
		sales++;
		commission = 0;

		for(int stage = 1;stage<=3;stage++){
			if(stage==1){
				if(sales>=5000){
					commission += 5000*0.06;
				}
				else{
				commission += sales*0.06;
			}
			}
			else if(stage==2){
				if(sales>5000){
					if(sales>=10000){
						commission += 0.08*5000;
					}
					else{
						commission += (sales-5000)*0.08;
					}
				}
			}
			else{
				if(sales>10000){	
					commission += (sales-10000)*0.10;
				}
			}
		}
	totalIncome = baseIncome + commission;
	}
	System.out.printf("Minimum sales required is %d", sales);
	}
}