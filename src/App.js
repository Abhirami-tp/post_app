import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import Searchp from './components/Searchp';
import Delete from './components/Delete';
import Viewall from './components/Viewall';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Add/> }/>
      <Route path="/Search" element={ <Searchp/> }/>
      <Route path="/Delete" element={ <Delete/> }/>
      <Route path="/Viewall" element={ <Viewall/> }/>
      </Routes></BrowserRouter>
  );
}

export default App;
