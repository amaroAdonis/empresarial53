package empresarial53.app.models;

import java.util.Date;

public class Locatario {
    private Integer salaNumber;
    private String nome;
    private Integer cpfCnpj;
    private Date inicioContrato;
    private Date fimContrato;
    private Integer diaVencimento;
    private String email;
    private Integer telefone;
    private Integer whatsapp;
    private String atividade;
    private Double valorContrato;

    public Locatario() {
    }

    public Locatario(Integer salaNumber, String nome, Integer cpfCnpj, Date inicioContrato, Date fimContrato, Integer diaVencimento, String email, Integer telefone, Integer whatsapp, String atividade, Double valorContrato) {
        this.salaNumber = salaNumber;
        this.nome = nome;
        this.cpfCnpj = cpfCnpj;
        this.inicioContrato = inicioContrato;
        this.fimContrato = fimContrato;
        this.diaVencimento = diaVencimento;
        this.email = email;
        this.telefone = telefone;
        this.whatsapp = whatsapp;
        this.atividade = atividade;
        this.valorContrato = valorContrato;
    }

    public Integer getSalaNumber() {
        return salaNumber;
    }

    public void setSalaNumber(Integer salaNumber) {
        this.salaNumber = salaNumber;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getCpfCnpj() {
        return cpfCnpj;
    }

    public void setCpfCnpj(Integer cpfCnpj) {
        this.cpfCnpj = cpfCnpj;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getTelefone() {
        return telefone;
    }

    public void setTelefone(Integer telefone) {
        this.telefone = telefone;
    }

    public Integer getWhatsapp() {
        return whatsapp;
    }

    public void setWhatsapp(Integer whatsapp) {
        this.whatsapp = whatsapp;
    }

    public String getAtividade() {
        return atividade;
    }

    public void setAtividade(String atividade) {
        this.atividade = atividade;
    }

    public Double getValorContrato() {
        return valorContrato;
    }

    public void setValorContrato(Double valorContrato) {
        this.valorContrato = valorContrato;
    }
}


