package empresarial53.app.service;

import empresarial53.app.exceptions.InvalidAuthenticationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService implements AuthenticationManager {

    private final JdbcTemplate jdbcTemplate;
    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @Autowired
    public AuthenticationService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        var email = (String)authentication.getPrincipal();
        var password =  (String)authentication.getCredentials();
        var encodedPassStored = jdbcTemplate.queryForObject(
                "SELECT password FROM user_credentials WHERE email = ?", String.class, email
        );

        if (encoder.matches(password, encodedPassStored)) {
            return authentication;
        }


        throw new InvalidAuthenticationException("e-mail ou senha incorretos!");
    }
}
