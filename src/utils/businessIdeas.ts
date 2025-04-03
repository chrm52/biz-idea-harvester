import { BusinessIdea } from '@/components/ResultCard';
import { expandedBusinessIdeas } from '@/data/businessIdeasExpanded';

interface UserFormData {
  skills: string[];
  interests: string[];
  experience: string;
  investmentLevel: string;
  location: string;
  goals: string[];
  // New fields
  educationBackground: string;
  timeCommitment: string;
  targetMarket: string;
  riskTolerance: string;
  techComfort: string;
  businessModelPreference: string[];
  incomePreference: string;
  industries: string[];
  hobbies?: string[]; // Add hobbies field
}

// Use the expanded business ideas database
const businessIdeasDatabase: BusinessIdea[] = expandedBusinessIdeas;

// Function to calculate match score between user data and business idea
const calculateMatchScore = (userData: UserFormData, idea: BusinessIdea): number => {
  let score = 0;
  
  // Match skills
  userData.skills.forEach(skill => {
    if (idea.tags.includes(skill)) {
      score += 10;
    }
  });
  
  // Match interests
  userData.interests.forEach(interest => {
    if (idea.tags.includes(interest)) {
      score += 5;
    }
  });

  // Match industries
  userData.industries.forEach(industry => {
    if (idea.tags.includes(industry)) {
      score += 15;
    }
  });
  
  // Match experience level
  if (idea.difficulty === userData.experience) {
    score += 15;
  } else if (
    (userData.experience === 'beginner' && idea.difficulty === 'beginner') ||
    (userData.experience === 'intermediate' && 
     (idea.difficulty === 'beginner' || idea.difficulty === 'intermediate')) ||
    (userData.experience === 'expert')
  ) {
    score += 7;
  }
  
  // Match investment level
  if (idea.investmentLevel === userData.investmentLevel) {
    score += 15;
  } else if (
    (userData.investmentLevel === 'high') ||
    (userData.investmentLevel === 'medium' && 
     (idea.investmentLevel === 'medium' || idea.investmentLevel === 'low')) ||
    (userData.investmentLevel === 'low' && idea.investmentLevel === 'low')
  ) {
    score += 7;
  }
  
  // Match time commitment
  if (
    (userData.timeCommitment === 'full-time' && idea.timeCommitment === 'high') ||
    (userData.timeCommitment === 'part-time' && idea.timeCommitment === 'medium') ||
    (userData.timeCommitment === 'minimal' && idea.timeCommitment === 'low')
  ) {
    score += 12;
  }
  
  // Match risk tolerance
  if (
    (userData.riskTolerance === 'high' && idea.potentialReturn === 'high') ||
    (userData.riskTolerance === 'medium' && idea.potentialReturn === 'medium') ||
    (userData.riskTolerance === 'low' && idea.potentialReturn === 'low')
  ) {
    score += 10;
  }
  
  // Match business model preference if applicable
  if (userData.businessModelPreference.length > 0) {
    const modelMatchScore = userData.businessModelPreference.some(model => {
      const modelLower = model.toLowerCase();
      const descriptionLower = idea.description.toLowerCase();
      return descriptionLower.includes(modelLower);
    }) ? 10 : 0;
    
    score += modelMatchScore;
  }
  
  // Match target market
  if (
    (userData.targetMarket === 'local' && idea.description.toLowerCase().includes('local')) ||
    (userData.targetMarket === 'national' && !idea.description.toLowerCase().includes('global')) ||
    (userData.targetMarket === 'global' && idea.description.toLowerCase().includes('online'))
  ) {
    score += 8;
  }
  
  // Match income preference
  if (
    (userData.incomePreference === 'quick-cash' && idea.timeCommitment === 'low') ||
    (userData.incomePreference === 'steady' && idea.timeCommitment === 'medium') ||
    (userData.incomePreference === 'long-term-growth' && idea.timeCommitment === 'high' && idea.potentialReturn === 'high')
  ) {
    score += 12;
  }
  
  // Match goals (if applicable)
  userData.goals.forEach(goal => {
    if (
      (goal === 'Passive Income' && idea.timeCommitment === 'low') ||
      (goal === 'Full-time Business' && idea.timeCommitment === 'high') ||
      (goal === 'Side Hustle' && idea.timeCommitment === 'medium') ||
      (goal === 'Creative Outlet' && idea.tags.some(tag => ['Art', 'Writing', 'Design', 'Music', 'Photography'].includes(tag))) ||
      (goal === 'Social Impact' && idea.tags.some(tag => ['Environment', 'Education', 'Health'].includes(tag))) ||
      (goal === 'Wealth Building' && idea.potentialReturn === 'high')
    ) {
      score += 10;
    }
  });
  
  return score;
};

// Function to generate personalized business ideas based on user data
export const generateBusinessIdeas = (userData: UserFormData): BusinessIdea[] => {
  // Calculate match scores for all ideas
  const ideasWithScores = businessIdeasDatabase.map(idea => ({
    idea,
    score: calculateMatchScore(userData, idea)
  }));
  
  // Sort by match score (descending)
  ideasWithScores.sort((a, b) => b.score - a.score);
  
  // Return top 8 ideas
  return ideasWithScores.slice(0, 8).map(item => {
    // Add related hobbies to the business idea if the user has hobbies
    if (userData.hobbies && userData.hobbies.length > 0) {
      // Find intersection between user hobbies and idea tags
      const relatedHobbies = userData.hobbies.filter(hobby => 
        item.idea.tags.some(tag => tag.toLowerCase().includes(hobby.toLowerCase()))
      );
      
      // Add up to 3 random hobbies if no direct matches
      if (relatedHobbies.length === 0 && userData.hobbies.length > 0) {
        const randomHobbies = [...userData.hobbies].sort(() => 0.5 - Math.random()).slice(0, 3);
        return {
          ...item.idea,
          relatedHobbies: randomHobbies
        };
      }
      
      return {
        ...item.idea,
        relatedHobbies: relatedHobbies.length > 0 ? relatedHobbies : undefined
      };
    }
    
    return item.idea;
  });
};
