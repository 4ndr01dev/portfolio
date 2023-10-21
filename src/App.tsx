import React from 'react';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import './App.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar></Navbar>
      </header>
      <section className='MainPage'>
        <MainPage></MainPage>
      </section>
    </div>
  );
}

export default App;
