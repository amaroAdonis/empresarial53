package empresarial53.app.dao;

import empresarial53.app.models.Sala;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class SalaDao {
    @Autowired
    JdbcTemplate jdbcTemplate;

    private Sala getSalaFromResultSet(ResultSet rs, int rowNum) throws SQLException {

        Sala sala = new Sala();
        sala.setNumeroSala(rs.getInt("numero_sala"));
        sala.setCpfCnpj(rs.getString("cpf_cnpj"));
        return sala;
    }



    public void novaSala(Sala sala) {
        String sql = "INSERT INTO sala (numero_sala, cpf_cnpj) values(?,?)";
        jdbcTemplate.update(sql,sala.getNumeroSala(), sala.getCpfCnpj());
    }

    public List<Sala> findAll() {
        String sql = "SELECT * FROM sala";
        return jdbcTemplate.query(sql, this::getSalaFromResultSet);
    }

    public Sala findByNumeroSala(Integer numeroSala) {
        String sql = "SELECT * FROM sala WHERE numero_sala = ?";
        return jdbcTemplate.queryForObject(sql, this::getSalaFromResultSet, numeroSala);
    }

    public void update(Sala sala) {
        String sql = "UPDATE sala SET cpf_cnpj = ? WHERE numero_sala = ?";
        jdbcTemplate.update(sql, sala.getCpfCnpj(), sala.getNumeroSala());
    }

    public void deleteByNumeroSala(Integer numeroSala) {
        String sql = "DELETE FROM sala WHERE numero_sala = ?";
        jdbcTemplate.update(sql, numeroSala);
    }
}
