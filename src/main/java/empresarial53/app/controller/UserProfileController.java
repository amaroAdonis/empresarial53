package empresarial53.app.controller;

import empresarial53.app.dao.UserDao;
import empresarial53.app.models.UserProfile;
import empresarial53.app.service.UserProfileService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;

@RestController
@RequestMapping("/userprofile")
public class UserProfileController {

    @Autowired
    UserDao userDao;

    @Autowired
    UserProfileService userProfileService;

    @GetMapping("")
    public UserProfile getUserProfile(HttpServletRequest httpServletRequest) throws SQLException {
        var user = httpServletRequest.getUserPrincipal();
        var userEmail = user.getName();
        return userProfileService.getUserProfile(userEmail);
    }


}
