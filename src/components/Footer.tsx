
import React from 'react';
import { Heart } from 'lucide-react';
import AnimatedContainer from './AnimatedContainer';

const Footer = () => {
  return (
    <footer className="py-8 mt-auto border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedContainer animation="fade-in" duration={800}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} BizIdea. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Crafted with</span>
              <Heart className="h-4 w-4 text-destructive animate-pulse" />
              <span>for entrepreneurs</span>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </footer>
  );
};

export default Footer;
