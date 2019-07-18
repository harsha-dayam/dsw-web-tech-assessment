import React from 'react';
import './App.scss';
import Header from './components/header';
import ProductCardContainer from './containers/productCardContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductCardContainer />
    </div>
  );
}

export default App;
