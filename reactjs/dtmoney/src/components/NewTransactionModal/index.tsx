import Modal from "react-modal";

interface ModalProps {
    isClick: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isClick, onRequestClose }: ModalProps) {
    return (

        <Modal 
            isOpen={isClick}
            onRequestClose={onRequestClose}
        >
            <h2>Hello Modal World!</h2>
        </Modal>

    ); 

}