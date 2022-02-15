import React, { useState } from 'react';
import Home from "./components/Home";
import Counter from "./components/Counter"
import './App.css';

function App() {
  const [page, setPage] = useState("home")

  const pages = {
    home: "counter",
    counter: "home"
  }

  function renderPage() {
    switch (page) {
      case "home":
        return <Home />;
      default:
        return <Counter />;;
    }
    // this is a bit overkill and could have just been a ternary 
  }

  function togglePage(){
    setPage(prevPage => pages[prevPage])
  }
  return (
    <div className="App">
      <nav>
        <button onClick={togglePage}>{pages[page]}</button>
      </nav>
      {renderPage()}
    </div>
  );
}

export default App;
