import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';

function App() {
  const {t} = useTranslation()
  return (
    <div className="App">
      <header className="App-header">
      <Navbar></Navbar>
      </header>
      <section>
        <h1>
          {t("welcome")}
        </h1>
      </section>
    </div>
  );
}

export default App;
