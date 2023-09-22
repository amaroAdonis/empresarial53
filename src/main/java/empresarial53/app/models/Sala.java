package empresarial53.app.models;


public class Sala {
    private Integer numeroSala;
    private Integer cpfCnpj;

    public Sala() {
    }

    public Sala(Integer numeroSala, Integer cpfCnpj) {
        this.numeroSala = numeroSala;
        this.cpfCnpj = cpfCnpj;
    }

    public Integer getNumeroSala() {
        return numeroSala;
    }

    public void setNumeroSala(Integer numeroSala) {
        this.numeroSala = numeroSala;
    }

    public Integer getCpfCnpj() {
        return cpfCnpj;
    }

    public void setCpfCnpj(Integer cpfCnpj) {
        this.cpfCnpj = cpfCnpj;
    }
}
