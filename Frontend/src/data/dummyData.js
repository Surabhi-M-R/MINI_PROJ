// Dummy data for job seekers
export const jobSeekers = [
  {
    id: 1,
    name: "Sarah Johnson",
    age: 28,
    education: "Master's in Computer Science",
    skills: ["React", "Node.js", "Python", "MongoDB"],
    jobTypePreference: "Full-Time",
    experience: "3 years",
    location: "New York, NY"
  },
  {
    id: 2,
    name: "Michael Chen",
    age: 25,
    education: "Bachelor's in Business Administration",
    skills: ["Marketing", "SEO", "Google Analytics", "Content Writing"],
    jobTypePreference: "Remote",
    experience: "2 years",
    location: "San Francisco, CA"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    age: 30,
    education: "Bachelor's in Graphic Design",
    skills: ["UI/UX Design", "Figma", "Adobe Creative Suite", "Prototyping"],
    jobTypePreference: "Part-Time",
    experience: "5 years",
    location: "Los Angeles, CA"
  },
  {
    id: 4,
    name: "David Kim",
    age: 26,
    education: "Master's in Data Science",
    skills: ["Python", "Machine Learning", "SQL", "Tableau"],
    jobTypePreference: "Full-Time",
    experience: "2 years",
    location: "Seattle, WA"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    age: 32,
    education: "Bachelor's in Marketing",
    skills: ["Digital Marketing", "Social Media", "Email Marketing", "Analytics"],
    jobTypePreference: "Remote",
    experience: "7 years",
    location: "Chicago, IL"
  },
  {
    id: 6,
    name: "James Wilson",
    age: 29,
    education: "Bachelor's in Finance",
    skills: ["Financial Analysis", "Excel", "QuickBooks", "Investment Banking"],
    jobTypePreference: "Full-Time",
    experience: "4 years",
    location: "Boston, MA"
  }
];

// Dummy data for job listings
export const jobListings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    organization: "TechCorp Inc.",
    jobType: "Full-Time",
    skillsRequired: ["React", "JavaScript", "TypeScript", "CSS"],
    description: "We are looking for an experienced frontend developer to join our growing team. You will be responsible for building user interfaces and ensuring great user experience.",
    location: "New York, NY",
    locationDetails: {
      address: "123 Tech Street, Manhattan, NY 10001",
      coordinates: { lat: 40.7128, lng: -74.0060 },
      nearby: ["Times Square (0.5 mi)", "Central Park (1.2 mi)", "Brooklyn Bridge (2.1 mi)"],
      commute: "Subway accessible, multiple bus routes nearby"
    },
    postedBy: "John Smith"
  },
  {
    id: 2,
    title: "Digital Marketing Specialist",
    organization: "Growth Marketing Agency",
    jobType: "Remote",
    skillsRequired: ["Digital Marketing", "SEO", "Google Analytics", "Content Marketing"],
    description: "Join our dynamic marketing team to help clients grow their online presence. This is a fully remote position with flexible hours.",
    location: "Remote",
    locationDetails: {
      address: "Work from anywhere",
      coordinates: null,
      nearby: ["Global team", "Flexible timezone", "Virtual office"],
      commute: "No commute required - work from home"
    },
    postedBy: "Maria Garcia"
  },
  {
    id: 3,
    title: "UI/UX Designer",
    organization: "Design Studio Pro",
    jobType: "Part-Time",
    skillsRequired: ["UI/UX Design", "Figma", "Adobe Creative Suite", "User Research"],
    description: "We need a creative UI/UX designer to work on exciting projects for our clients. Part-time position with potential for full-time conversion.",
    location: "Los Angeles, CA",
    locationDetails: {
      address: "456 Creative Blvd, Hollywood, CA 90028",
      coordinates: { lat: 34.0522, lng: -118.2437 },
      nearby: ["Hollywood Walk of Fame (0.3 mi)", "Griffith Observatory (3.2 mi)", "Santa Monica Beach (8.5 mi)"],
      commute: "Metro accessible, parking available, bike-friendly area"
    },
    postedBy: "Alex Johnson"
  },
  {
    id: 4,
    title: "Data Scientist",
    organization: "Data Insights Co.",
    jobType: "Full-Time",
    skillsRequired: ["Python", "Machine Learning", "SQL", "Statistics"],
    description: "Help us turn data into actionable insights. We're looking for a data scientist with strong analytical skills and machine learning experience.",
    location: "Seattle, WA",
    locationDetails: {
      address: "789 Data Drive, Downtown Seattle, WA 98101",
      coordinates: { lat: 47.6062, lng: -122.3321 },
      nearby: ["Space Needle (0.8 mi)", "Pike Place Market (0.5 mi)", "Seattle Waterfront (0.3 mi)"],
      commute: "Light rail accessible, ferry terminal nearby, excellent public transport"
    },
    postedBy: "Dr. Sarah Lee"
  },
  {
    id: 5,
    title: "Marketing Coordinator",
    organization: "StartupXYZ",
    jobType: "Remote",
    skillsRequired: ["Marketing", "Social Media", "Content Creation", "Analytics"],
    description: "Join our fast-paced startup environment. You'll be responsible for coordinating marketing campaigns and managing social media presence.",
    location: "Remote",
    locationDetails: {
      address: "Work from anywhere",
      coordinates: null,
      nearby: ["Global team", "Flexible timezone", "Virtual office"],
      commute: "No commute required - work from home"
    },
    postedBy: "Tom Wilson"
  },
  {
    id: 6,
    title: "Financial Analyst",
    organization: "Investment Partners LLC",
    jobType: "Full-Time",
    skillsRequired: ["Financial Analysis", "Excel", "Financial Modeling", "Investment Analysis"],
    description: "We're seeking a financial analyst to support our investment team with research, analysis, and financial modeling.",
    location: "Boston, MA",
    locationDetails: {
      address: "321 Financial District, Boston, MA 02101",
      coordinates: { lat: 42.3601, lng: -71.0589 },
      nearby: ["Faneuil Hall (0.2 mi)", "Boston Common (0.4 mi)", "Harvard University (3.1 mi)"],
      commute: "MBTA accessible, walking distance to major attractions, bike-friendly"
    },
    postedBy: "Robert Brown"
  }
];

// Job types for dropdowns
export const jobTypes = [
  "Full-Time",
  "Part-Time",
  "Remote",
  "Internship",
  "Contract",
  "Freelance"
];

// Common skills for suggestions
export const commonSkills = [
  "React", "JavaScript", "Python", "Node.js", "MongoDB", "SQL",
  "UI/UX Design", "Figma", "Adobe Creative Suite", "Marketing",
  "SEO", "Google Analytics", "Content Writing", "Digital Marketing",
  "Machine Learning", "Data Analysis", "Excel", "Financial Analysis",
  "Project Management", "Agile", "Scrum", "Git", "Docker", "AWS"
];