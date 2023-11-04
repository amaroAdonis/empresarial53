package empresarial53.app.models;

public class User {
    private String username;
    private String email;
    private Integer order;

    public User() {
    }

    public User(String username, String email, Integer order) {
        this.username = username;
        this.email = email;
        this.order = order;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getOrder() {
        return order;
    }

    public void setOrder(Integer order) {
        this.order = order;
    }
}
