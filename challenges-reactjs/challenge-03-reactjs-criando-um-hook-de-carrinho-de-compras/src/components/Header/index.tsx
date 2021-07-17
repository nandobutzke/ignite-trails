import { Link } from 'react-router-dom';
import { MdShoppingBasket, MdStar } from 'react-icons/md';

import logo from '../../assets/images/logo.svg';
import { Container, Cart, ContainerButtons } from './styles';
import { useCart } from '../../hooks/useCart';

const Header = (): JSX.Element => {
  const { cart } = useCart();
  const cartSize = cart.length;

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <ContainerButtons>
        <button>
          <MdStar size={20} color="#FFF" />
            Teste
        </button>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span data-testid="cart-size">
            {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
          </span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
      </ContainerButtons>
    </Container>
  );
};

export default Header;
