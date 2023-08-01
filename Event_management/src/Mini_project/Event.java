package Mini_project;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;


public class Event extends pro{
	private int  event_id;
	private String event_name;
	private String venue;
	private Date date;
	private int Attendees;
	private Connection con;
	JDBC jd=new JDBC();
	
	
	public int getEvent_id() {
		return event_id;
	}
	
	public void setEvent_id(int event_id) {
		this.event_id = event_id;
	}
	
	public String getEvent_name() {
		return event_name;
	}
	
	public void setEvent_name(String event_name) {
		this.event_name = event_name;
	}
	
	public String getVenue() {
		return venue;
	}
	
	public void setVenue(String venue) {
		this.venue = venue;
	}
	
	public Date getDate() {
		return date;
	}
	
	public void setDate(Date date) {
		this.date = date;
	}
	
	public int getAttendees() {
		return Attendees;
	}
	
	public void setAttendees(int attendees) {
		Attendees = attendees;
	}
	
	public Connection getCon() {
		return con;
	}
	
	public void setCon(Connection con) {
		this.con = con;
	}
	
	public JDBC getJd() {
		return jd;
	}
	
	public void setJd(JDBC jd) {
		this.jd = jd;
	}
    void getEventDetails()
	{
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter the id: ");
		event_id = Integer.parseInt(scanner.nextLine());
		System.out.println("Enter name of Event: ");
		event_name = scanner.nextLine();
		if(event_name.equals("marriage"))
		{
			System.out.println("-----Available Services-----");
			System.out.println("Catering");
			System.out.println("Stage Decoration");
			System.out.println("Bridal makeup");
			System.out.println("Welcome Dance");
		}
		else if(event_name.equals("death"))
		{
			
			System.out.println("-----Available Services-----");
			System.out.println("Ice box");
			System.out.println("Hearse Van");
		}
		else if(event_name.equals("Birthday Party"))
		{
			
			System.out.println("-----Available Services-----");
			System.out.println("customized cakes");
			System.out.println("Stage Decoration");
			System.out.println("food");
		}
		System.out.println();
		System.out.println("Enter your venue address: ");
		venue= scanner.nextLine();
		System.out.println("Enter date  format dd-mm-yyyy");
		String dateInput = scanner.next();
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");
		
		try {
			date = dateFormat.parse(dateInput);
		}
		catch (ParseException e) 
		{
			
			e.printStackTrace();
		}
		System.out.println("Enter the number of participants: ");
		Attendees = scanner.nextInt();
		try
		{
			con=jd.getcon();
			PreparedStatement ps1=con.prepareStatement("insert into Event_details values(?,?,?,?,?)");
			java.sql.Date sqldate = new java.sql.Date(date.getTime());
			
			ps1.setInt(1,event_id);
			ps1.setString(2,event_name);
			ps1.setString(3,venue);
			ps1.setDate(4,sqldate);
			ps1.setInt(5, Attendees);
			ps1.executeUpdate();
			System.out.println("Event "+event_name + " is booked on "+sqldate+".");
		}
		catch(Exception e)
		{
			System.out.println("Enter the alternate date to book your event");
		}
	
		
//		scanner.close();
	}
}
