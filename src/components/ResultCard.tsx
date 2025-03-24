
import React from 'react';
import { Lightbulb, TrendingUp, Target, DollarSign, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedContainer from './AnimatedContainer';

export interface BusinessIdea {
  id: string;
  title: string;
  description: string;
  investmentLevel: 'low' | 'medium' | 'high';
  difficulty: 'beginner' | 'intermediate' | 'expert';
  timeCommitment: 'low' | 'medium' | 'high';
  potentialReturn: 'low' | 'medium' | 'high';
  tags: string[];
  // Add field for related hobbies
  relatedHobbies?: string[];
}

interface ResultCardProps {
  idea: BusinessIdea;
  index: number;
}

const ResultCard = ({ idea, index }: ResultCardProps) => {
  const getInvestmentColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-600';
      case 'medium': return 'text-yellow-600';
      case 'high': return 'text-red-600';
      default: return '';
    }
  };

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'text-green-600';
      case 'intermediate': return 'text-yellow-600';
      case 'expert': return 'text-red-600';
      default: return '';
    }
  };

  const getReturnColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-yellow-600';
      case 'medium': return 'text-green-600';
      case 'high': return 'text-blue-600';
      default: return '';
    }
  };

  return (
    <AnimatedContainer 
      animation="zoom-in"
      delay={index * 100}
      duration={600}
      className="result-card"
    >
      <div className="flex items-start mb-4">
        <div className="bg-primary/10 rounded-full p-2 mr-3">
          <Lightbulb className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-medium leading-tight">{idea.title}</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {idea.tags.map(tag => (
              <span key={tag} className="idea-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <p className="text-muted-foreground mb-6">
        {idea.description}
      </p>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
          <span className="text-sm mr-1">Investment:</span>
          <span className={cn("text-sm font-medium capitalize", getInvestmentColor(idea.investmentLevel))}>
            {idea.investmentLevel}
          </span>
        </div>
        
        <div className="flex items-center">
          <Target className="h-4 w-4 mr-2 text-muted-foreground" />
          <span className="text-sm mr-1">Difficulty:</span>
          <span className={cn("text-sm font-medium capitalize", getDifficultyColor(idea.difficulty))}>
            {idea.difficulty}
          </span>
        </div>
        
        <div className="flex items-center">
          <TrendingUp className="h-4 w-4 mr-2 text-muted-foreground" />
          <span className="text-sm mr-1">Return:</span>
          <span className={cn("text-sm font-medium capitalize", getReturnColor(idea.potentialReturn))}>
            {idea.potentialReturn}
          </span>
        </div>
        
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
          <span className="text-sm mr-1">Time:</span>
          <span className="text-sm font-medium capitalize">
            {idea.timeCommitment}
          </span>
        </div>
      </div>
      
      {/* Add related hobbies section if available */}
      {idea.relatedHobbies && idea.relatedHobbies.length > 0 && (
        <div className="mt-5 pt-4 border-t border-border/30">
          <span className="text-sm text-muted-foreground mb-2 block">Related Hobbies:</span>
          <div className="flex flex-wrap gap-2">
            {idea.relatedHobbies.map(hobby => (
              <span key={hobby} className="px-2 py-1 bg-primary/5 text-primary/80 text-xs rounded-full">
                {hobby}
              </span>
            ))}
          </div>
        </div>
      )}
    </AnimatedContainer>
  );
};

export default ResultCard;
