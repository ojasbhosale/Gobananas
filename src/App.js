import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Home from './pages/Home';
import ItemDetail from './pages/ItemDetail';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home items={items} />} />
        <Route path="/item/:id" element={<ItemDetail items={items} />} />
      </Routes>
    </Router>
  );
};

export default App;
