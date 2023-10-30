package empresarial53.app.controller;

import empresarial53.app.dao.LocatarioDao;
import empresarial53.app.models.Locatario;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class LocatarioControllerTest {

    @InjectMocks
    LocatarioController locatarioController;

    @Mock
    LocatarioDao locatarioDao;

    Locatario locatario;

    @BeforeEach
    public void SetUp() {
        locatario = new Locatario();
    }

    @Test
    public void shouldFindLocatarioByCpfCnpj() {
        when(locatarioDao.findByCpfCnpj(locatario.getCpfCnpj())).thenReturn(locatario);
        Locatario locatarioTest = locatarioController.getByCpfCnpj(locatario.getCpfCnpj());

        assertEquals(locatarioTest, locatario);
        verify(locatarioDao).findByCpfCnpj(locatario.getCpfCnpj());
        verifyNoMoreInteractions(locatarioDao);
    }

    @Test
    public void shouldFindLocatarioByNumeroSala() {
        when(locatarioDao.findByNumeroSala(locatario.getNumeroSala())).thenReturn(locatario);
        Locatario locatarioTest = locatarioController.getByNumeroSala(locatario.getNumeroSala());

        assertEquals(locatarioTest, locatario);
        verify(locatarioDao).findByNumeroSala(locatario.getNumeroSala());
        verifyNoMoreInteractions(locatarioDao);
    }

    @Test
    public void shouldFindAllLocatarios() {
        when(locatarioDao.findAll()).thenReturn(Collections.singletonList(locatario));

        List<Locatario> locatarios = locatarioController.getLocatarios();
        assertEquals(Collections.singletonList(locatario), locatarios);
        verify(locatarioDao).findAll();
        verifyNoMoreInteractions(locatarioDao);
    }


}
