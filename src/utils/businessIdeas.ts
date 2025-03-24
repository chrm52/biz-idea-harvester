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

// This is a sample of the business ideas database
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
  },
  {
    id: "16",
    title: "Online Language Tutoring",
    description: "Provide personalized language tutoring services via video calls. Offer specialized courses for different proficiency levels and professional contexts.",
    investmentLevel: "low",
    difficulty: "intermediate",
    timeCommitment: "medium",
    potentialReturn: "medium",
    tags: ["Education", "Languages", "Teaching"]
  },
  {
    id: "17",
    title: "Sustainable Home Products",
    description: "Create or curate eco-friendly home products that help reduce waste and environmental impact, such as reusable alternatives to single-use items.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "high",
    potentialReturn: "medium",
    tags: ["Environment", "Retail", "Design"]
  },
  {
    id: "18",
    title: "Tech Repair Service",
    description: "Offer repair services for smartphones, computers, and other electronics. Specialize in either quick fixes or more complex repairs that others avoid.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "medium",
    potentialReturn: "medium",
    tags: ["Technology", "Repair", "Service"]
  },
  {
    id: "19",
    title: "Podcast Production Agency",
    description: "Help businesses and individuals create professional-quality podcasts by offering recording, editing, publishing, and promotion services.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "medium",
    potentialReturn: "medium",
    tags: ["Audio", "Marketing", "Technology"]
  },
  {
    id: "20",
    title: "Digital Product Design",
    description: "Create and sell digital products like templates, design assets, online courses, or specialized software tools that solve specific problems.",
    investmentLevel: "low",
    difficulty: "intermediate",
    timeCommitment: "medium",
    potentialReturn: "high",
    tags: ["Design", "Technology", "Digital Products"]
  },
  {
    id: "21",
    title: "Virtual Interior Design",
    description: "Provide interior design services remotely, using video calls and digital renderings to help clients redesign their spaces without in-person visits.",
    investmentLevel: "low",
    difficulty: "intermediate",
    timeCommitment: "medium",
    potentialReturn: "medium",
    tags: ["Design", "Home", "Technology"]
  },
  {
    id: "22",
    title: "Specialty Coffee Subscription",
    description: "Curate and deliver specialty coffee beans from around the world, providing subscribers with unique and hard-to-find varieties each month.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "high",
    potentialReturn: "medium",
    tags: ["Food", "Subscription", "Curation"]
  },
  {
    id: "23",
    title: "Personal Shopping Service",
    description: "Offer personalized shopping services for busy professionals, helping them find clothing, gifts, or specialty items that match their preferences.",
    investmentLevel: "low",
    difficulty: "beginner",
    timeCommitment: "medium",
    potentialReturn: "medium",
    tags: ["Fashion", "Service", "Curation"]
  },
  {
    id: "24",
    title: "Urban Farming Consultant",
    description: "Help urban residents and businesses set up gardens, vertical farms, or hydroponic systems to grow food in limited spaces.",
    investmentLevel: "low",
    difficulty: "intermediate",
    timeCommitment: "medium",
    potentialReturn: "medium",
    tags: ["Agriculture", "Environment", "Consulting"]
  },
  {
    id: "25",
    title: "Data Visualization Service",
    description: "Help businesses transform complex data into clear, compelling visualizations that convey insights and support decision-making.",
    investmentLevel: "low",
    difficulty: "expert",
    timeCommitment: "medium",
    potentialReturn: "high",
    tags: ["Data", "Design", "Technology"]
  },
  {
    id: "26",
    title: "Children's Book Author/Illustrator",
    description: "Create and self-publish children's books, focusing on educational content, diversity, or addressing specific childhood experiences.",
    investmentLevel: "low",
    difficulty: "intermediate",
    timeCommitment: "medium",
    potentialReturn: "medium",
    tags: ["Writing", "Art", "Education"]
  },
  {
    id: "27",
    title: "AI Prompt Engineering Consultant",
    description: "Help businesses optimize their use of AI tools by designing effective prompts and workflows that maximize AI capabilities.",
    investmentLevel: "low",
    difficulty: "expert",
    timeCommitment: "medium",
    potentialReturn: "high",
    tags: ["Technology", "AI", "Consulting"]
  },
  {
    id: "28",
    title: "Vintage Furniture Restoration",
    description: "Restore and resell vintage furniture, giving new life to quality pieces while promoting sustainability through reuse.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "medium",
    potentialReturn: "medium",
    tags: ["Craft", "Furniture", "Restoration"]
  },
  {
    id: "29",
    title: "Social Media Content Creator",
    description: "Create engaging, platform-specific content for businesses looking to increase their social media presence and engagement.",
    investmentLevel: "low",
    difficulty: "intermediate",
    timeCommitment: "medium",
    potentialReturn: "medium",
    tags: ["Social Media", "Marketing", "Creative"]
  },
  {
    id: "30",
    title: "Local Tour Guide Service",
    description: "Develop specialized tours showcasing unique aspects of your city, such as food, history, architecture, or local hidden gems.",
    investmentLevel: "low",
    difficulty: "beginner",
    timeCommitment: "medium",
    potentialReturn: "medium",
    tags: ["Tourism", "Local", "Experience"]
  },
  {
    id: "31",
    title: "AI-Powered T-Shirt Design Platform",
    description: "Use AI to generate custom T-shirt designs for online sale. Perfect for global e-commerce with AI automation.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "medium",
    potentialReturn: "high",
    tags: ["AI", "E-commerce", "Fashion", "Design", "Technology"]
  },
  {
    id: "32",
    title: "Virtual Reality Job Training Platform",
    description: "Train workers for skilled physical labor using VR technology. Global reach with strong education/tech focus.",
    investmentLevel: "high",
    difficulty: "expert",
    timeCommitment: "high",
    potentialReturn: "high",
    tags: ["VR", "Education", "Technology", "Training"]
  },
  {
    id: "33",
    title: "AI-Driven Marketing Agency",
    description: "Offer cost-effective marketing solutions for SMBs using AI automation. Global reach with scalable systems.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "medium",
    potentialReturn: "high",
    tags: ["Marketing", "AI", "Business Services"]
  },
  {
    id: "34",
    title: "Sustainable Fashion Marketplace",
    description: "Create an online marketplace for selling organic and sustainable clothing. Focus on the Spanish market with global potential.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "high",
    potentialReturn: "medium",
    tags: ["Fashion", "E-commerce", "Sustainability", "Retail"]
  },
  {
    id: "35",
    title: "Remote Cybersecurity Consulting",
    description: "Help businesses secure their digital operations with remote cybersecurity consulting. Global service with high demand.",
    investmentLevel: "low",
    difficulty: "expert",
    timeCommitment: "medium",
    potentialReturn: "high",
    tags: ["Cybersecurity", "Consulting", "Technology", "Business Services"]
  },
  {
    id: "36",
    title: "AI-Powered Personal Finance App",
    description: "Create an app that helps people manage finances in a changing economy using AI for personalized advice and automation.",
    investmentLevel: "medium",
    difficulty: "expert",
    timeCommitment: "high",
    potentialReturn: "high",
    tags: ["Finance", "AI", "Technology", "Mobile Apps"]
  },
  {
    id: "37",
    title: "Online Local Compute Cluster Service",
    description: "Provide access to local compute clusters for communities needing computing power. US-focused with community benefits.",
    investmentLevel: "high",
    difficulty: "expert",
    timeCommitment: "medium",
    potentialReturn: "medium",
    tags: ["Technology", "Computing", "Community", "Infrastructure"]
  },
  {
    id: "38",
    title: "E-commerce for 3D-Printed Medicines",
    description: "Develop a platform for selling personalized 3D-printed medicines online with proper regulatory compliance.",
    investmentLevel: "high",
    difficulty: "expert",
    timeCommitment: "high",
    potentialReturn: "high",
    tags: ["Healthcare", "E-commerce", "3D Printing", "Technology"]
  },
  {
    id: "39",
    title: "AI-Enhanced Language Learning App",
    description: "Create a language learning application that uses AI to personalize the learning experience for each user.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "high",
    potentialReturn: "high",
    tags: ["Education", "Languages", "AI", "Mobile Apps"]
  },
  {
    id: "40",
    title: "Online Renewable Energy Consulting",
    description: "Provide consulting services for businesses looking to adopt renewable energy solutions, with a focus on the Spanish market.",
    investmentLevel: "low",
    difficulty: "intermediate",
    timeCommitment: "medium",
    potentialReturn: "medium",
    tags: ["Energy", "Consulting", "Sustainability", "Business Services"]
  },
  {
    id: "41",
    title: "Hyperlocal Food Co-op",
    description: "Establish a community-based food cooperative to grow organic food for local residents in Seattle, USA.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "high",
    potentialReturn: "medium",
    tags: ["Food", "Agriculture", "Community", "Sustainability"]
  },
  {
    id: "42",
    title: "Solar Installation Business",
    description: "Start a business installing solar panels for homes and businesses in Madrid, Spain, capitalizing on renewable energy trends.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "high",
    potentialReturn: "high",
    tags: ["Energy", "Installation", "Sustainability", "Construction"]
  },
  {
    id: "43",
    title: "Skilled Physical Labor Training Center",
    description: "Create a training center in Chicago, USA to teach workers valuable physical labor skills for the changing job market.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "high",
    potentialReturn: "medium",
    tags: ["Education", "Training", "Labor", "Vocational"]
  },
  {
    id: "44",
    title: "Organic Farming Business",
    description: "Establish an organic farming operation in Barcelona, Spain to grow and sell sustainable produce locally.",
    investmentLevel: "high",
    difficulty: "intermediate",
    timeCommitment: "high",
    potentialReturn: "medium",
    tags: ["Agriculture", "Farming", "Sustainability", "Food"]
  },
  {
    id: "45",
    title: "Local Energy Storage Solutions",
    description: "Provide battery storage solutions in Austin, USA to help communities achieve energy independence.",
    investmentLevel: "high",
    difficulty: "expert",
    timeCommitment: "high",
    potentialReturn: "high",
    tags: ["Energy", "Storage", "Technology", "Sustainability"]
  },
  {
    id: "46",
    title: "Biotech Research Lab",
    description: "Establish a research laboratory in Valencia, Spain focused on biotechnology solutions for sustainable development.",
    investmentLevel: "high",
    difficulty: "expert",
    timeCommitment: "high",
    potentialReturn: "high",
    tags: ["Biotech", "Research", "Healthcare", "Science"]
  },
  {
    id: "47",
    title: "Community-Run Makerspace",
    description: "Create a shared workshop in Portland, USA where locals can create, repair, and repurpose goods.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "high",
    potentialReturn: "low",
    tags: ["Community", "Maker", "Workshop", "Education"]
  },
  {
    id: "48",
    title: "Sustainable Construction Firm",
    description: "Start a construction company in Miami, USA specializing in building eco-friendly, sustainable homes and buildings.",
    investmentLevel: "high",
    difficulty: "expert",
    timeCommitment: "high",
    potentialReturn: "high",
    tags: ["Construction", "Sustainability", "Architecture", "Real Estate"]
  },
  {
    id: "49",
    title: "Local Food Truck with Organic Menu",
    description: "Launch a food truck in London, UK offering organic, locally-sourced meals with a focus on personal connection.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "high",
    potentialReturn: "medium",
    tags: ["Food", "Organic", "Hospitality", "Culinary"]
  },
  {
    id: "50",
    title: "Elder Care Facility with Human Touch",
    description: "Create a care facility in Tokyo, Japan that emphasizes human connection and personalized care for the elderly.",
    investmentLevel: "high",
    difficulty: "expert",
    timeCommitment: "high",
    potentialReturn: "medium",
    tags: ["Healthcare", "Elder Care", "Service", "Wellness"]
  },
  {
    id: "51",
    title: "AI-Assisted Urban Farming Consultancy",
    description: "Combine AI technology with urban farming expertise to offer online advice and on-site setup in New York, USA.",
    investmentLevel: "medium",
    difficulty: "expert",
    timeCommitment: "high",
    potentialReturn: "high",
    tags: ["Agriculture", "Urban Farming", "AI", "Consulting"]
  },
  {
    id: "52",
    title: "E-commerce with Local Pickup for Sustainable Goods",
    description: "Create an online store for sustainable products in Berlin, Germany with convenient local pickup options.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "high",
    potentialReturn: "medium",
    tags: ["E-commerce", "Sustainability", "Retail", "Local Business"]
  },
  {
    id: "53",
    title: "Hybrid Renewable Energy Training Program",
    description: "Offer a combination of online courses and in-person workshops in Sydney, Australia teaching renewable energy skills.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "high",
    potentialReturn: "medium",
    tags: ["Education", "Energy", "Training", "Sustainability"]
  },
  {
    id: "54",
    title: "AI-Powered Local Event Planning",
    description: "Use AI to plan events online and execute them offline in Paris, France, combining technology with personal touch.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "high",
    potentialReturn: "medium",
    tags: ["Events", "AI", "Planning", "Hospitality"]
  },
  {
    id: "55",
    title: "Online-to-Offline Repair Service",
    description: "Create an app in Toronto, Canada that connects people with local repair services for various items.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "medium",
    potentialReturn: "medium",
    tags: ["Service", "Repair", "App", "Local Business"]
  },
  {
    id: "56",
    title: "Hybrid Fitness Studio with AI Coaching",
    description: "Combine in-person fitness classes in Los Angeles, USA with AI-driven online coaching for comprehensive wellness.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "high",
    potentialReturn: "high",
    tags: ["Fitness", "AI", "Health", "Wellness"]
  },
  {
    id: "57",
    title: "Local Compute Cluster with Online Training",
    description: "Establish compute clusters in Cape Town, South Africa with complementary online training for community use.",
    investmentLevel: "high",
    difficulty: "expert",
    timeCommitment: "high",
    potentialReturn: "medium",
    tags: ["Technology", "Computing", "Education", "Community"]
  },
  {
    id: "58",
    title: "Sustainable Catering with Online Ordering",
    description: "Launch a sustainable catering service in Stockholm, Sweden that takes orders online for convenient, eco-friendly food service.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "high",
    potentialReturn: "medium",
    tags: ["Food", "Catering", "Sustainability", "E-commerce"]
  },
  {
    id: "59",
    title: "AI-Enhanced Local Art Gallery",
    description: "Create an art gallery in Seoul, South Korea that uses AI for online curation while offering offline exhibitions.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "medium",
    potentialReturn: "medium",
    tags: ["Art", "AI", "Gallery", "Culture"]
  },
  {
    id: "60",
    title: "Hybrid Childcare with AI Monitoring",
    description: "Offer in-person childcare in Singapore with AI monitoring technology that keeps parents connected.",
    investmentLevel: "medium",
    difficulty: "expert",
    timeCommitment: "high",
    potentialReturn: "medium",
    tags: ["Childcare", "AI", "Education", "Family"]
  },
  {
    id: "61",
    title: "AI-Driven Supply Chain Analytics Firm",
    description: "Help global businesses optimize their supply chains using advanced AI analytics and predictive modeling.",
    investmentLevel: "medium",
    difficulty: "expert",
    timeCommitment: "high",
    potentialReturn: "high",
    tags: ["Logistics", "AI", "Supply Chain", "Business Services"]
  },
  {
    id: "62",
    title: "Off-Grid Solar Solutions Provider",
    description: "Develop and install off-grid solar power systems in Nairobi, Kenya and surrounding areas to provide reliable energy.",
    investmentLevel: "high",
    difficulty: "intermediate",
    timeCommitment: "high",
    potentialReturn: "medium",
    tags: ["Energy", "Solar", "Sustainability", "Infrastructure"]
  },
  {
    id: "63",
    title: "Online Platform for Local Artisans",
    description: "Create a marketplace connecting local artisans in Mumbai, India with global customers while preserving traditional crafts.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "high",
    potentialReturn: "medium",
    tags: ["E-commerce", "Crafts", "Artisans", "Cultural"]
  },
  {
    id: "64",
    title: "Sustainable Packaging Manufacturer",
    description: "Produce eco-friendly packaging alternatives in Amsterdam, Netherlands to help businesses reduce environmental impact.",
    investmentLevel: "high",
    difficulty: "expert",
    timeCommitment: "high",
    potentialReturn: "high",
    tags: ["Manufacturing", "Packaging", "Sustainability", "Production"]
  },
  {
    id: "65",
    title: "Local Water Purification Business",
    description: "Provide affordable water purification solutions in Lagos, Nigeria to address local water quality challenges.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "high",
    potentialReturn: "medium",
    tags: ["Water", "Utilities", "Health", "Community"]
  },
  {
    id: "66",
    title: "AI-Powered Legal Tech Platform",
    description: "Develop AI tools to help legal professionals streamline documentation, research, and case management globally.",
    investmentLevel: "medium",
    difficulty: "expert",
    timeCommitment: "high",
    potentialReturn: "high",
    tags: ["Legal", "AI", "Technology", "Business Services"]
  },
  {
    id: "67",
    title: "Community-Owned Internet Service",
    description: "Establish community-owned internet infrastructure in rural USA to provide affordable, reliable connectivity.",
    investmentLevel: "high",
    difficulty: "expert",
    timeCommitment: "high",
    potentialReturn: "medium",
    tags: ["Internet", "Infrastructure", "Community", "Technology"]
  },
  {
    id: "68",
    title: "Eco-Friendly Laundry Service",
    description: "Start a laundry service in Dubai, UAE using water-saving technologies and eco-friendly detergents.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "high",
    potentialReturn: "medium",
    tags: ["Service", "Laundry", "Sustainability", "Environment"]
  },
  {
    id: "69",
    title: "Online Platform for Barter Trade",
    description: "Create a global online platform facilitating barter trade of goods and services without monetary exchange.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "high",
    potentialReturn: "medium",
    tags: ["E-commerce", "Barter", "Exchange", "Community"]
  },
  {
    id: "70",
    title: "Local Waste Recycling Plant",
    description: "Establish a recycling facility in Sao Paulo, Brazil focusing on plastic waste and other recoverable materials.",
    investmentLevel: "high",
    difficulty: "expert",
    timeCommitment: "high",
    potentialReturn: "medium",
    tags: ["Recycling", "Waste Management", "Sustainability", "Environment"]
  },
  {
    id: "71",
    title: "AI-Assisted Mental Health App",
    description: "Develop an app using AI to provide mental health support, coping strategies, and professional referrals globally.",
    investmentLevel: "medium",
    difficulty: "expert",
    timeCommitment: "high",
    potentialReturn: "high",
    tags: ["Healthcare", "Mental Health", "AI", "Mobile Apps"]
  },
  {
    id: "72",
    title: "Sustainable Tourism Agency",
    description: "Create a tourism agency in Bali, Indonesia specializing in eco-friendly, low-impact travel experiences.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "high",
    potentialReturn: "medium",
    tags: ["Tourism", "Travel", "Sustainability", "Hospitality"]
  },
  {
    id: "73",
    title: "Local Bike Repair Shop",
    description: "Open a bicycle repair and maintenance shop in Copenhagen, Denmark with a focus on personal service and sustainability.",
    investmentLevel: "low",
    difficulty: "intermediate",
    timeCommitment: "medium",
    potentialReturn: "medium",
    tags: ["Repair", "Bicycles", "Service", "Transportation"]
  },
  {
    id: "74",
    title: "Online Platform for Skill-Sharing",
    description: "Build a global platform where people can exchange skills and knowledge through teaching and learning.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "high",
    potentialReturn: "medium",
    tags: ["Education", "Skills", "Community", "Technology"]
  },
  {
    id: "75",
    title: "Urban Beekeeping Business",
    description: "Start an urban beekeeping operation in Melbourne, Australia producing honey and providing pollination services.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "medium",
    potentialReturn: "medium",
    tags: ["Agriculture", "Beekeeping", "Sustainability", "Food"]
  },
  {
    id: "76",
    title: "AI-Powered Inventory Management for Retail",
    description: "Develop AI solutions to help retail businesses globally optimize inventory, reduce waste, and increase efficiency.",
    investmentLevel: "medium",
    difficulty: "expert",
    timeCommitment: "high",
    potentialReturn: "high",
    tags: ["Retail", "AI", "Inventory", "Business Services"]
  },
  {
    id: "77",
    title: "Community Solar Farm",
    description: "Establish a community-owned solar farm in rural Spain providing clean energy and economic benefits to local residents.",
    investmentLevel: "high",
    difficulty: "expert",
    timeCommitment: "high",
    potentialReturn: "medium",
    tags: ["Energy", "Solar", "Community", "Sustainability"]
  },
  {
    id: "78",
    title: "Local Tailoring Business with Online Orders",
    description: "Create a tailoring business in Delhi, India that takes measurements and orders online but provides personalized service.",
    investmentLevel: "low",
    difficulty: "intermediate",
    timeCommitment: "high",
    potentialReturn: "medium",
    tags: ["Fashion", "Tailoring", "Service", "E-commerce"]
  },
  {
    id: "79",
    title: "Sustainable Pet Care Products",
    description: "Develop and sell eco-friendly pet care products in San Francisco, USA with a focus on sustainability and animal welfare.",
    investmentLevel: "medium",
    difficulty: "intermediate",
    timeCommitment: "high",
    potentialReturn: "medium",
    tags: ["Pet Care", "Sustainability", "Products", "Retail"]
  },
  {
    id: "80",
    title: "AI-Driven Tutoring Platform",
    description: "Create a global online platform using AI to provide personalized tutoring across various subjects and skill levels.",
    investmentLevel: "medium",
    difficulty: "expert",
    timeCommitment: "high",
    potentialReturn: "high",
    tags: ["Education", "AI", "Tutoring", "Technology"]
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
