import React from 'react';
import './App.scss';
import Header from './components/header';
import BusinessContent from './components/businessContent';
import ProductCardContainer from './containers/productCardContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <BusinessContent />
      <ProductCardContainer />
    </div>
  );
}

export default App;
