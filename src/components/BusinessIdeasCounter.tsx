
import React, { useEffect, useState } from 'react';
import { expandedBusinessIdeas } from '@/data/businessIdeasExpanded';

const BusinessIdeasCounter = () => {
  const [count, setCount] = useState<number>(0);
  
  useEffect(() => {
    // Get the total count of business ideas in the database
    setCount(expandedBusinessIdeas.length);
  }, []);
  
  return (
    <div className="text-center mb-4">
      <span className="bg-primary/10 text-primary font-medium rounded-full px-3 py-1">
        Total Business Ideas in Database: {count}
      </span>
    </div>
  );
};

export default BusinessIdeasCounter;
