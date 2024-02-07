import Gallery from './components/Gallery';
import SearchForm from './components/SearchForm';
import ThemeToggle from './components/ThemeToggle';
import { ToastContainer } from 'react-toastify';
import { useGlobalContext } from './context';

const App = () => {
  const { isDarkTheme } = useGlobalContext();
  return (
    <main>
      <ToastContainer
        theme={isDarkTheme ? 'dark' : 'light'}
        position="bottom-center"
      />
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
};
export default App;
