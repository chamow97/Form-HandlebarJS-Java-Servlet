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

import org.json.JSONException;
import org.json.JSONObject;

import jdk.nashorn.internal.parser.JSONParser;
import sun.security.provider.MD5;

/**
 * Servlet implementation class FormServlet
 */
@WebServlet("/FormServlet")
public class FormServlet extends HttpServlet {
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
		BufferedReader br = new BufferedReader(new InputStreamReader(request.getInputStream()));
		String json = "";
		if(br != null) {
			json = br.readLine();
		}
		System.out.print(json);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
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
			// JDBC driver name and database URL
		      final String DRIVER = "com.mysql.jdbc.Driver";  
		      final String DB_URL="jdbc:mysql://localhost/TEST";
		      PrintWriter out = response.getWriter();
		      //  Database credentials
		      final String USER = "root";
		      final String PASS = "root";
		      
		      try {
		          // Register JDBC driver
		          Class.forName("com.mysql.jdbc.Driver");

		          Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);

		          Statement stmt = conn.createStatement();
		          String sql;
		          sql = "SELECT * FROM Employees WHERE userEmail = '" + userEmail + "';";
		          ResultSet rs = stmt.executeQuery(sql);
		          response.setContentType("text/html;charset=UTF-8");
		          if(!rs.next())
		          {
		        	  sql = "INSERT INTO Employees VALUES('" + userName + "', '" + userEmail + "', '" + passWord + "');";
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
