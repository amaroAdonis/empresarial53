package empresarial53.app.models;

import java.util.Date;

public class Pagamento {
    private Integer numeroSala;
    private Date diaPagamento;
    private String formaPagamento;
    private Double valor;
    private String observacao;

    public Pagamento() {
    }

    public Pagamento(Integer numeroSala, Date diaPagamento, String formaPagamento, Double valor, String observacao) {
        this.numeroSala = numeroSala;
        this.diaPagamento = diaPagamento;
        this.formaPagamento = formaPagamento;
        this.valor = valor;
        this.observacao = observacao;
    }

    public Integer getNumeroSala() {
        return numeroSala;
    }

    public void setNumeroSala(Integer numeroSala) {
        this.numeroSala = numeroSala;
    }

    public Date getDiaPagamento() {
        return diaPagamento;
    }

    public void setDiaPagamento(Date diaPagamento) {
        this.diaPagamento = diaPagamento;
    }

    public String getFormaPagamento() {
        return formaPagamento;
    }

    public void setFormaPagamento(String formaPagamento) {
        this.formaPagamento = formaPagamento;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    public String getObservacao() {
        return observacao;
    }

    public void setObservacao(String observacao) {
        this.observacao = observacao;
    }
}
