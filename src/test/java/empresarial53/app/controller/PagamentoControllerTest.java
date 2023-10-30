package empresarial53.app.controller;

import empresarial53.app.dao.PagamentoDao;
import empresarial53.app.models.Manutencao;
import empresarial53.app.models.Pagamento;
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
public class PagamentoControllerTest {

    @InjectMocks
    PagamentoController pagamentoController;

    @Mock
    PagamentoDao pagamentoDao;

    Pagamento pagamento;

    @BeforeEach
    public void SetUp() {pagamento = new Pagamento();}

    @Test
    public void shouldFindAllPayments() {
        when(pagamentoDao.findAll()).thenReturn(Collections.singletonList(pagamento));
        List<Pagamento> pagamentos = pagamentoController.getPagamento();
        assertEquals(Collections.singletonList(pagamento), pagamentos);
        verify(pagamentoDao).findAll();
        verifyNoMoreInteractions(pagamentoDao);
    }

    @Test
    public void shouldfindPaymentByOrder() throws SQLException {
        when(pagamentoDao.findByOrderNum(pagamento.getOrderNum())).thenReturn(pagamento);
        Pagamento pagamentoTest = pagamentoController.getByOrder(pagamento.getOrderNum());
        assertEquals(pagamento, pagamentoTest);
        verify(pagamentoDao).findByOrderNum(pagamento.getOrderNum());
        verifyNoMoreInteractions(pagamentoDao);
    }

    @Test
    public void shouldFindPaymentByRoomNumber() {
        when(pagamentoDao.getPaymentsForRoomNumber(pagamento.getNumeroSala())).thenReturn(Collections.singletonList(pagamento));
        List<Pagamento> pagamentos = pagamentoController.getPagamentoByRoom(pagamento.getNumeroSala());
        assertEquals(Collections.singletonList(pagamento), pagamentos);
        verify(pagamentoDao).getPaymentsForRoomNumber(pagamento.getNumeroSala());
        verifyNoMoreInteractions(pagamentoDao);
    }

}
