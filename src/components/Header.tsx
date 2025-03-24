
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedContainer from './AnimatedContainer';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "glass shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <AnimatedContainer animation="fade-in" duration={800}>
          <Link to="/" className="flex items-center space-x-2 group">
            <Lightbulb className="w-8 h-8 text-primary transition-transform duration-500 group-hover:scale-110" />
            <span className="font-semibold text-xl tracking-tight">BizIdea</span>
          </Link>
        </AnimatedContainer>
        
        <AnimatedContainer animation="fade-in" delay={200} duration={800}>
          <nav className="flex items-center space-x-6">
            <Link 
              to="/" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === "/" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Home
            </Link>
            <Link 
              to="/results" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname.includes("/results") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Results
            </Link>
          </nav>
        </AnimatedContainer>
      </div>
    </header>
  );
};

export default Header;
