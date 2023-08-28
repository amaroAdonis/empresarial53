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
        locatario.setNome(rs.getString("nome"));
        locatario.setCpfCnpj(rs.getInt("cpf_cnpj"));
        locatario.setEmail(rs.getString("email"));
        locatario.setTelefone(rs.getInt("telefone"));
        locatario.setWhatsapp(rs.getInt("whastapp"));
        locatario.setAtividade(rs.getString("atividade"));

        return locatario;
    }

    public void novoLocatario (Locatario locatario) {
        String sql = "INSERT INTO locatario(nome, cpf_cnpj, email, telefone, whatsapp, atividade) values(?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, locatario.getNome(), locatario.getCpfCnpj(), locatario.getEmail(), locatario.getEmail(), locatario.getTelefone(), locatario.getAtividade());
    }

    public List<Locatario> findAll() {
        String sql = "SELECT * FROM locatario";
        return jdbcTemplate.query(sql, this::getLocatarioFromResultSet);
    }

    public Locatario findByCpfCnpj(Integer cpfCnpj) {
        String sql = "SELECT * FROM locatario WHERE cph_cnpj";
        return jdbcTemplate.queryForObject(sql, this::getLocatarioFromResultSet, cpfCnpj);
    }

    public void deleteByCpfCnpj(Integer cpfCnpj) {
        String sql = "DELETE FROM locatario WHERE cpf_cnpj = ?";
        jdbcTemplate.update(sql, cpfCnpj);
    }

    public void update(Locatario locatario) {
        String sql = "UPDATE locatario SET nome = ?, email = ?, telefone = ?, whatsapp = ?, atividade = ? WHERE cpf_cnpj = ?";
        jdbcTemplate.update(sql, locatario.getNome(), locatario.getEmail(), locatario.getTelefone(), locatario.getWhatsapp(), locatario.getAtividade(), locatario.getAtividade());
    }
}
