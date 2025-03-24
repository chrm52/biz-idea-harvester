
import React from 'react';
import { Sparkles, ArrowDown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UserForm from '@/components/UserForm';
import AnimatedContainer from '@/components/AnimatedContainer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-32">
          <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 filter blur-3xl animate-float" />
            <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full bg-blue-400/10 filter blur-3xl animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-purple-400/10 filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </div>
          
          <div className="container max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <AnimatedContainer animation="slide-down" duration={800}>
                <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-6">
                  <Sparkles className="h-4 w-4 mr-2" />
                  <span>Discover Your Business Potential</span>
                </div>
              </AnimatedContainer>
              
              <AnimatedContainer animation="fade-in" delay={300} duration={1000}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Find Your Perfect <span className="text-primary">Business Idea</span>
                </h1>
              </AnimatedContainer>
              
              <AnimatedContainer animation="fade-in" delay={600} duration={1000}>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                  Answer a few questions and we'll suggest business ideas tailored to your skills, interests, and goals. Start your entrepreneurial journey today.
                </p>
              </AnimatedContainer>
              
              <AnimatedContainer animation="fade-in" delay={900} duration={1000}>
                <a 
                  href="#form-section"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  <span className="mr-2">Get Started</span>
                  <ArrowDown className="h-4 w-4 animate-bounce" />
                </a>
              </AnimatedContainer>
            </div>
          </div>
        </section>
        
        {/* Form Section */}
        <section id="form-section" className="section-padding bg-accent/50">
          <div className="container mx-auto">
            <AnimatedContainer animation="fade-in" duration={800}>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Tell Us About Yourself</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We'll use this information to suggest business ideas that align with your profile, 
                  preferences, and goals.
                </p>
              </div>
            </AnimatedContainer>
            
            <UserForm />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
