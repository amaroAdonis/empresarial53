package empresarial53.app.dao;

import empresarial53.app.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class UserDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private User getUserFromResultSet(ResultSet resultSet, int rowNum) throws SQLException {
            User user = new User();
            user.setUserName(resultSet.getString("username"));
            user.setEmail(resultSet.getString("email"));
            user.setPassword(resultSet.getString("password"));
            user.setOrder(resultSet.getInt("order"));

            return user;
    }

    public void newUser(User user) {
        String sql = "INSERT INTO user_admin(username, email, password) values(?, ?, ?)";
        jdbcTemplate.update(sql, user.getUserName(), user.getEmail(), user.getPassword());
    }

    public List<User> findAll() {
        String sql = "SELECT * FROM user_admin";
        return jdbcTemplate.query(sql, this::getUserFromResultSet);
    }

    public User findByEmail(String email) throws SQLException {
        String sql = "SELECT * FROM user_admin WHERE email = ?";
        return jdbcTemplate.queryForObject(sql, this::getUserFromResultSet, email);
    }

    public void deleteByOrder(Integer order) {
        String sql = "DELETE FROM user_admin WHERE orderNum = ?";
        jdbcTemplate.update(sql, order);
    }

    public void update(User user) {
        String sql = "UPDATE user_admin SET username = ?, password = ? WHERE orderNum = ?";
        jdbcTemplate.update(sql, user.getUserName(), user.getPassword(), user.getOrder());
    }

    public User getUserByEmail(String email) {
        String sql = "SELECT * FROM user_admin WHERE email = ?";
        return jdbcTemplate.queryForObject(sql, this::getUserFromResultSet, email);
    }

    public String getAuthorityByEmail(String email) {
        String sql = "SELECT authority FROM authorities WHERE email = ?";
        return jdbcTemplate.queryForObject(sql, String.class, email);
    }










}
