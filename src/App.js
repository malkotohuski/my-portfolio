import React, { useState } from 'react';
import Header from './Pages/Header';
import Portfolio from './Pages/Portfolio/';
import Home from './Pages/Home';
import LanguageSwitch from './Pages/LanguageSwitch';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import './App.css';

const App = () => {
  const { t } = useTranslation();
  const [isBulgaria, setisBulgaria] = useState(false);

  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
    setisBulgaria(lng === 'bg');
  };

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
    {
      title: 'Project 4',
      description: 'Description for Project 2',
      imageUrl: '',
    },
    {
      title: 'Project 5',
      description: 'Description for Project 3',
      imageUrl: '',
    },
    {
      title: 'Project 6',
      description: 'Description for Project 3',
      imageUrl: '',
    },
    // Add more projects as needed
  ];

  return (
    <div className="App">
      <Header />
      <div className="language-switch-container">
        <LanguageSwitch changeLanguage={changeLanguage} t={t} />
      </div>
      <Home />
      <Portfolio projects={projects} />
    </div>
  );
};

export default App;
