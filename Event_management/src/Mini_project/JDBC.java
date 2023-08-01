package Mini_project;
import java.sql.*;

public class JDBC {

	
	String url="jdbc:mysql://localhost:3306/event_management";
	String userName="root";
	String password="8220132524";
	private Connection con;
	JDBC()
	{
		try
		{
		Class.forName("com.mysql.cj.jdbc.Driver");
		this. con=DriverManager.getConnection(url,userName,password);
		}
		catch(Exception e)
		{
			System.out.println(e);
		
		}
		
	}
	public Connection getcon()
	{
		return con;
	}
	
}
