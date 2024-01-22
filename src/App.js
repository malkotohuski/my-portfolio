import React from 'react';
import Header from './Pages/Header/index';
import Portfolio from './Pages/Portfolio/';
import Home from './Pages/Home/index';
import Footer from './Footer';
import './App.css';


const projects = [
  {
    title: 'Project 1',
    description: 'Description for Project 1',
    imageUrl: '',
  },
  {
    title: 'Project 2',
    description: 'Description for Project 2',
    imageUrl: '',
  },
  {
    title: 'Project 3',
    description: 'Description for Project 3',
    imageUrl: '',
  },
  // Add more projects as needed
];

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Portfolio projects={projects} />
      <Footer />
    </div>
  );
};

export default App;

