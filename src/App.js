import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import { AuthContextProvider } from './Context/AuthContext';

function App() {
  return (
      <AuthContextProvider>
        <Header />
        <Outlet />
      </AuthContextProvider>
  );
}

export default App;
