import { GlobalStyle } from './styles/global';
import { Header } from './components/Header/index';
import { Dashboard } from './components/Dashboard';
import { TransactionsTable } from './components/TransactionsTable';
import { NewTransactionModal } from './components/NewTransactionModal'; 
import { useState } from 'react';
import { TransactionsProvider } from './hooks/useTransactions';

export function App() {
  const [isOpenNewTransactionModal, setIsOpenTransactionModal] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsOpenTransactionModal(true);
    }

    function handleCloseNewTransactionModal() {
        setIsOpenTransactionModal(false);
    }

  return (
    <TransactionsProvider>
      <Header
        onClickNewTransactionModal={handleOpenNewTransactionModal}
      />
      <Dashboard />

      <NewTransactionModal isOpen={isOpenNewTransactionModal} onRequestClose={handleCloseNewTransactionModal} />

      <TransactionsTable />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

