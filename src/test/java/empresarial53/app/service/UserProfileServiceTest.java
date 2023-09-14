package empresarial53.app.service;

import static org.junit.jupiter.api.Assertions.*;

import empresarial53.app.dao.UserDao;
import empresarial53.app.models.User;
import empresarial53.app.models.UserProfile;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class UserProfileServiceTest {

    private UserDao fakeUserDao;
    private UserProfileService userProfileService;
    private User testUser;

    @BeforeEach
    public void setup() {
        fakeUserDao = Mockito.mock(UserDao.class);
        userProfileService = new UserProfileService(fakeUserDao);
    }

    @Test
    public void shouldReturnUserProfile() {
        whenUserIs("adones");

        UserProfile user = userProfileService.getUserProfile("test");
        assertNotNull(user);
        assertEquals(user.getUsername(), "adones");
    }

    @Test
    public void shouldTreatInvalidUser() {
        whenUserIsNull();
        UserProfile user = userProfileService.getUserProfile("test");
        assertNull(user);
    }

    private void whenUserIs(String username) {
        testUser = new User();
        testUser.setUserName("adones");
        Mockito.when(fakeUserDao.getUserByEmail(Mockito.anyString())).thenReturn(testUser);
        Mockito.when(fakeUserDao.getAuthorityByEmail(Mockito.anyString())).thenReturn("ADMIN");
    }

    private void whenUserIsNull() {
        Mockito.when(fakeUserDao.getUserByEmail(Mockito.anyString())).thenReturn(null);
    }
}