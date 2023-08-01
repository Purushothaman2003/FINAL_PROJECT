package Mini_project;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class validation {

	 public boolean iscorrect(long mob)
	 {
		 String h=String.valueOf(mob);
		 Pattern ptrn = Pattern.compile("(0/91)?[7-9][0-9]{9}");  
		 Matcher m=ptrn.matcher(h);
		 return m.matches();
	 }
	
	public boolean iscorrect(String ch)
	{
		Pattern p=Pattern.compile("[a-zA-Z0-9.-_]*@[a-zA-z0-9]+(.[a-zA-z]+)+");
		Matcher m=p.matcher(ch);
		return m.matches();
	}

	 
}
