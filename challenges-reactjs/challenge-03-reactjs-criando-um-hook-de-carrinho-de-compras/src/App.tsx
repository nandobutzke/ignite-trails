import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import GlobalStyles from './styles/global';
import Header from './components/Header';
import { CartProvider } from './hooks/useCart';

const App = (): JSX.Element => {

  return (
    <BrowserRouter>
      <CartProvider>
        {/* <button 
          onClick={darkMode.value === false 
          ? darkMode.disable 
          : darkMode.enable
        }>
          <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={80}
          />
        </button> */}
          <GlobalStyles />
          <Header />
          <Routes />
          <ToastContainer autoClose={3000} />

      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
