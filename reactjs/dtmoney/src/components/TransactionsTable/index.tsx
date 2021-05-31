import { Container } from './styles';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: Date;
}

export function TransactionsTable() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
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
                   {transactions.map(transaction => (
                       <tr key={transaction.id}>
                           <td>{transaction.title}</td>
                           <td className={transaction.type}>
                               {new Intl.NumberFormat('pt-br', {
                               style: 'currency',
                               currency: 'BRL'
                           }).format(transaction.amount)}</td>
                           <td>{transaction.category}</td>
                           <td>{new Intl.DateTimeFormat('pt-br').format(new Date(transaction.createdAt))}</td>
                       </tr>
                   ))}
                </tbody>
            </table>
        </Container>
    );
}