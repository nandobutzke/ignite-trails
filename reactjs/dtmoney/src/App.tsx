import { GlobalStyle } from './styles/global';
import { Header } from './components/Header/index';
import { Dashboard } from './components/Dashboard';
import { TransactionsTable } from './components/TransactionsTable';
import { NewTransactionModal } from './components/NewTransactionModal'; 
import { useState } from 'react';

export function App() {
  const [isOpenNewTransactionModal, setIsOpenTransactionModal] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsOpenTransactionModal(true);
    }

    function handleCloseNewTransactionModal() {
        setIsOpenTransactionModal(false);
    }


  return (
    <>
      <Header 
        onClickNewTransactionModal={handleOpenNewTransactionModal} 
      />
      <Dashboard />

      <NewTransactionModal isClick={isOpenNewTransactionModal} onRequestClose={handleCloseNewTransactionModal} />

      <TransactionsTable />
      <GlobalStyle />
    </>
  );
}

