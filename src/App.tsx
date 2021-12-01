import React from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AuctionDashboard } from './pages/AuctionDashboard';

function App() {
  return (
    <>
      <Header />
      <AuctionDashboard />
      <Footer/>
    </>
    
  );
}

export default App;
