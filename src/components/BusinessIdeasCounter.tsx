
import React, { useEffect, useState } from 'react';
import { expandedBusinessIdeas } from '@/data/businessIdeasExpanded';

const BusinessIdeasCounter = () => {
  const [count, setCount] = useState<number>(0);
  
  useEffect(() => {
    // Get the total count of business ideas in the database
    const totalCount = expandedBusinessIdeas.length;
    setCount(totalCount);
    
    // Log the count to console for reference
    console.log(`Total business ideas in database: ${totalCount}`);
    
    // Log some sample ideas to verify the data
    console.log('Sample ideas:', expandedBusinessIdeas.slice(0, 3));
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
