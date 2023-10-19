package empresarial53.app.controller;

import empresarial53.app.dao.LocatarioDao;
import empresarial53.app.models.Locatario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/locatario")
public class LocatarioController {

    @Autowired
    LocatarioDao locatarioDao;

    @GetMapping("")
    public List<Locatario> getLocatarios() {
        return locatarioDao.findAll();
    }

    @GetMapping(value = "/{numeroSala}")
    public Locatario getByNumeroSala(@PathVariable Integer numeroSala) {
        return locatarioDao.findByNumeroSala(numeroSala);
    }

    @PostMapping
    public void CreateLocatario(@RequestBody Locatario locatario) {
        locatarioDao.novoLocatario(locatario);
    }

    @DeleteMapping("/{cpfCnpj}")
    public void deleteLocatario(@PathVariable String cpfCnpj) {
        locatarioDao.deleteByCpfCnpj(cpfCnpj);
    }

    @PutMapping("/{cpfCnpj}")
    public void update(@PathVariable Integer cpfCnpj, @RequestBody Locatario locatario) {
        locatarioDao.update(locatario);
    }
}
