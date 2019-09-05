import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

public class SessionTest {
	public void getSession(HttpServletRequest req) {
        HttpSession sess = req.getSession();
        System.out.println(sess); /*Session 객체의 주소 값*/
	}
}

@Controller
public class SessionTest {
    @GetMapping(path = "/session")
	public void getSession(HttpSession sess) {
		System.out.println(sess); /*Session 객체의 주소 값*/
	}
}