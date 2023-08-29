package empresarial53.app.controller;

import empresarial53.app.dao.SalaDao;
import empresarial53.app.models.Sala;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("api/sala")
public class SalaController {

    @Autowired
    SalaDao salaDao;

    @GetMapping("")
    public List<Sala> getSala() {
        return salaDao.findAll();
    }

    @GetMapping(value = "/{id}")
    public Sala getByNumeroSala (@PathVariable Integer numeroSala) throws SQLException {
        return salaDao.findByNumeroSala(numeroSala);
    }

    @PostMapping("")
    public void createSala(@RequestBody Sala sala) {
        salaDao.novaSala(sala);
    }

    @DeleteMapping("/{numeroContrato}")
    public void deleteSala(@PathVariable Integer numeroContrato) {
        salaDao.deleteByNumeroContrato(numeroContrato);
    }

    @PutMapping(value = "/{numeroSala}")
    public void update(@PathVariable Integer numeroSala, @RequestBody Sala sala) {
        salaDao.update(sala);
    }




}
