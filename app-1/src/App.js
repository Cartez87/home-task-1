import React from 'react';
import './App.css';
import Counter from './components/Counter';
import SearchForm from './components/SearchForm';
import Toggle from './components/Toggle';

function App() {

  function Search(search) {
      console.log(search);
  }

  return (
    <div className="App">
      <h1 className="text-center">Hello React</h1>
        <Counter />
        <SearchForm 
            onSearch={Search}
      />
      <Toggle />

    </div>
  );
}

export default App;
