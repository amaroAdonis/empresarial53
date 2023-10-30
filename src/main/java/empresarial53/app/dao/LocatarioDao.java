package empresarial53.app.dao;

import empresarial53.app.models.Locatario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class LocatarioDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private Locatario getLocatarioFromResultSet(ResultSet rs, int rowNum) throws SQLException {

        Locatario locatario = new Locatario();
        locatario.setNumeroSala(rs.getInt("numero_sala"));
        locatario.setNome(rs.getString("nome"));
        locatario.setCpfCnpj(rs.getString("cpf_cnpj"));
        locatario.setInicioContrato(rs.getDate("inicio_contrato"));
        locatario.setFimContrato(rs.getDate("fim_contrato"));
        locatario.setDiaVencimento(rs.getInt("dia_vencimento"));
        locatario.setValorContrato(rs.getDouble("valor_contrato"));
        locatario.setNumeroContrato(rs.getString("numero_contrato"));
        locatario.setEmail(rs.getString("email"));
        locatario.setTelefone(rs.getString("telefone"));
        locatario.setWhatsapp(rs.getString("whatsapp"));
        locatario.setAtividade(rs.getString("atividade"));
        locatario.setActive(rs.getBoolean("active"));

        return locatario;
    }

    private Locatario getLocatarioFromResultSetShort(ResultSet rs,  int rowNum) throws SQLException {
        Locatario locatario = new Locatario();
        locatario.setNome(rs.getString("nome"));
        locatario.setNumeroContrato(rs.getString("numero_contrato"));
        locatario.setTelefone(rs.getString("telefone"));
        locatario.setCpfCnpj(rs.getString("cpf_cnpj"));
        locatario.setEmail(rs.getString("email"));
        return locatario;
    }

    public void novoLocatario (Locatario locatario) {
        String sql = "INSERT INTO locatario(numero_sala, nome, cpf_cnpj, inicio_contrato, fim_contrato, dia_vencimento, valor_contrato, numero_contrato, email, telefone, whatsapp, atividade, active) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, locatario.getNumeroSala(), locatario.getNome(), locatario.getCpfCnpj(), locatario.getInicioContrato(), locatario.getFimContrato(), locatario.getDiaVencimento(), locatario.getValorContrato(), locatario.getNumeroContrato(), locatario.getEmail(), locatario.getTelefone(), locatario.getWhatsapp(), locatario.getAtividade(), locatario.getActive());
    }

    public List<Locatario> findAll() {
        String sql = "SELECT * FROM locatario";
        return jdbcTemplate.query(sql, this::getLocatarioFromResultSetShort);
    }

    public Locatario findByCpfCnpj(String cpfCnpj) {
        String sql = "SELECT * FROM locatario WHERE cpf_cnpj = ?";
        return jdbcTemplate.queryForObject(sql, this::getLocatarioFromResultSet, cpfCnpj);
    }

    public Locatario findByNumeroSala(Integer numeroSala) {
        String sql = "SELECT * FROM locatario WHERE numero_sala = ?";
        return jdbcTemplate.queryForObject(sql, this::getLocatarioFromResultSet, numeroSala);
    }

    public void deleteByCpfCnpj(String cpfCnpj) {
        String sql = "DELETE FROM locatario WHERE cpf_cnpj = ?";
        jdbcTemplate.update(sql, cpfCnpj);
    }

    public void update(Locatario locatario) {
        String sql = "UPDATE locatario SET numero_sala = ?, nome = ?, inicio_contrato = ?, fim_contrato = ?, dia_vencimento = ?, valor_contrato = ?, numero_contrato = ?, email = ?, telefone = ?, whatsapp = ?, atividade = ?, active = ? WHERE cpf_cnpj = ?";
        jdbcTemplate.update(sql, locatario.getNome(), locatario.getInicioContrato(), locatario.getFimContrato(), locatario.getDiaVencimento(), locatario.getValorContrato(), locatario.getNumeroContrato(), locatario.getEmail(), locatario.getTelefone(), locatario.getWhatsapp(), locatario.getAtividade(), locatario.getAtividade(), locatario.getActive());
    }
}
