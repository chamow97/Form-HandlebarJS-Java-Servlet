package FormServlet;

import java.sql.Statement;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONException;
import org.json.JSONObject;

import jdk.nashorn.internal.parser.JSONParser;
import sun.security.provider.MD5;

/**
 * Servlet implementation class FormServlet
 */
@WebServlet("/FormServlet")
public class FormServlet extends HttpServlet {
	final String DRIVER = "com.mysql.jdbc.Driver";  
    final String DB_URL="jdbc:mysql://localhost/TEST";
    //  Database credentials
    final String USER = "root";
    final String PASS = "root";
	private static final long serialVersionUID = 1L;
 
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FormServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String action = request.getParameter("action");
		if(action.equals("login"))
		{
			String userEmail = request.getParameter("userEmail");
			String userPassword = request.getParameter("userPassword");		    
		      try {
		          // Register JDBC driver
		          Class.forName("com.mysql.jdbc.Driver");

		          Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
		          
		          Statement stmt = conn.createStatement();
		          String sql;
		          sql = "SELECT userName FROM Employees WHERE userEmail = '" + userEmail + "' AND userPassword = '" + userPassword + "';";
		          ResultSet rs = stmt.executeQuery(sql);
		          response.setContentType("text/html;charset=UTF-8");
		          if(userEmail.length() == 0 || userPassword.length() == 0) {
		        	  response.getWriter().write("-1");
		          }
		          else if(!rs.next())
		          {
		        	  response.getWriter().write("0");
		          }
		          else
		          {
		        	  try
		        	  {
		        		  String userName = rs.getString(1);
		        		  HttpSession session = request.getSession();
			        	  session.setAttribute("user", userName);
			        	  response.setStatus(200);
			        	  response.getWriter().write("1");
		        	  }
		        	  catch(Exception e) {
		        		  
		        	  }
		        	  
		          }

		          // Clean-up environment
		          rs.close();
		          stmt.close();
		          conn.close();
		       } catch(SQLException se) {
		          //Handle errors for JDBC
		          se.printStackTrace();
		       } catch(Exception e) {
		          //Handle errors for Class.forName
		          e.printStackTrace();
		       }
		}
		else if(action.equals("sessionCheck")) {
			try{
				HttpSession session = request.getSession();
				response.setStatus(200);
				String sessionName = "user";
				String userName = (String)session.getAttribute(sessionName);
				response.getWriter().write(userName);
				
			}
			catch(Exception e) {
				response.setStatus(200);
				response.getWriter().write("0");
			}
			
		}
		else if(action.equals("logout")) {
			HttpSession session = request.getSession();
			session.invalidate();
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
//		doGet(request, response);
		// Get the data from the response
		BufferedReader br = new BufferedReader(new InputStreamReader(request.getInputStream()));
        String json = "";
        if(br != null){
            json = br.readLine();
        }
        try {
			JSONObject jObj = new JSONObject(json);
			String userName = jObj.getString("userName");
			String userEmail = jObj.getString("userEmail");
			String passWord = jObj.getString("userPassword");
			char userGender = jObj.getString("userGender").charAt(0);
			// JDBC driver name and database URL
				PrintWriter out = response.getWriter();
		          
		      try {
		          // Register JDBC driver
		          Class.forName("com.mysql.jdbc.Driver");

		          Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
		          Statement stmt = conn.createStatement();
		          String sql;
		          sql = "SELECT * FROM Employees WHERE userEmail = '" + userEmail + "';";
		          ResultSet rs = stmt.executeQuery(sql);
		          response.setContentType("text/html;charset=UTF-8");
		          if(userName.length() == 0 || userEmail.length() == 0 || passWord.length() == 0) {
		        	  response.getWriter().write("-1");
		          }
		          else if(!rs.next())
		          {
		        	  sql = "INSERT INTO Employees VALUES('" + userName + "', '" + userEmail + "', '" + passWord + "', '" + userGender + "');";
		        	  stmt.executeUpdate(sql);
		        	  response.getWriter().write("1");
		          }
		          else
		          {
		        	  response.setStatus(200);
		        	  response.getWriter().write("0");
		          }

		          // Clean-up environment
		          rs.close();
		          stmt.close();
		          conn.close();
		       } catch(SQLException se) {
		          //Handle errors for JDBC
		          se.printStackTrace();
		       } catch(Exception e) {
		          //Handle errors for Class.forName
		          e.printStackTrace();
		       }

			
			
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
//        System.out.println(json);
	}

}


