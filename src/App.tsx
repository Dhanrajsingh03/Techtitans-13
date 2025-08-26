import React from 'react';
import Hero from './components/Hero';
import Faculty from './components/Faculty';
import Teams from './components/Teams';
import Footer from './components/Footer';
import JoinForm from './components/joinForm';
// import ApplicationsList from './components/fetchdata'; // 👈 new import

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Faculty />
      <Teams />
      <JoinForm />
      {/* <ApplicationsList />   👈 show submitted data here */}
      <Footer />
    </div>
  );
}

export default App;
