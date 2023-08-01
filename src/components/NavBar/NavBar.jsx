import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './NavBarStyles.css'

export default function NavBar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      setIsVisible(currentScrollPosition < scrollPosition || currentScrollPosition < 200);
      setScrollPosition(currentScrollPosition);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  return (
    <nav
    className={`font-roboto-slab font-regular flex items-center justify-between py-10 px-10 bg-black text-white fixed w-full transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    style={{ opacity: Math.max(1 - scrollPosition / 300, 0) }}
  >
    <div className="flex items-center space-x-10">
      <FontAwesomeIcon
        icon={faBars}
        size="lg"
        className="md:hidden cursor-pointer" // changed from sm:hidden to md:hidden
        onClick={() => setMenuOpen(!menuOpen)}
      />

      <div className="text-2xl font-bold mr-10 md:mx-auto">
        <Link href='/'> Marine Mirage</Link>
      </div>
    </div>

    <div className={`fixed top-0 left-0 h-full w-full bg-black transition-all duration-300 ${menuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'} md:static md:bg-transparent md:max-h-full md:w-auto md:flex md:items-center md:space-x-10`}> 
      <div className="h-full w-full flex flex-col items-center justify-center space-y-10 md:flex-row md:space-x-10 md:space-y-0"> 
        <a href="!#" className="text-white hover:text-blue-300">Link1</a>
        <a href="!#" className="text-white hover:text-blue-300">Link2</a>
        <a href="!#" className="text-white hover:text-blue-300">Link3</a>
        <a href="!#" className="text-white hover:text-blue-300">Link4</a>
      </div>
    </div>

    <div className="flex space-x-10 items-center">
      <FontAwesomeIcon icon={faHome} size="lg" className="hidden md:block" /> 
      <FontAwesomeIcon icon={faInfoCircle} size="lg" className="hidden md:block" /> 
      <FontAwesomeIcon icon={faEnvelope} size="lg" className="hidden md:block" /> 
      <div className="relative md:hidden">
        <FontAwesomeIcon icon={menuOpen ? faTimes : faShoppingCart} size="lg" className="cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}/>
      </div>
      <div className="relative hidden md:block">
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      </div>
    </div>
  </nav>
)
}