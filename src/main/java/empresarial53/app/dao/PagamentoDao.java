package empresarial53.app.dao;

import empresarial53.app.models.Pagamento;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class PagamentoDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private Pagamento getPagamentoFromResultSet(ResultSet rs, int rowNum) throws SQLException {

        Pagamento pagamento = new Pagamento();
        pagamento.setNumeroSala(rs.getInt("numero_sala"));
        pagamento.setDiaPagamento(rs.getDate("dia_pagamento"));
        pagamento.setValor(rs.getDouble("valor_pagamento"));
        pagamento.setFormaPagamento(rs.getString("forma_pagamento"));
        pagamento.setObservacao(rs.getString("observacao"));
        pagamento.setOrderNum(rs.getInt("order_num"));

        return pagamento;
    }

    public void novoPagamento(Pagamento pagamento) {
        String sql = "INSERT INTO pagamento (numero_sala, dia_pagamento, valor_pagamento, forma_pagamento, observacao) " +
                "values(?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, pagamento.getNumeroSala(), pagamento.getDiaPagamento(), pagamento.getValor(), pagamento.getFormaPagamento(), pagamento.getObservacao());
    }

    public List<Pagamento> findAll() {
        String sql = "SELECT * FROM pagamento";
        return jdbcTemplate.query(sql, this::getPagamentoFromResultSet);
    }

    public Pagamento findByOrderNum(Integer OrderNum) {
        String sql = "SELECT * FROM pagamento WHERE order_num = ?";
        return jdbcTemplate.queryForObject(sql, this::getPagamentoFromResultSet, OrderNum);
    }

    public void deleteByOrder(Integer order) {
        String sql = "DELETE FROM pagamento WHERE order_num = ?";
        jdbcTemplate.update(sql, order);
    }

    public void update(Pagamento pagamento) {
        String sql = "UPDATE pagamento SET numero_sala =?, dia_pagamento = ?, valor_pagamento = ?, forma_pagamento = ?, observacao = ? WHERE order_num = ?";
        jdbcTemplate.update(sql, pagamento.getNumeroSala(), pagamento.getDiaPagamento(), pagamento.getValor(), pagamento.getFormaPagamento(), pagamento.getObservacao(), pagamento.getOrderNum());
    }





}
