
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RefreshCw, LightbulbIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ResultCard, { BusinessIdea } from '@/components/ResultCard';
import AnimatedContainer from '@/components/AnimatedContainer';
import { generateBusinessIdeas } from '@/utils/businessIdeas';

const Results = () => {
  const [businessIdeas, setBusinessIdeas] = useState<BusinessIdea[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve form data from sessionStorage
    const storedData = sessionStorage.getItem('userFormData');
    
    if (!storedData) {
      // If no data is found, redirect to the form page
      navigate('/');
      return;
    }
    
    // Generate business ideas based on user data
    const userData = JSON.parse(storedData);
    
    // Simulate API delay
    const timer = setTimeout(() => {
      const ideas = generateBusinessIdeas(userData);
      setBusinessIdeas(ideas);
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <AnimatedContainer animation="slide-down" duration={800}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <LightbulbIcon className="h-4 w-4 mr-2" />
                <span>Your Personalized Results</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Business Ideas Tailored for You
              </h1>
              
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Based on your skills, interests, hobbies, and goals, here are some business ideas that might be a great fit for you.
              </p>
            </div>
          </AnimatedContainer>
          
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-16">
              <RefreshCw className="h-10 w-10 text-primary animate-spin mb-4" />
              <p className="text-lg text-muted-foreground">
                Generating personalized business ideas for you...
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {businessIdeas.map((idea, index) => (
                <ResultCard key={idea.id} idea={idea} index={index} />
              ))}
            </div>
          )}
          
          <div className="text-center mt-16">
            <AnimatedContainer animation="fade-in" duration={800}>
              <button
                onClick={() => navigate('/')}
                className="bg-primary/10 hover:bg-primary/20 text-primary px-6 py-3 rounded-lg transition-colors"
              >
                Start Over
              </button>
            </AnimatedContainer>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Results;
