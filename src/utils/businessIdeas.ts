
import { BusinessIdea } from '@/components/ResultCard';

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

// This is a small sample of the business ideas database
// In a production app, this would be replaced with your 2000+ ideas dataset
// The actual implementation would likely load this from an external JSON file or API
const businessIdeasDatabase: BusinessIdea[] = [
  {
    id: "1",
    title: "Custom Web Development Agency",
    description: "Start a boutique web development agency focusing on clean, modern websites for small to medium businesses. Leverage your programming skills to create high-quality sites that stand out.",
    investmentLevel: "low",
    difficulty: "intermediate",
    timeCommitment: "high",
    potentialReturn: "high",
    tags: ["Programming", "Technology", "Design"]
  },
  {
    id: "2",
    title: "Food Blog with Affiliate Marketing",
    description: "Create a food blog focusing on your culinary specialty. Monetize through affiliate marketing of kitchen equipment, cookbooks, and food products.",
    investmentLevel: "low",
    difficulty: "beginner",
    timeCommitment: "medium",
    potentialReturn: "medium",
    tags: ["Cooking", "Food", "Writing"]
  },
  {
    id: "3",
    title: "Personal Finance Coaching",
    description: "Offer one-on-one coaching to help people manage their personal finances, create budgets, and build investment portfolios.",
    investmentLevel: "low",
    difficulty: "intermediate",
    timeCommitment: "medium",
    potentialReturn: "medium",
    tags: ["Finance", "Teaching"]
  },
  {
    id: "4",
    title: "Photography Services Business",
    description: "Offer specialized photography services for events, portraits, or commercial needs. Focus on building a unique style that differentiates you in the market.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "medium",
    potentialReturn: "medium",
    tags: ["Photography", "Art"]
  },
  {
    id: "5",
    title: "Mobile App Development",
    description: "Develop mobile applications targeting specific niches or solving particular problems. Focus on creating intuitive, useful apps with monetization strategies.",
    investmentLevel: "low",
    difficulty: "expert",
    timeCommitment: "high",
    potentialReturn: "high",
    tags: ["Programming", "Technology"]
  },
  {
    id: "6",
    title: "Online Fitness Coaching",
    description: "Create personalized fitness programs and provide coaching services through a subscription-based model. Focus on specific demographics or fitness goals.",
    investmentLevel: "low",
    difficulty: "intermediate",
    timeCommitment: "medium",
    potentialReturn: "medium",
    tags: ["Health", "Sports", "Teaching"]
  },
  {
    id: "7",
    title: "E-commerce Store for Handmade Products",
    description: "Start an online store selling handmade or curated products in a specific niche. Focus on quality and brand storytelling to differentiate yourself.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "high",
    potentialReturn: "medium",
    tags: ["Sales", "Fashion", "Art"]
  },
  {
    id: "8",
    title: "Content Marketing Agency",
    description: "Help businesses create and distribute valuable content that attracts and engages their target audience, ultimately driving profitable customer action.",
    investmentLevel: "low",
    difficulty: "intermediate",
    timeCommitment: "high",
    potentialReturn: "high",
    tags: ["Marketing", "Writing", "Technology"]
  },
  {
    id: "9",
    title: "Sustainable Travel Consulting",
    description: "Help travel companies and destinations develop and implement sustainable tourism practices that minimize environmental impact while maximizing social benefits.",
    investmentLevel: "low",
    difficulty: "expert",
    timeCommitment: "medium",
    potentialReturn: "medium",
    tags: ["Travel", "Environment", "Consulting"]
  },
  {
    id: "10",
    title: "Educational YouTube Channel",
    description: "Create a YouTube channel focused on educational content in your area of expertise. Monetize through ads, sponsors, merchandise, and online courses.",
    investmentLevel: "low",
    difficulty: "beginner",
    timeCommitment: "medium",
    potentialReturn: "medium",
    tags: ["Teaching", "Technology", "Video"]
  },
  {
    id: "11",
    title: "Local Food Delivery Service",
    description: "Create a delivery service connecting local restaurants with customers. Focus on quality, reliability, and supporting local businesses.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "high",
    potentialReturn: "medium",
    tags: ["Food", "Logistics", "Technology"]
  },
  {
    id: "12",
    title: "Subscription Box Service",
    description: "Start a subscription box service curating products in a specific niche (e.g., artisanal foods, self-care products, hobby supplies).",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "medium",
    potentialReturn: "medium",
    tags: ["Sales", "Curation", "Marketing"]
  },
  {
    id: "13",
    title: "Social Media Management",
    description: "Offer social media management services to businesses that want to increase their online presence but lack the time or expertise to do it themselves.",
    investmentLevel: "low",
    difficulty: "intermediate",
    timeCommitment: "medium",
    potentialReturn: "medium",
    tags: ["Marketing", "Technology", "Writing"]
  },
  {
    id: "14",
    title: "Eco-Friendly Home Products",
    description: "Create and sell sustainable, eco-friendly products for the home, focusing on reducing waste and using environmentally conscious materials.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "high",
    potentialReturn: "medium",
    tags: ["Environment", "Design", "Sales"]
  },
  {
    id: "15",
    title: "Virtual Event Planning",
    description: "Help companies plan and execute virtual events, conferences, and team-building activities in the increasingly remote work environment.",
    investmentLevel: "low",
    difficulty: "intermediate",
    timeCommitment: "medium",
    potentialReturn: "medium",
    tags: ["Management", "Technology", "Planning"]
  }
];

// Simulate a larger dataset by adding a function to generate more ideas
// In a real implementation, you would replace this with your actual dataset loading
const getExtendedBusinessIdeasDatabase = (): BusinessIdea[] => {
  // Start with our sample database
  const extendedDatabase = [...businessIdeasDatabase];
  
  // Add more dynamically generated ideas to simulate a larger dataset
  // This is just a placeholder for demonstration - you would replace this with your 2000+ ideas
  const industries = ["Technology", "Health", "Education", "Food", "Retail", "Finance", "Entertainment", "Travel", "Sports", "Fashion", "Art", "Environment"];
  const businessTypes = ["Service", "Product", "Subscription", "Marketplace", "Platform", "Consulting", "Agency", "Store", "Coaching"];
  
  // Generate additional ideas (simulating a larger dataset)
  for (let i = 16; i <= 100; i++) {
    const industry = industries[Math.floor(Math.random() * industries.length)];
    const businessType = businessTypes[Math.floor(Math.random() * businessTypes.length)];
    
    extendedDatabase.push({
      id: i.toString(),
      title: `${industry} ${businessType} Business`,
      description: `A ${businessType.toLowerCase()} business in the ${industry.toLowerCase()} industry that leverages modern trends and technology to deliver value to customers.`,
      investmentLevel: ["low", "medium", "high"][Math.floor(Math.random() * 3)] as "low" | "medium" | "high",
      difficulty: ["beginner", "intermediate", "expert"][Math.floor(Math.random() * 3)] as "beginner" | "intermediate" | "expert",
      timeCommitment: ["low", "medium", "high"][Math.floor(Math.random() * 3)] as "low" | "medium" | "high",
      potentialReturn: ["low", "medium", "high"][Math.floor(Math.random() * 3)] as "low" | "medium" | "high",
      tags: [industry, businessType, ...industries.slice(0, 2 + Math.floor(Math.random() * 3))],
      relatedHobbies: industries.slice(0, 2 + Math.floor(Math.random() * 3))
    });
  }
  
  return extendedDatabase;
};

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
  // Get extended business ideas database
  const allBusinessIdeas = getExtendedBusinessIdeasDatabase();
  
  // Calculate match scores for all ideas
  const ideasWithScores = allBusinessIdeas.map(idea => ({
    idea,
    score: calculateMatchScore(userData, idea)
  }));
  
  // Sort by match score (descending)
  ideasWithScores.sort((a, b) => b.score - a.score);
  
  // Return top 8 ideas (increased from 6)
  return ideasWithScores.slice(0, 8).map(item => {
    // Add related hobbies to the business idea if the user has hobbies
    if (userData.hobbies && userData.hobbies.length > 0) {
      // Find intersection between user hobbies and idea tags
      const relatedHobbies = userData.hobbies.filter(hobby => 
        idea.tags.some(tag => tag.toLowerCase().includes(hobby.toLowerCase()))
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
