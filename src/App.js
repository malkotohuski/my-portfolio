import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Pages/Header';
import Portfolio from './Pages/Portfolio/';
import Home from './Pages/Home';
import LanguageSwitch from './Pages/LanguageSwitch';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import rustImage from '../src/images/Rust.png';
import rustAppImage from '../src/images/Rust_app4.png';
import './App.css';

const App = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const projects = [
    {
      id: 'world-of-rust',
      title: 'World of Rust',
      description: 'Description for Project 1',
      imageUrl: rustImage,
    },
    {
      id: 'project2',
      title: 'Project 2',
      description: 'Description for Project 2',
      imageUrl: rustAppImage,
    },
    {
      id: 'project3',
      title: 'Project 3',
      description: 'Description for Project 3',
      imageUrl: '',
    },
    {
      id: 'project4',
      title: 'Project 4',
      description: 'Description for Project 2',
      imageUrl: '',
    },
    {
      id: 'project5',
      title: 'Project 5',
      description: 'Description for Project 3',
      imageUrl: '',
    },
    {
      id: 'project6',
      title: 'Project 6',
      description: 'Description for Project 3',
      imageUrl: '',
    },
    // Add more projects as needed
  ];

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="language-switch-container">
          <LanguageSwitch changeLanguage={changeLanguage} t={t} />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/portfolio"
            element={<Portfolio projects={projects} />} // Pass projects to Portfolio
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
