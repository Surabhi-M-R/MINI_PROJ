// Dummy data for job seekers
export const jobSeekers = [
  {
    id: 1,
    name: "Ramesh Singh",
    age: 32,
    education: "10th Pass",
    skills: ["Construction Tools", "Physical Labor", "Heavy Lifting", "Team Work"],
    jobTypePreference: "Daily Wage",
    experience: "5 years",
    location: "New Delhi, India"
  },
  {
    id: 2,
    name: "Priya Sharma",
    age: 29,
    education: "ITI - Welding",
    skills: ["Welding", "Metal Work", "Safety Equipment", "Physical Work"],
    jobTypePreference: "Full-Time",
    experience: "4 years",
    location: "Mumbai, India"
  },
  {
    id: 3,
    name: "Amit Kumar",
    age: 35,
    education: "12th Pass + Auto Mechanic Training",
    skills: ["Auto Repair", "Hand Tools", "Customer Service", "Physical Work"],
    jobTypePreference: "Full-Time",
    experience: "8 years",
    location: "Hyderabad, India"
  },
  {
    id: 4,
    name: "Suresh Reddy",
    age: 28,
    education: "10th Pass + Plumbing Apprenticeship",
    skills: ["Basic Plumbing", "Hand Tools", "Physical Work", "Learning Attitude"],
    jobTypePreference: "Daily Wage",
    experience: "3 years",
    location: "Chennai, India"
  },
  {
    id: 5,
    name: "Kavya Nair",
    age: 27,
    education: "12th Pass + Warehouse Training",
    skills: ["Inventory Management", "Heavy Lifting", "Physical Stamina", "Team Work"],
    jobTypePreference: "Part-Time",
    experience: "4 years",
    location: "Bangalore, India"
  },
  {
    id: 6,
    name: "Rajesh Patel",
    age: 31,
    education: "10th Pass + Gardening Certificate",
    skills: ["Gardening Tools", "Physical Labor", "Outdoor Work", "Plant Knowledge"],
    jobTypePreference: "Seasonal",
    experience: "6 years",
    location: "Pune, India"
  }
];

// Dummy data for job listings
export const jobListings = [
  {
    id: 1,
    title: "Construction Worker",
    organization: "Delhi Builders Pvt Ltd",
    jobType: "Daily Wage",
    skillsRequired: ["Physical Labor", "Construction Tools", "Safety Awareness", "Team Work"],
    description: "Join our construction team for daily wage work. Physical labor required for building projects. Safety training provided. Good pay for hard work. ₹800-1200 per day.",
    location: "New Delhi, India",
    locationDetails: {
      address: "Sector 18, Noida, Uttar Pradesh 201301",
      coordinates: { lat: 28.5355, lng: 77.3910 },
      nearby: ["Noida Metro Station (0.5 km)", "Construction Material Market (0.3 km)", "Worker's Canteen (0.2 km)"],
      commute: "Metro accessible, auto-rickshaw available, early morning start at 7 AM"
    },
    postedBy: "Rajesh Kumar"
  },
  {
    id: 2,
    title: "Warehouse Worker",
    organization: "Flipkart Logistics",
    jobType: "Part-Time",
    skillsRequired: ["Heavy Lifting", "Inventory Management", "Physical Stamina", "Team Work"],
    description: "Warehouse work with good hourly pay. Loading, unloading, and organizing packages. Training provided. Flexible shifts available. ₹300-500 per hour.",
    location: "Mumbai, India",
    locationDetails: {
      address: "Andheri East, Mumbai, Maharashtra 400069",
      coordinates: { lat: 19.0760, lng: 72.8777 },
      nearby: ["Andheri Metro Station (0.8 km)", "Local Market (0.3 km)", "Chai Stall (0.1 km)"],
      commute: "Local train accessible, auto-rickshaw available, shift work 6 AM to 6 PM"
    },
    postedBy: "Amit Sharma"
  },
  {
    id: 3,
    title: "Electrician Helper",
    organization: "Reliance Electrical Services",
    jobType: "Full-Time",
    skillsRequired: ["Basic Electrical Knowledge", "Hand Tools", "Safety Equipment", "Physical Work"],
    description: "Learn electrical work while earning good pay. No experience required - we train. Work with licensed electricians on residential and commercial projects. ₹15,000-25,000 per month.",
    location: "Bangalore, India",
    locationDetails: {
      address: "Electronic City, Bangalore, Karnataka 560100",
      coordinates: { lat: 12.9716, lng: 77.5946 },
      nearby: ["Electronic City Metro (0.4 km)", "Electrical Market (0.2 km)", "Worker's Mess (0.3 km)"],
      commute: "BMTC bus available, company pickup, early morning start at 8 AM"
    },
    postedBy: "Suresh Reddy"
  },
  {
    id: 4,
    title: "Plumber Assistant",
    organization: "Tata Plumbing Services",
    jobType: "Daily Wage",
    skillsRequired: ["Basic Plumbing", "Hand Tools", "Physical Work", "Customer Service"],
    description: "Join our plumbing team for daily wage work. Learn plumbing skills while earning. No experience needed - we provide training and tools. ₹600-1000 per day.",
    location: "Chennai, India",
    locationDetails: {
      address: "T Nagar, Chennai, Tamil Nadu 600017",
      coordinates: { lat: 13.0827, lng: 80.2707 },
      nearby: ["T Nagar Metro (0.3 km)", "Plumbing Market (0.1 km)", "Local Tea Shop (0.2 km)"],
      commute: "Metro accessible, auto-rickshaw available, flexible hours 9 AM to 6 PM"
    },
    postedBy: "Ravi Krishnan"
  },
  {
    id: 5,
    title: "Gardening Worker",
    organization: "Mahindra Green Services",
    jobType: "Seasonal",
    skillsRequired: ["Physical Labor", "Gardening Tools", "Plant Knowledge", "Outdoor Work"],
    description: "Seasonal gardening work with good pay. Mowing, planting, and general garden maintenance. Work outdoors in fresh air. Flexible schedule. ₹500-800 per day.",
    location: "Pune, India",
    locationDetails: {
      address: "Koregaon Park, Pune, Maharashtra 411001",
      coordinates: { lat: 18.5204, lng: 73.8567 },
      nearby: ["Koregaon Park Metro (0.6 km)", "Garden Center (0.2 km)", "Local Dhaba (0.1 km)"],
      commute: "PMT bus available, company vehicle, early morning start at 6 AM"
    },
    postedBy: "Vikram Patil"
  },
  {
    id: 6,
    title: "Auto Mechanic Helper",
    organization: "Maruti Service Center",
    jobType: "Full-Time",
    skillsRequired: ["Basic Auto Knowledge", "Hand Tools", "Physical Work", "Learning Attitude"],
    description: "Learn auto repair while earning good wages. No experience required - we train. Work with experienced mechanics on all types of vehicles. ₹12,000-20,000 per month.",
    location: "Hyderabad, India",
    locationDetails: {
      address: "Banjara Hills, Hyderabad, Telangana 500034",
      coordinates: { lat: 17.4065, lng: 78.4772 },
      nearby: ["Banjara Hills Metro (0.4 km)", "Auto Parts Market (0.2 km)", "Local Chai Shop (0.1 km)"],
      commute: "Metro accessible, auto-rickshaw available, steady work 9 AM to 6 PM"
    },
    postedBy: "Kiran Reddy"
  }
];

// Job types for dropdowns
export const jobTypes = [
  "Full-Time",
  "Part-Time",
  "Daily Wage",
  "Seasonal",
  "Contract",
  "Temporary"
];

// Common skills for suggestions
export const commonSkills = [
  "Physical Labor", "Heavy Lifting", "Construction Tools", "Hand Tools", "Power Tools", "Safety Equipment",
  "Basic Plumbing", "Basic Electrical", "Auto Repair", "Welding", "Carpentry", "Masonry",
  "Painting", "Gardening", "Cleaning", "Maintenance", "Assembly Work", "Warehouse Work",
  "Team Work", "Customer Service", "Learning Attitude", "Physical Stamina", "Outdoor Work", "Early Morning",
  "Hindi Speaking", "Local Language", "Rickshaw Driving", "Delivery Work", "Security Work", "Housekeeping"
];