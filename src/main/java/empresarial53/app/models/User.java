package empresarial53.app.models;

public class User {
    private String userName;
    private String email;
    private String password;
    private Integer order;

    public User() {
    }

    public User(String userName, String email, String password, Integer order) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.order = order;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getOrder() {
        return order;
    }

    public void setOrder(Integer order) {
        this.order = order;
    }
}
