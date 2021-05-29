import { Container, Content } from "./styles";
import imgLogo from '../../assets/logo.svg';

interface HeaderProps {
    onClickNewTransactionModal: () => void;
}

export function Header({ onClickNewTransactionModal }: HeaderProps) {
    
    return (
        <Container>
            <Content>
                <img src={imgLogo} alt="Logo" />
                <button type="button" onClick={onClickNewTransactionModal}>Nova transação</button>
            </Content>
        </Container>
    );
}