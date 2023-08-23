package empresarial53.app.models;

import java.util.Date;

public class Manutencao {
    private String nomeServico;
    private Double valor;
    private Integer numeroSala;
    private Date dataServico;

    public Manutencao() {
    }

    public Manutencao(String nomeServico, Double valor, Integer numeroSala, Date dataServico) {
        this.nomeServico = nomeServico;
        this.valor = valor;
        this.numeroSala = numeroSala;
        this.dataServico = dataServico;
    }

    public String getNomeServico() {
        return nomeServico;
    }

    public void setNomeServico(String nomeServico) {
        this.nomeServico = nomeServico;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    public Integer getNumeroSala() {
        return numeroSala;
    }

    public void setNumeroSala(Integer numeroSala) {
        this.numeroSala = numeroSala;
    }

    public Date getDataServico() {
        return dataServico;
    }

    public void setDataServico(Date dataServico) {
        this.dataServico = dataServico;
    }
}
