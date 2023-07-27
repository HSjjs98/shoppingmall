import { Outlet } from 'react-router-dom';
import './App.css';
import SearchHeader from './Components/SearchHeader/SearchHeader';

function App() {
  return (
    <>
      <SearchHeader />
      <Outlet />
    </>
  );
}

export default App;
