package empresarial53.app.controller;


import empresarial53.app.dao.UserDao;
import empresarial53.app.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("api/user")
public class UserController {

    @Autowired
    UserDao userDao;

    @GetMapping("")
    public List<User> getUsers() {
        return userDao.findAll();
    }

    @GetMapping(value = "/{id}")
    public User getByEmail(@PathVariable String email) throws SQLException {
        return userDao.findByEmail(email);
    }

    @PostMapping("")
    public void createUser(@RequestBody User user) {
        userDao.newUser(user);
    }

    @DeleteMapping(value = "/{order}")
    public void deleteUser(@PathVariable Integer order) {
        userDao.deleteByOrder(order);
    }

    @PutMapping(value = "/{order}")
    public void update(@PathVariable Integer order, @RequestBody User user) {
        userDao.update(user);
    }


}
