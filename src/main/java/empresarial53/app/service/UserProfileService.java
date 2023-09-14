package empresarial53.app.service;

import empresarial53.app.dao.UserDao;
import empresarial53.app.models.UserProfile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserProfileService {

    private UserDao userdao;

    @Autowired
    public UserProfileService(UserDao userdao) {
        this.userdao = userdao;
    }

    public UserProfile getUserProfile(String email) {

        UserProfile userProfile =  new UserProfile();
        var user = userdao.getUserByEmail(email);
        userProfile.setUsername(user.getUserName());
        userProfile.setEmail(user.getEmail());
        userProfile.setRole(userdao.getAuthorityByEmail(user.getEmail()));

        return userProfile;
    }
}
