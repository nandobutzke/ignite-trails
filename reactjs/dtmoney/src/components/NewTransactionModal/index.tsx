import Modal from "react-modal";
import { Container } from "./styles";
import imgClose from '../../assets/close.svg';


interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: ModalProps) {
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