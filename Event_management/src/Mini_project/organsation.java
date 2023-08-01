package Mini_project;
import java.util.*;

public class organsation {
	
	public static void main(String [] args)
	{
		int option=1;
		Scanner sc=new Scanner(System.in);
		System.out.println("Welcome to Online Event Management System.....>>");
		while(true)
		{
			System.out.println("Enter 1--->add Customer Details\nEnter 2---> add Event_Details\nEnter 3---> To check details\nEnter 4--->Exit The Application");
			option=sc.nextInt()	;
			if(option==1)
			{
				System.out.println("---------Enter your Details--------");
				customer s=new customer();
				System.out.println("Your details is successfully added.");
				System.out.println("-------------------------------------");
				System.out.println();
			}
			else if(option==2)
			{
				System.out.println("--------About Event Details--------");
				Event e=new Event();
				e.getEventDetails();
				System.out.println("-------------------------------------");
				System.out.println();
			}
			else if(option==3)
			{
				System.out.println("--------Report Generation--------");
				Scanner s=new Scanner(System.in);
				System.out.println("Enter the id");
				int h=s.nextInt();
				service sr=new service(h);
				sr.report();
				System.out.println("-------------------------------------");
				System.out.println();
			}
			else if(option==4)
			{
				System.out.print("Thank You For Visting....");
				System.exit(0);
			}
			else 
			{
				System.out.println("Invalid input");
			}
			
			
		}
	}
	

}
