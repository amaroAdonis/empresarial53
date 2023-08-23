package empresarial53.app.models;

import java.util.Date;

public class Sala {
    private Integer numeroSala;
    private Integer numeroContrato;
    private Date inicioContrato;
    private Date fimContrato;
    private Integer diaVencimento;
    private Double valorContrato;

    public Sala() {
    }

    public Sala(Integer numeroSala, Integer numeroContrato, Date inicioContrato, Date fimContrato, Integer diaVencimento, Double valorContrato) {
        this.numeroSala = numeroSala;
        this.numeroContrato = numeroContrato;
        this.inicioContrato = inicioContrato;
        this.fimContrato = fimContrato;
        this.diaVencimento = diaVencimento;
        this.valorContrato = valorContrato;
    }

    public Integer getNumeroSala() {
        return numeroSala;
    }

    public void setNumeroSala(Integer numeroSala) {
        this.numeroSala = numeroSala;
    }

    public Integer getNumeroContrato() {
        return numeroContrato;
    }

    public void setNumeroContrato(Integer numeroContrato) {
        this.numeroContrato = numeroContrato;
    }

    public Date getInicioContrato() {
        return inicioContrato;
    }

    public void setInicioContrato(Date inicioContrato) {
        this.inicioContrato = inicioContrato;
    }

    public Date getFimContrato() {
        return fimContrato;
    }

    public void setFimContrato(Date fimContrato) {
        this.fimContrato = fimContrato;
    }

    public Integer getDiaVencimento() {
        return diaVencimento;
    }

    public void setDiaVencimento(Integer diaVencimento) {
        this.diaVencimento = diaVencimento;
    }

    public Double getValorContrato() {
        return valorContrato;
    }

    public void setValorContrato(Double valorContrato) {
        this.valorContrato = valorContrato;
    }
}
