import { Container } from './styles';
import { useEffect } from 'react';
import { api } from '../../services/api';

export function TransactionsTable() {
    useEffect(() => {
        api.get('transactions')
        .then(data => console.log(data))

    }, []);


    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Cateoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$ 12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>23/05/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$ 600,00</td>
                        <td>Casa</td>
                        <td>05/05/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}