package empresarial53.app.models;

import java.util.Date;

public class Locatario {
    private Integer numeroSala;
    private String nome;
    private String cpfCnpj;
    private Date inicioContrato;
    private Date fimContrato;
    private Integer diaVencimento;
    private String email;
    private String telefone;
    private String whatsapp;
    private String atividade;
    private Double valorContrato;
    private String numeroContrato;
    private Boolean active;

    public Locatario() {
    }

    public Locatario(Integer numeroSala, String nome, String cpfCnpj, Date inicioContrato, Date fimContrato, Integer diaVencimento, String email, String telefone, String whatsapp, String atividade, Double valorContrato, String numeroContrato, Boolean active) {
        this.numeroSala = numeroSala;
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
        this.numeroContrato = numeroContrato;
        this.active = active;
    }

    public Integer getNumeroSala() {
        return numeroSala;
    }

    public void setNumeroSala(Integer numeroSala) {
        this.numeroSala = numeroSala;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpfCnpj() {
        return cpfCnpj;
    }

    public void setCpfCnpj(String cpfCnpj) {
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

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getWhatsapp() {
        return whatsapp;
    }

    public void setWhatsapp(String whatsapp) {
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

    public String getNumeroContrato() {
        return numeroContrato;
    }

    public void setNumeroContrato(String numeroContrato) {
        this.numeroContrato = numeroContrato;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }
}


