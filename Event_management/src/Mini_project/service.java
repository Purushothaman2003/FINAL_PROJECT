package Mini_project;
import java.util.*;
import java.sql.*;
public class service {
	private Connection con;
	private int id;
	JDBC jd=new JDBC();
	service(int id)
	{
		this.id=id;
		this.con=jd.getcon();
		
	}
	void report()
	{
		try
		{
			PreparedStatement ps1=con.prepareStatement("select Person_name, Event_name, Event_date from Customer_details  c join Event_Details j on c.Person_id =j.Event_id  where c.person_id=?");
			ps1.setInt(1,id);
			ResultSet rs=ps1.executeQuery();
			while(rs.next())
			{
				System.out.println("Name " +rs.getString(1)+" Event Occuring  "+rs.getString(2)+" on "+rs.getDate(3));
			}
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
		
	}
}
