import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Blog from './pages/Blog';
import AdminPage from './pages/AdminPage';

function App() {
  const [content, setContent] = useState({
    header: 'Welcome to Our Website!',
    text: 'We are glad to have you here. Feel free to explore our content.',
  });

  const updateContent = (newContent) => {
    setContent(newContent);
  };

  return (
    <Router>
      <Header />
      <div style={{ marginTop: '60px' }}>
        <Routes>
          <Route path="/" element={<HomePage content={content} />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/admin" element={<AdminPage updateContent={updateContent} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
