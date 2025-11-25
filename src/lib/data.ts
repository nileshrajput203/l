import { ShieldCheck, Trees, Landmark, Users } from "lucide-react";

export const heroImages: { src: string; alt: string; aiHint: string }[] = [
  { 
    src: "/banner1.jpg", 
    alt: "Navkar Group - Best construction and real estate in Palghar, showcasing a modern building exterior.", 
    aiHint: "modern building exterior" 
  },
];

export const projects = [
  {
    id: 1,
    name: "Navkar Heights",
    location: "19°42\'01.7\"N 72°45\'52.8\"E",
    displayLocation: "Punit Nagar,Juna Palghar,Palghar, Maharashtra- 401404",
    type: "Residential",
    status: "Sold Out",
    area: "1,200 - 1,800 sq.ft.",
    image: "https://i.postimg.cc/bNYhN3FY/Whats-App-Image-2025-08-25-at-4-55-07-PM-2.jpg",
    aiHint: "modern house",
    reraNo: "P99000012345",
    description: "Discover modern living at Navkar Heights, a residential project in Palghar. Offering thoughtfully designed 2 & 3 BHK apartments, it combines comfort with the convenience of being located near the railway station, making your daily commute effortless.",
    amenities: ["24/7 Security", "Children\'s Play Area", "Landscaped Gardens", "Power Backup"],
    gallery: [
      { src: "https://i.postimg.cc/bNYhN3FY/Whats-App-Image-2025-08-25-at-4-55-07-PM-2.jpg", alt: "Exterior view of Navkar Heights by Navkar Group in Palghar", aiHint: "modern building exterior" },
      { src: "https://i.postimg.cc/8z8mm0QN/Whats-App-Image-2025-08-25-at-4-55-07-PM-1.jpg", alt: "Front view of Navkar Heights, a Navkar Group construction project in Palghar", aiHint: "modern building" },
      { src: "/n1.jpg", alt: "Side view of the Navkar Heights residential building in Palghar", aiHint: "modern building" },
      { src: "/n2.jpg", alt: "Back view of Navkar Heights, a real estate project in Palghar", aiHint: "modern " },
      { src: "/n3.jpg", alt: "Upward view of the Navkar Heights building by Navkar Group", aiHint: "modern style" },
    ],
  },
  {
    id: 2,
    name: "Nova Exotica",
    location: "19°41\'56.8\"N 72°46\'00.8\"E",
    displayLocation: "Navkar Venture, Sur.no. 97/1, Vajli Pada, Devisha Road, Palghar West, Maharashtra 401404",
    type: "Residential",
    status: "Ongoing",
    area: "1,500 - 2,500 sq.ft.",
    image: "/image copy.png",
    aiHint: "luxury apartment",
    reraNo: "P99000067890",
    description: "Experience exquisite living at Nova Exotica. A symbol of modern architecture and luxury, offering spacious apartments with world-class amenities for a truly exotic lifestyle.",
    amenities: ["Swimming Pool", "Clubhouse", "Gymnasium", "Private Balconies"],
    gallery: [
        { src: "https://i.postimg.cc/HnYGR0pG/top-view-30x40.jpg", alt: "Top view of Nova Exotica, a luxury real estate project in Palghar", aiHint: "building top view" },
        { src: "/image.png", alt: "Nova Exotica by Navkar Group - a modern apartment building in Palghar", aiHint: "modern apartment building" },
        { src: "/image copy.png", alt: "Nova Exotica residential project by Navkar Group in Palghar", aiHint: "modern apartment building" },
    ],
    brochureUrl: "/2.pdf",
  },
  {
    id: 3,
    name: "Shreeram Sampaada",
    location: "19°41\'41.7\"N 72°45\'59.5\"E",
    displayLocation: "Shreeram Sampaada, beside ICICI Bank, Mahim Road, Palghar-401404, Maharashtra",
    type: "Residential & Commercial",
    status: "New Launch",
    area: "Residences: 646-651 sq.ft | Shops: 170-898 sq.ft | Offices: 258-545 sq.ft",
    image: "https://i.postimg.cc/d11VKbR6/shree-Ram-sampada-3-D-Img-page-0001.jpg",
    aiHint: "modern mixed-use building",
    reraNo: "Not Mentioned",
    description: "Shreeram Sampaada is a landmark mixed-use development offering luxurious 2 BHK residences, commercial offices, and anchor shops. Located just 5 minutes from Palghar Railway Station, it is positioned as Palghar\'s most iconic project, blending luxury living with prime commercial opportunities.",
    amenities: ["2-level Stack Parking", "Toddlers Play Area", "Gymnasium", "Garden Spaces", "Jogging Track", "Dedicated Commercial Entry"],
    gallery: [
        { src: "/0.jpg", alt: "Shreeram Sampaada, a mixed-use construction project by Navkar Group in Palghar", aiHint: "modern mixed-use building front view" },
        { src: "/s1.jpg", alt: "Side view of Shreeram Sampaada, a Navkar Group real estate development in Palghar", aiHint: "modern mixed-use building side view" },
        { src: "/s2.jpg", alt: "Back view of the Shreeram Sampaada building in Palghar", aiHint: "modern mixed-use building back view" },
        { src: "/s3.jpg", alt: "Aerial view of the Shreeram Sampaada project by Navkar Group", aiHint: "modern mixed-use building aerial view" },
        { src: "/s4.jpg", alt: "Close-up view of the Shreeram Sampaada construction project", aiHint: "modern mixed-use building close-up view" },
        { src: "/s5.jpg", alt: "Interior view of a property at Shreeram Sampaada in Palghar", aiHint: "modern mixed-use building interior view" },
    ],
    brochureUrl: "/3.pdf",
  },
  {
    id: 4,
    name: "Shiv Aashish Industrial Estate",
    location: "PQ6H+PCC, Virendra Nagar, Palghar, Maharashtra 401404",
    displayLocation: "Navkar Industries, Vevoor, Palghar (East)",
    type: "Industrial",
    status: "Ongoing",
    area: "Units from 500 sq.ft.",
    image: "https://i.postimg.cc/C1hpyb0V/Whats-App-Image-2025-08-26-at-5-25-29-PM.jpg",
    aiHint: "industrial estate",
    description: "Shiv Aashish Industrial Estate offers numerous industrial units (galas) under construction. It is an ideal location for businesses looking to expand their operations in a thriving industrial hub.",
    amenities: ["24/7 Security", "Loading/Unloading Docks", "Ample Parking", "Power Backup"],
    gallery: [
        { src: "https://i.postimg.cc/C1hpyb0V/Whats-App-Image-2025-08-26-at-5-25-29-PM.jpg", alt: "Shiv Aashish Industrial Estate by Navkar Group in Palghar", aiHint: "industrial building" },
        { src: "/11.jpg", alt: "Front view of the Shiv Aashish Industrial Estate, a Navkar Group project", aiHint: "industrial building f" },
        { src: "/22.jpg", alt: "Back view of the Shiv Aashish Industrial Estate in Palghar", aiHint: "industrial building b" },
        { src: "/33.jpg", alt: "Close-up of the Shiv Aashish Industrial Estate construction", aiHint: "industrial building c" },
        { src: "/44.jpg", alt: "Another view of the Shiv Aashish Industrial Estate by Navkar Group", aiHint: "industrial building d" },
    ],
    brochureUrl: "/shiv5.pdf",
  },
  {
    id: 5,
    name: "Guruji Residency",
    location: "PQ44+PGP Palghar, Maharashtra",
    displayLocation: "Opposite Chaphekar College, Tembhode, Palghar (West)",
    type: "Residential",
    status: "New Launch",
    area: "Not specified",
    image: "https://i.postimg.cc/NjW3Bvgk/bldg-1-20x30.jpg",
    aiHint: "modern apartment building",
    reraNo: "P99000031100",
    description: "Guruji Residency is a residential development by Navkar Developers, marketed with the tagline \'The Key to your Happiness.\' The project is located opposite Chaphekar College and offers a modern living experience with easy access to local amenities and transportation.",
    amenities: ["Proximity to College", "Close to NH-8", "Nearby Shops & Services"],
    gallery: [
        { src: "https://i.postimg.cc/NjW3Bvgk/bldg-1-20x30.jpg", alt: "Guruji Residency, a new residential project by Navkar Group in Palghar", aiHint: "modern apartment building" },
       
    ],
    brochureUrl: "/3.pdf",
  }
];

export const stats = [
  { label: "Years of Legacy", value: 10, suffix: "+" },
  { label: "Sq.ft Delivered", value: 1, suffix: "M+" },
  { label: "Happy Families", value: 1000, suffix: "+" },
  { label: "Ongoing Projects", value: 5, suffix: "+" },
];

export const features = [
  {
    icon: ShieldCheck,
    title: "RERA Compliant",
    desc: "Transparent processes, clear titles and on-time delivery.",
  },
  {
    icon: Trees,
    title: "Sustainable by Design",
    desc: "Energy-efficient elevations, rainwater harvesting & green roofs.",
  },
  {
    icon: Landmark,
    title: "Prime Locations",
    desc: "Well-connected addresses across Mumbai Metropolitan Region.",
  },
  {
    icon: Users,
    title: "Customer-First",
    desc: "Dedicated relationship managers from booking to handover.",
  },
];

export const testimonials = [
  {
    quote: "The quality of construction and the attention to detail in our home is outstanding. The team was supportive throughout the process. We are truly happy!",
    author: "Rohan & Priya Mehta",
    location: "Homeowners, Navkar Heights",
    avatar: "/1.jpg",
  },
  {
    quote: "Navkar Group delivered on their promise of a premium living experience. The amenities are fantastic, and the location is perfect for our family. Highly recommended!",
    author: "Anjali Sharma",
    location: "Resident, Nova Exotica",
    avatar: "/2.jpg",
  },
  {
    quote: "From the initial inquiry to the final handover, the process was seamless. The customer service team is excellent and very responsive. A trustworthy builder.",
    author: "Sandeep Patel",
    location: "Investor",
    avatar: "/3.jpg",
  },
  {
    quote: "We were impressed by the modern design and the thoughtful layout of the apartment. It feels spacious and gets plenty of natural light. A great investment.",
    author: "The D\'souza Family",
    location: "Homeowners, Navkar Heights",
    avatar: "/4.jpg",
  }
];

export const TABS = ["All", "Residential", "Commercial", "Industrial"] as const;
export type Tab = (typeof TABS)[number];

export const footerLinks = [
  { label: "Projects", href: "/#projects" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/#contact" },
  { label: "Careers", href: "/careers" },
];


export const careerOpenings = [
  {
    title: "Senior Civil Engineer",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    department: "Engineering",
    description: "We are looking for an experienced Senior Civil Engineer to join our team. The ideal candidate will have a a strong background in residential and commercial projects, with a proven track record of managing projects from conception to completion.",
    responsibilities: [
      "Oversee and manage all aspects of construction projects.",
      "Ensure compliance with safety regulations and building codes.",
      "Collaborate with architects, contractors, and other stakeholders.",
      "Prepare project budgets and timelines.",
    ],
  },
  {
    title: "Sales Manager",
    location: "Palghar, Maharashtra",
    type: "Full-time",
    department: "Sales",
    description: "We are seeking a motivated and results-driven Sales Manager to lead our sales team. The successful candidate will be responsible for developing and implementing sales strategies, managing customer relationships, and achieving sales targets.",
    responsibilities: [
      "Lead and mentor the sales team to achieve targets.",
      "Develop and maintain strong customer relationships.",
      "Identify new market opportunities and expand the customer base.",
      "Prepare sales reports and forecasts.",
    ],
  },
];
