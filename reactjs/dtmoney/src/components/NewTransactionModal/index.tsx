import Modal from "react-modal";
import { Container, TransactionsTyopeContainer, RadioBox } from "./styles";
import imgClose from '../../assets/close.svg';
import imgIncome from '../../assets/income.svg';
import imgOutcome from '../../assets/outcome.svg';
import { useState } from "react";


interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: ModalProps) {
    const [type, setType] = useState('deposit');

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

            <Container>
                <h2>Cadastro de Transações</h2>

                <input 
                    placeholder="Título"
                />

                <input
                    type="number"
                    placeholder="Valor"
                />

                <TransactionsTyopeContainer>
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
                </TransactionsTyopeContainer>

                <input
                    placeholder="Categoria"
                />

                <button type="submit" >
                    Cadastrar
                </button>
            </Container>
        </Modal>

    );

}