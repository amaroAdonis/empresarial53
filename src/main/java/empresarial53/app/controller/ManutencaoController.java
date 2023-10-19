package empresarial53.app.controller;

import empresarial53.app.dao.ManutencaoDao;
import empresarial53.app.models.Manutencao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("api/manutencao")
public class ManutencaoController {

    @Autowired
    ManutencaoDao manutencaoDao;

    @GetMapping("")
    public List<Manutencao> getManutencoes() {
        return manutencaoDao.findAll();
    }

    @GetMapping(value = "/{order}")
    public Manutencao getByOrder(@PathVariable Integer order) throws SQLException {
       return manutencaoDao.findByOrder(order);
    }

    @GetMapping(value = "/manutencoes/{numeroSala}")
    public List<Manutencao> getUltimasManutencoes(@PathVariable Integer numeroSala) {return manutencaoDao.lastRepairs(numeroSala);}

    @PostMapping("")
    public void createManutencao(@RequestBody Manutencao manutencao) {
        manutencaoDao.novaManutencao(manutencao);
    }

    @DeleteMapping(value = "/{order}")
    public void delete(@PathVariable Integer order) {
        manutencaoDao.deleteByOrderNum(order);
    }

    @PutMapping(value = "/{order}")
    public void update(@PathVariable Integer order, @RequestBody Manutencao manutencao) {
        manutencaoDao.update(manutencao);
    }





}
