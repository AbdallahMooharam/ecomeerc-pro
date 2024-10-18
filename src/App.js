import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './compo/ThemeContext.jsx'; // استيراد ThemeProvider
import Navbar from './compo/Navbar.jsx';
import Footer from './compo/Footer.jsx';
import Home from './Padgs/Home';
import AboutUs from './Padgs/About';
import ContactUs from './Padgs/contact';
import Product from './Padgs/Product';
import Profile from './Padgs/Profile';
import Register from './Padgs/Register';

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 1.1,
  },
};

function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <AnimatePresence>
          <Routes location={location} key={location.key}>
            <Route path="/" element={
              <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={{ duration: 0.5 }}>
                <Home />
              </motion.div>
            } />
            <Route path="/about" element={
              <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={{ duration: 0.5 }}>
                <AboutUs />
              </motion.div>
            } />
            <Route path="/product" element={
              <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={{ duration: 0.5 }}>
                <Product />
              </motion.div>
            } />
            <Route path="/contact" element={
              <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={{ duration: 0.5 }}>
                <ContactUs />
              </motion.div>
            } />
            <Route path="/profile" element={
              <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={{ duration: 0.5 }}>
                <Profile />
              </motion.div>
            } />
            <Route path="/register" element={
              <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={{ duration: 0.5 }}>
                <Register />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
