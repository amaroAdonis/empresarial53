package empresarial53.app.models;


public class Sala {
    private Integer numeroSala;
    private String cpfCnpj;

    public Sala() {
    }

    public Sala(Integer numeroSala, String cpfCnpj) {
        this.numeroSala = numeroSala;
        this.cpfCnpj = cpfCnpj;
    }

    public Integer getNumeroSala() {
        return numeroSala;
    }

    public void setNumeroSala(Integer numeroSala) {
        this.numeroSala = numeroSala;
    }

    public String getCpfCnpj() {
        return cpfCnpj;
    }

    public void setCpfCnpj(String cpfCnpj) {
        this.cpfCnpj = cpfCnpj;
    }
}
