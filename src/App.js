import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Repositories from './Components/Repositories';
import Developers from './Components/Developers';
import { UserProvider } from './UserContext/UserContext';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path='/' element={<Home />} >
            <Route path='' element={<Repositories />} />
            <Route path='Developers' element={<Developers />} />
          </Route>
        </Routes>
      </UserProvider>

    </BrowserRouter>

  );
}

export default App;
