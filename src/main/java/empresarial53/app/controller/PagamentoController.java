package empresarial53.app.controller;

import empresarial53.app.dao.PagamentoDao;
import empresarial53.app.models.Pagamento;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/pagamento")
public class PagamentoController {

    @Autowired
    PagamentoDao pagamentoDao;

    @GetMapping("")
    public List<Pagamento> getPagamento() {
        return pagamentoDao.findAll();
    }

    @GetMapping(value = "/{order}")
    public Pagamento getByOrder(@PathVariable Integer order) {
        return pagamentoDao.findByOrderNum(order);
    }

    @PostMapping("")
    public void createPagamento(@RequestBody Pagamento pagamento) {
        pagamentoDao.novoPagamento(pagamento);
    }

    @DeleteMapping(value = "/{order}")
    public void deletePagamento(@PathVariable Integer order) {
        pagamentoDao.deleteByOrder(order);
    }

    @PutMapping(value = "/{order}")
    public void update(@PathVariable Integer order, @RequestBody Pagamento pagamento) {
        pagamentoDao.update(pagamento);
    }

    @GetMapping("/todos/{numeroSala}")
    public List<Pagamento> getPagamentoByRoom(@PathVariable Integer numeroSala) {
        return pagamentoDao.getPaymentsForRoomNumber(numeroSala);
    }

}
