import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Header from './components/Header';

function App() {

  const[currentPage, handlePageChange]=useState('About Me');
  const renderPage =()=> {
    switch (currentPage) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact/>;
      case 'Resume':
        return <Resume />;
      default:
        return<About/>;
    }
  }

  return (
    <div>
      <Header
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      ></Header>
      <main>
        { renderPage(currentPage)}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
