package empresarial53.app.controller;

import empresarial53.app.dao.ManutencaoDao;
import empresarial53.app.models.Manutencao;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import java.sql.SQLException;
import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ManutencaoControllerTest {

    @InjectMocks
    ManutencaoController manutencaoController;

    @Mock
    ManutencaoDao manutencaoDao;

    Manutencao manutencao;

    @BeforeEach
    public void SetUp() { manutencao = new Manutencao();}

    @Test
    public void  shouldFindAllRepairs() {
        when(manutencaoDao.findAll()).thenReturn(Collections.singletonList(manutencao));
        List<Manutencao> manutencoes = manutencaoController.getManutencoes();
        assertEquals(Collections.singletonList(manutencao), manutencoes);
        verify(manutencaoDao).findAll();
        verifyNoMoreInteractions(manutencaoDao);
    }

    @Test
    public void shouldfindRepairByOrder() throws SQLException {
        when(manutencaoDao.findByOrder(manutencao.getOrderNum())).thenReturn(manutencao);
        Manutencao manutencaoTest = manutencaoController.getByOrder(manutencao.getOrderNum());
        assertEquals(manutencao, manutencaoTest);
        verify(manutencaoDao).findByOrder(manutencao.getOrderNum());
        verifyNoMoreInteractions(manutencaoDao);
    }

    @Test
    public void shouldFindRepairByRoomNumber() {
        when(manutencaoDao.repairsForRoomNumber(manutencao.getNumeroSala())).thenReturn(Collections.singletonList(manutencao));
        List<Manutencao> manutencoes = manutencaoController.getManutencoesByRoomNumber(manutencao.getNumeroSala());
        assertEquals(Collections.singletonList(manutencao), manutencoes);
        verify(manutencaoDao).repairsForRoomNumber(manutencao.getNumeroSala());
        verifyNoMoreInteractions(manutencaoDao);
    }
}
