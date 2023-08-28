package empresarial53.app.dao;

import empresarial53.app.models.Manutencao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class ManutencaoDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private Manutencao getManutencaoFromResultSet(ResultSet rs, int rowNum) throws SQLException {

        Manutencao manutencao = new Manutencao();
        manutencao.setOrderNum(rs.getInt("order_num"));
        manutencao.setNumeroSala(rs.getInt("numero_sala"));
        manutencao.setNomeServico(rs.getString("nome_servico"));
        manutencao.setDataServico(rs.getDate("data_servico"));
        manutencao.setValor(rs.getDouble("valor_servico"));

        return manutencao;
    }

    public void novaManutencao(Manutencao manutencao) {
        String sql = "INSERT INTO manutencao(numero_sala, nome_servico, data_servico, valor_servico)" +
                "values(?, ?, ?, ?)";
        jdbcTemplate.update(sql, manutencao.getNumeroSala(), manutencao.getNomeServico(), manutencao.getDataServico(), manutencao.getValor());
    }

    public List<Manutencao> findAll() {
        String sql = "SELECT * FROM manutencao";
        return jdbcTemplate.query(sql, this::getManutencaoFromResultSet);
    }

    public Manutencao findByOrder(Integer orderNum) {
        String sql = "SELECT * FROM manutencao WHERE order_num = ?";
        return jdbcTemplate.queryForObject(sql, this::getManutencaoFromResultSet, orderNum);
    }

    public void deleteByOrderNum(Integer orderNum) {
        String sql = "DELETE FROM manutencao WHERE order_num = ?";
        jdbcTemplate.update(sql, orderNum);
    }

    public void update(Manutencao manutencao) {
        String sql = "UPDATE manutencao SET numero_sala = ?, nome_servico = ?, data_servico = ?, valor_servico = ? WHERE order_num = ?";
        jdbcTemplate.update(sql, manutencao.getNumeroSala(), manutencao.getNomeServico(), manutencao.getDataServico(), manutencao.getValor(), manutencao.getOrderNum());
    }


}
