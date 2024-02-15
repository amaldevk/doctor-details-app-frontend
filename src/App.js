import logo from './logo.svg';
import './App.css';
import NavDoc from './components/NavDoc';
import AddDoc from './components/AddDoc';
import ViewDoc from './components/ViewDoc';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<NavDoc/>} />
        <Route path='/add' element = {<AddDoc/>} />
        <Route path='/view' element = {<ViewDoc/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
