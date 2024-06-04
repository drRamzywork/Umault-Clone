// components/Header.js
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 right-0 bg-transparent text-white p-4 z-50"
    >
      <div className="container mx-auto flex justify-between items-center bg-red">
        <h1 className="text-2xl font-bold">Umault Clone</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
