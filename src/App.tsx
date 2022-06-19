import { Fragment } from 'react';
import { Wrapper } from './components/wrapper/wrapper'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/login/login';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Wrapper />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </Fragment>
  );
}

export default App;
