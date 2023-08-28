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
    private JdbcTemplate jdbcTemplate;

    private Sala getSalaFromResultSet(ResultSet rs, int rowNum) throws SQLException {

        Sala sala = new Sala();
        sala.setNumeroSala(rs.getInt("numero_sala"));
        sala.setNumeroContrato(rs.getInt("numero_contrato"));
        sala.setInicioContrato(rs.getDate("inicio_contrato"));
        sala.setFimContrato(rs.getDate("fim_contrato"));
        sala.setDiaVencimento(rs.getInt("vencimento_mensal"));
        sala.setValorContrato(rs.getDouble("valor_contrato"));
        return sala;
    }

    public void novaSala (Sala sala) {
        String sql = "INSERT INTO sala(numero_sala, numero_contrato, inicio_contrato, fim_contrato, vencimento_mensal, valor_contrato) " +
                "values(?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, sala.getNumeroSala(), sala.getNumeroContrato(), sala.getInicioContrato(), sala.getFimContrato(), sala.getValorContrato(), sala.getDiaVencimento());
    }

    public List<Sala> findAll() {
        String sql = "SELECT * FROM sala";
        return jdbcTemplate.query(sql, this::getSalaFromResultSet);
    }

    public Sala findByNumeroSala(Integer numeroSala) {
        String sql = "SELECT * FROM sala WHERE numero_sala = ?";
        return jdbcTemplate.queryForObject(sql, this::getSalaFromResultSet, numeroSala);
    }

    public void deleteByNumeroContrato(Integer numeroContrato) {
        String sql = "DELETE FROM sala WHERE numero_contrato = ?";
        jdbcTemplate.update(sql, numeroContrato);
    }

    public void update(Sala sala) {
        String sql = "UPDATE sala SET numero_contrato = ?, inicio_contrato = ?, fim_contrato = ?, vencimento_mensal = ?, valor_contrato = ? WHERE numero_sala = ?";
        jdbcTemplate.update(sql, sala.getNumeroContrato(), sala.getInicioContrato(), sala.getFimContrato(), sala.getDiaVencimento(), sala.getValorContrato(), sala.getNumeroSala());
    }

}
