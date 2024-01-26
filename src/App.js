import React from 'react';
import Header from './Pages/Header';
import Portfolio from './Pages/Portfolio/';
import Home from './Pages/Home';
import LanguageSwitch from './Pages/LanguageSwitch';
import i18n from 'i18next';
import { useTranslation, Trans } from 'react-i18next';
import rustImage from "../src/images/Rust.png"

import './App.css';

const App = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const projects = [
    {
      title: 'World of Rust',
      description: 'Description for Project 1',
      imageUrl: rustImage,
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
      <Trans>
        <Home />
        <Portfolio projects={projects} />
      </Trans>
    </div>
  );
};

export default App;
