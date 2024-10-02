import { useState, useEffect } from 'react';
import styles from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBar from './components/NavBar';

import routes from '~react-pages'
import { useRoutes } from 'react-router-dom';


function App() {
  const [menuClose, setMenuClose] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleMenu = () => setMenuClose(!menuClose);

  const handleSearchToggle = (e) => {
    if (windowWidth < 576) {
      e.preventDefault();
      setSearchOpen(!searchOpen);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setMenuClose(window.innerWidth < 768);
      if (window.innerWidth > 576) setSearchOpen(false);
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.body}>
      <Sidebar menuClose={menuClose} />
      <div className={styles.content}>
        <NavBar menuClose={menuClose} handleMenu={handleMenu} searchOpen={searchOpen} handleSearchToggle={handleSearchToggle} />
        <main>
          {useRoutes(routes)}
        </main>
      </div>
    </div>
  );
}

export default App;
