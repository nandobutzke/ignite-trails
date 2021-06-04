import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { FormContainer, TransactionsTypeContainer, RadioBox } from "./styles";
import imgClose from '../../assets/close.svg';
import imgIncome from '../../assets/income.svg';
import imgOutcome from '../../assets/outcome.svg';
import { useTransactions } from "../../hooks/useTransactions";

interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: ModalProps) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    const { createTransaction } = useTransactions();

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('');
        onRequestClose();
    }

    return (

        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                type="button" 
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={imgClose} alt="Close" />
            </button>

            <FormContainer onSubmit={handleCreateNewTransaction}>
                <h2>Cadastro de Transações</h2>

                <input 
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionsTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={imgIncome} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={imgOutcome} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionsTypeContainer>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit" >
                    Cadastrar
                </button>
            </FormContainer>
        </Modal>

    );

}