import './App.css';

import AllUsers from './Component/AllUsers.jsx';
import AddUser from './Component/AddUser.jsx';
import EditUser from './Component/EditUser.jsx';
import NavBar from './Component/NavBar.jsx';
import NotFound from './Component/NotFound'; 
import CurdApplication from './Component/CurdApplication';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<CurdApplication /> } />
        <Route path="all" element={<AllUsers /> } />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;