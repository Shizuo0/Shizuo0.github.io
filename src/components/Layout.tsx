import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-bg via-bg-secondary to-bg opacity-90" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <Header />

      {/* Conteúdo principal com animação */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="relative z-10"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
