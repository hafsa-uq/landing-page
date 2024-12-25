import './App.css';
import { Routes, Route } from 'react-router-dom';
import Clients from './components/Clients';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import PricingCalculator from './components/PricingCalculator';
import Demo from './components/Demo';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <Features />
              <Clients />
            </>
          } 
        />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/pricing-calculator" element={<PricingCalculator />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
