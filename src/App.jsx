import { RouterProvider } from 'react-router-dom';
import router from '@/routes/Router';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
