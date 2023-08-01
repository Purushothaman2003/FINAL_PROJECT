package Mini_project;
import java.util.*;
import java.sql.*;

public class customer extends validation{
	
	private int id;
	private String name;
	private long mobile_number;
	private String email;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	private Connection con;
	JDBC jd=new JDBC();
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getMobile_number() {
		return mobile_number;
	}
	public void setMobile_number(long mobile_number) {
		this.mobile_number = mobile_number;
	}
	public customer() {
		
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter the id :");
		this.id=sc.nextInt();
		System.out.println("Enter your name:");
		this.name=sc.next();
		System.out.println("Enter your mobile number");
		this.mobile_number=sc.nextLong();
		if(!iscorrect(mobile_number))
		{
			System.out.println("The mobile number is not valid");
			System.exit(0);
		}
		System.out.println("Enter the Email:");
		this.email=sc.next();
		if(!iscorrect(email))
		{
			System.out.println("The email is incorrect formate");
			System.exit(0);
		}
		try
		{
			con=jd.getcon();
			PreparedStatement ps1=con.prepareStatement("insert into Customer_details values(?,?,?,?)");
			ps1.setInt(1,id);
			ps1.setString(2, name);
			ps1.setLong(3,mobile_number);
			ps1.setString(4,email);
			ps1.executeUpdate();
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
	}
	
//	sc.close();
	

}
