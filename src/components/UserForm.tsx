
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { toast } from 'sonner';
import AnimatedContainer from './AnimatedContainer';
import { cn } from '@/lib/utils';

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
}

const initialFormData: UserFormData = {
  skills: [],
  interests: [],
  experience: 'beginner',
  investmentLevel: 'low',
  location: '',
  goals: [],
  // New fields initialized
  educationBackground: '',
  timeCommitment: 'part-time',
  targetMarket: 'local',
  riskTolerance: 'medium',
  techComfort: 'moderate',
  businessModelPreference: [],
  incomePreference: 'steady',
  industries: []
};

const skillOptions = [
  'Programming', 'Design', 'Marketing', 'Sales', 'Finance', 
  'Management', 'Writing', 'Teaching', 'Cooking', 'Photography'
];

const interestOptions = [
  'Technology', 'Food', 'Health', 'Education', 'Environment', 
  'Fashion', 'Travel', 'Sports', 'Art', 'Music'
];

const goalOptions = [
  'Passive Income', 'Full-time Business', 'Side Hustle', 
  'Creative Outlet', 'Social Impact', 'Wealth Building'
];

// New options for added fields
const industryOptions = [
  'E-commerce', 'SaaS', 'Health & Wellness', 'Education', 'Finance', 
  'Food & Beverage', 'Real Estate', 'Media & Entertainment', 'Manufacturing', 'Consulting'
];

const businessModelOptions = [
  'Product-based', 'Service-based', 'Subscription', 'Marketplace', 
  'Franchise', 'Dropshipping', 'Affiliate Marketing', 'Advertising'
];

const UserForm = () => {
  const [formData, setFormData] = useState<UserFormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const steps = [
    { 
      title: "Skills & Expertise", 
      description: "What are you good at?" 
    },
    { 
      title: "Interests & Passions", 
      description: "What industries or topics excite you?" 
    },
    { 
      title: "Experience & Education", 
      description: "Tell us about your background" 
    },
    { 
      title: "Investment & Time", 
      description: "Your resources and availability" 
    },
    { 
      title: "Location & Market", 
      description: "Your target audience and location" 
    },
    { 
      title: "Business Preferences", 
      description: "Your preferred business model and risk appetite" 
    },
    { 
      title: "Goals & Ambitions", 
      description: "What are you looking to achieve?" 
    }
  ];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prevStep => prevStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prevStep => prevStep - 1);
    }
  };

  const handleCheckboxChange = (category: keyof Pick<UserFormData, 'skills' | 'interests' | 'goals' | 'businessModelPreference' | 'industries'>, value: string) => {
    setFormData(prev => {
      if (prev[category].includes(value)) {
        return {
          ...prev,
          [category]: prev[category].filter(item => item !== value)
        };
      } else {
        return {
          ...prev,
          [category]: [...prev[category], value]
        };
      }
    });
  };

  const handleRadioChange = (
    category: keyof Pick<UserFormData, 'experience' | 'investmentLevel' | 'timeCommitment' | 'targetMarket' | 'riskTolerance' | 'techComfort' | 'incomePreference'>, 
    value: string
  ) => {
    setFormData(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const handleInputChange = (
    category: keyof Pick<UserFormData, 'location' | 'educationBackground'>, 
    value: string
  ) => {
    setFormData(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Store form data in sessionStorage
    sessionStorage.setItem('userFormData', JSON.stringify(formData));
    
    // Simulate API call with artificial delay
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Information submitted successfully!");
      navigate('/results');
    }, 1500);
  };

  const renderStepIndicator = () => (
    <div className="flex justify-center mb-8 overflow-x-auto pb-4">
      <div className="flex items-center">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div 
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                currentStep === index 
                  ? "bg-primary text-white" 
                  : currentStep > index 
                    ? "bg-primary/20 text-primary" 
                    : "bg-muted text-muted-foreground"
              )}
            >
              {currentStep > index ? (
                <Check className="w-4 h-4" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            {index < steps.length - 1 && (
              <div 
                className={cn(
                  "h-0.5 w-8 md:w-8 transition-all duration-300",
                  currentStep > index ? "bg-primary" : "bg-muted"
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <AnimatedContainer animation="fade-in" className="form-step">
            <h3 className="text-lg font-medium mb-1">{steps[currentStep].title}</h3>
            <p className="text-muted-foreground mb-6">{steps[currentStep].description}</p>
            
            <div className="form-field">
              <label className="form-label">Select your skills (choose all that apply)</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skillOptions.map(skill => (
                  <label 
                    key={skill} 
                    className={cn(
                      "subtle-glass flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200",
                      formData.skills.includes(skill) ? "ring-2 ring-primary/50 bg-primary/5" : ""
                    )}
                  >
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={formData.skills.includes(skill)}
                      onChange={() => handleCheckboxChange('skills', skill)}
                    />
                    <span>{skill}</span>
                    {formData.skills.includes(skill) && (
                      <Check className="ml-auto h-4 w-4 text-primary" />
                    )}
                  </label>
                ))}
              </div>
            </div>
          </AnimatedContainer>
        );
      case 1:
        return (
          <AnimatedContainer animation="fade-in" className="form-step">
            <h3 className="text-lg font-medium mb-1">{steps[currentStep].title}</h3>
            <p className="text-muted-foreground mb-6">{steps[currentStep].description}</p>
            
            <div className="form-field">
              <label className="form-label">Select industries that interest you (choose all that apply)</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {industryOptions.map(industry => (
                  <label 
                    key={industry} 
                    className={cn(
                      "subtle-glass flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200",
                      formData.industries.includes(industry) ? "ring-2 ring-primary/50 bg-primary/5" : ""
                    )}
                  >
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={formData.industries.includes(industry)}
                      onChange={() => handleCheckboxChange('industries', industry)}
                    />
                    <span>{industry}</span>
                    {formData.industries.includes(industry) && (
                      <Check className="ml-auto h-4 w-4 text-primary" />
                    )}
                  </label>
                ))}
              </div>
            </div>
            
            <div className="form-field">
              <label className="form-label">Select your personal interests (choose all that apply)</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {interestOptions.map(interest => (
                  <label 
                    key={interest} 
                    className={cn(
                      "subtle-glass flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200",
                      formData.interests.includes(interest) ? "ring-2 ring-primary/50 bg-primary/5" : ""
                    )}
                  >
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleCheckboxChange('interests', interest)}
                    />
                    <span>{interest}</span>
                    {formData.interests.includes(interest) && (
                      <Check className="ml-auto h-4 w-4 text-primary" />
                    )}
                  </label>
                ))}
              </div>
            </div>
          </AnimatedContainer>
        );
      case 2:
        return (
          <AnimatedContainer animation="fade-in" className="form-step">
            <h3 className="text-lg font-medium mb-1">{steps[currentStep].title}</h3>
            <p className="text-muted-foreground mb-6">{steps[currentStep].description}</p>
            
            <div className="form-field">
              <label className="form-label">Business experience level</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {['beginner', 'intermediate', 'expert'].map(level => (
                  <label 
                    key={level} 
                    className={cn(
                      "subtle-glass flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200",
                      formData.experience === level ? "ring-2 ring-primary/50 bg-primary/5" : ""
                    )}
                  >
                    <input
                      type="radio"
                      className="sr-only"
                      name="experience"
                      value={level}
                      checked={formData.experience === level}
                      onChange={() => handleRadioChange('experience', level)}
                    />
                    <span className="capitalize">{level}</span>
                    {formData.experience === level && (
                      <Check className="ml-auto h-4 w-4 text-primary" />
                    )}
                  </label>
                ))}
              </div>
            </div>
            
            <div className="form-field">
              <label className="form-label">Educational background (highest level or field of study)</label>
              <input
                type="text"
                className="subtle-glass w-full p-3 rounded-lg focus:ring-2 focus:ring-primary/50 outline-none"
                placeholder="e.g. Bachelor's in Marketing, Self-taught developer"
                value={formData.educationBackground}
                onChange={(e) => handleInputChange('educationBackground', e.target.value)}
              />
            </div>
          </AnimatedContainer>
        );
      case 3:
        return (
          <AnimatedContainer animation="fade-in" className="form-step">
            <h3 className="text-lg font-medium mb-1">{steps[currentStep].title}</h3>
            <p className="text-muted-foreground mb-6">{steps[currentStep].description}</p>
            
            <div className="form-field">
              <label className="form-label">Initial investment capacity</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {['low', 'medium', 'high'].map(level => (
                  <label 
                    key={level} 
                    className={cn(
                      "subtle-glass flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200",
                      formData.investmentLevel === level ? "ring-2 ring-primary/50 bg-primary/5" : ""
                    )}
                  >
                    <input
                      type="radio"
                      className="sr-only"
                      name="investmentLevel"
                      value={level}
                      checked={formData.investmentLevel === level}
                      onChange={() => handleRadioChange('investmentLevel', level)}
                    />
                    <span className="capitalize">{level}</span>
                    {formData.investmentLevel === level && (
                      <Check className="ml-auto h-4 w-4 text-primary" />
                    )}
                  </label>
                ))}
              </div>
            </div>
            
            <div className="form-field">
              <label className="form-label">Time commitment</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {['part-time', 'full-time', 'minimal'].map(level => (
                  <label 
                    key={level} 
                    className={cn(
                      "subtle-glass flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200",
                      formData.timeCommitment === level ? "ring-2 ring-primary/50 bg-primary/5" : ""
                    )}
                  >
                    <input
                      type="radio"
                      className="sr-only"
                      name="timeCommitment"
                      value={level}
                      checked={formData.timeCommitment === level}
                      onChange={() => handleRadioChange('timeCommitment', level)}
                    />
                    <span className="capitalize">{level}</span>
                    {formData.timeCommitment === level && (
                      <Check className="ml-auto h-4 w-4 text-primary" />
                    )}
                  </label>
                ))}
              </div>
            </div>
          </AnimatedContainer>
        );
      case 4:
        return (
          <AnimatedContainer animation="fade-in" className="form-step">
            <h3 className="text-lg font-medium mb-1">{steps[currentStep].title}</h3>
            <p className="text-muted-foreground mb-6">{steps[currentStep].description}</p>
            
            <div className="form-field">
              <label className="form-label">Your location (city, country)</label>
              <input
                type="text"
                className="subtle-glass w-full p-3 rounded-lg focus:ring-2 focus:ring-primary/50 outline-none"
                placeholder="e.g. New York, USA"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
              />
            </div>
            
            <div className="form-field">
              <label className="form-label">Target market</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {['local', 'national', 'global'].map(market => (
                  <label 
                    key={market} 
                    className={cn(
                      "subtle-glass flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200",
                      formData.targetMarket === market ? "ring-2 ring-primary/50 bg-primary/5" : ""
                    )}
                  >
                    <input
                      type="radio"
                      className="sr-only"
                      name="targetMarket"
                      value={market}
                      checked={formData.targetMarket === market}
                      onChange={() => handleRadioChange('targetMarket', market)}
                    />
                    <span className="capitalize">{market}</span>
                    {formData.targetMarket === market && (
                      <Check className="ml-auto h-4 w-4 text-primary" />
                    )}
                  </label>
                ))}
              </div>
            </div>
          </AnimatedContainer>
        );
      case 5:
        return (
          <AnimatedContainer animation="fade-in" className="form-step">
            <h3 className="text-lg font-medium mb-1">{steps[currentStep].title}</h3>
            <p className="text-muted-foreground mb-6">{steps[currentStep].description}</p>
            
            <div className="form-field">
              <label className="form-label">Risk tolerance</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {['low', 'medium', 'high'].map(level => (
                  <label 
                    key={level} 
                    className={cn(
                      "subtle-glass flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200",
                      formData.riskTolerance === level ? "ring-2 ring-primary/50 bg-primary/5" : ""
                    )}
                  >
                    <input
                      type="radio"
                      className="sr-only"
                      name="riskTolerance"
                      value={level}
                      checked={formData.riskTolerance === level}
                      onChange={() => handleRadioChange('riskTolerance', level)}
                    />
                    <span className="capitalize">{level}</span>
                    {formData.riskTolerance === level && (
                      <Check className="ml-auto h-4 w-4 text-primary" />
                    )}
                  </label>
                ))}
              </div>
            </div>
            
            <div className="form-field">
              <label className="form-label">Technology comfort level</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {['minimal', 'moderate', 'advanced'].map(level => (
                  <label 
                    key={level} 
                    className={cn(
                      "subtle-glass flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200",
                      formData.techComfort === level ? "ring-2 ring-primary/50 bg-primary/5" : ""
                    )}
                  >
                    <input
                      type="radio"
                      className="sr-only"
                      name="techComfort"
                      value={level}
                      checked={formData.techComfort === level}
                      onChange={() => handleRadioChange('techComfort', level)}
                    />
                    <span className="capitalize">{level}</span>
                    {formData.techComfort === level && (
                      <Check className="ml-auto h-4 w-4 text-primary" />
                    )}
                  </label>
                ))}
              </div>
            </div>
            
            <div className="form-field">
              <label className="form-label">Business model preference (choose all that apply)</label>
              <div className="grid grid-cols-2 gap-3">
                {businessModelOptions.map(model => (
                  <label 
                    key={model} 
                    className={cn(
                      "subtle-glass flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200",
                      formData.businessModelPreference.includes(model) ? "ring-2 ring-primary/50 bg-primary/5" : ""
                    )}
                  >
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={formData.businessModelPreference.includes(model)}
                      onChange={() => handleCheckboxChange('businessModelPreference', model)}
                    />
                    <span>{model}</span>
                    {formData.businessModelPreference.includes(model) && (
                      <Check className="ml-auto h-4 w-4 text-primary" />
                    )}
                  </label>
                ))}
              </div>
            </div>
          </AnimatedContainer>
        );
      case 6:
        return (
          <AnimatedContainer animation="fade-in" className="form-step">
            <h3 className="text-lg font-medium mb-1">{steps[currentStep].title}</h3>
            <p className="text-muted-foreground mb-6">{steps[currentStep].description}</p>
            
            <div className="form-field">
              <label className="form-label">Income preference</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {['quick-cash', 'steady', 'long-term-growth'].map(pref => (
                  <label 
                    key={pref} 
                    className={cn(
                      "subtle-glass flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200",
                      formData.incomePreference === pref ? "ring-2 ring-primary/50 bg-primary/5" : ""
                    )}
                  >
                    <input
                      type="radio"
                      className="sr-only"
                      name="incomePreference"
                      value={pref}
                      checked={formData.incomePreference === pref}
                      onChange={() => handleRadioChange('incomePreference', pref)}
                    />
                    <span className="capitalize">{pref.replace(/-/g, ' ')}</span>
                    {formData.incomePreference === pref && (
                      <Check className="ml-auto h-4 w-4 text-primary" />
                    )}
                  </label>
                ))}
              </div>
            </div>
            
            <div className="form-field">
              <label className="form-label">Select your business goals (choose all that apply)</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {goalOptions.map(goal => (
                  <label 
                    key={goal} 
                    className={cn(
                      "subtle-glass flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200",
                      formData.goals.includes(goal) ? "ring-2 ring-primary/50 bg-primary/5" : ""
                    )}
                  >
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={formData.goals.includes(goal)}
                      onChange={() => handleCheckboxChange('goals', goal)}
                    />
                    <span>{goal}</span>
                    {formData.goals.includes(goal) && (
                      <Check className="ml-auto h-4 w-4 text-primary" />
                    )}
                  </label>
                ))}
              </div>
            </div>
          </AnimatedContainer>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {renderStepIndicator()}
      
      <form onSubmit={handleSubmit} className="subtle-glass p-6 md:p-8 rounded-2xl">
        {renderStepContent()}
        
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={handlePrevStep}
            disabled={currentStep === 0}
            className={cn(
              "flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200",
              currentStep === 0 
                ? "opacity-0 pointer-events-none" 
                : "hover:bg-muted"
            )}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </button>
          
          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-all duration-200"
            >
              <span>Next</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-all duration-200 disabled:opacity-70"
            >
              <span>{isSubmitting ? "Generating Ideas..." : "Get Business Ideas"}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserForm;
