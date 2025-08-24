import React from 'react';
import Hero from './components/Hero';
import Faculty from './components/Faculty';
import Teams from './components/Teams';
import Footer from './components/Footer';
import JoinForm from './components/joinForm'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Faculty />
      <Teams />
      <JoinForm />
      <Footer />
      
    </div>
  );
}

export default App;