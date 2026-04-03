// lib/data.ts
// ======================================
// CENTRAL DATA SOURCE FOR ENTIRE PORTFOLIO
// ======================================

// Navigation
export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

// Personal Info
export const personalInfo = {
  name: 'Sitara Thakur',
  title: 'Full Stack Web Developer',
  location: 'Gogera, Okara, Punjab, Pakistan',
  email: 'sitarathakur0@gmail.com',
  experience: '5+ Years',
  bio: `I'm a passionate web developer with 5+ years of experience creating innovative digital solutions. 
  My journey in web development started with a curiosity for how things work on the internet, and evolved 
  into a career building exceptional web applications for clients worldwide.`,
  shortBio: 'Creating stunning digital experiences that help businesses grow and succeed in the modern web.',
};

// Skills Data
export const skillsTec = {
  frontend: [
    { name: 'React/Next.js', level: 95, icon: 'fa-react', years: 3},
    { name: 'TypeScript', level: 90, icon: 'fa-code', years: 2 },
    { name: 'JavaScript', level: 95, icon: 'fa-js', years: 3},
    { name: 'HTML5/CSS3', level: 98, icon: 'fa-html5', years: 5 },
    { name: 'Tailwind CSS', level: 92, icon: 'fa-paint-brush', years: 3 },
    { name: 'Vue.js', level: 75, icon: 'fa-vuejs', years: 2 },
  ],
  backend: [
    { name: 'Node.js', level: 85, icon: 'fa-node', years: 3 },
    { name: 'Python', level: 75, icon: 'fa-python', years: 2 },
    
  ],
 
  tools: [
    { name: 'Git/GitHub', level: 92, icon: 'fa-git', years: 3},
    { name: 'Figma', level: 80, icon: 'fa-pencil-ruler', years: 3 },
    { name: 'Postman', level: 85, icon: 'fa-code', years: 3 },
    
  ]
};

// Projects Data
export const projects = {
  featured: [
    {
      id: 1,
      title: 'Cultural Textile Marketplace',
      description: 'An e-commerce platform connecting artisans with global buyers, featuring secure payments and real-time inventory.',
      fullDescription: 'A comprehensive marketplace platform that enables artisans from remote communities to sell their traditional textiles to a global audience. Includes multi-vendor support, secure payment processing, and real-time inventory management.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
      gallery: [
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
        'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Socket.io'],
      category: 'featured',
      link: '/projects/1',
      features: [
        'Multi-vendor marketplace',
        'Real-time inventory tracking',
        'Secure payment processing',
        'Vendor dashboard',
        'Customer reviews & ratings'
      ],
      date: '2024',
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'Full-featured online store with inventory management, user authentication, and order tracking.',
      fullDescription: 'A modern e-commerce solution for a fashion brand, featuring a beautiful frontend and robust backend with complete inventory management system.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800',
      gallery: [
        'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800',
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      ],
      tech: ['Next.js', 'Tailwind', 'Prisma', 'PostgreSQL', 'NextAuth', 'Stripe'],
      category: 'featured',
      link: '/projects/2',
      features: [
        'User authentication & profiles',
        'Product catalog with filters',
        'Shopping cart & wishlist',
        'Secure checkout with Stripe',
        'Order tracking',
        'Admin dashboard'
      ],
      date: '2024',
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Interactive dashboard for business intelligence with real-time data visualization.',
      fullDescription: 'A comprehensive analytics platform that helps businesses visualize their data and make informed decisions with real-time insights.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      gallery: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      ],
      tech: ['React', 'D3.js', 'Firebase', 'Material-UI', 'Redux Toolkit'],
      category: 'featured',
      link: '/projects/3',
      features: [
        'Real-time data updates',
        'Interactive charts & graphs',
        'Custom report builder',
        'Data export (PDF/CSV)',
        'User role management',
      ],
      date: '2023',
    },
  ],
  webApps: [
    {
      id: 4,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates, team workspaces, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      tech: ['React', 'Socket.io', 'Express', 'MongoDB', 'Tailwind'],
      category: 'webapp',
      link: '/projects/4',
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      description: 'Property listing platform with advanced search, virtual tours, and agent communication.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Google Maps API'],
      category: 'webapp',
      link: '/projects/5',
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Mobile-first fitness application with workout plans, progress tracking, and social features.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Express'],
      category: 'webapp',
      link: '/projects/6',
    },
  ],
  landingPages: [
    {
      id: 7,
      title: 'SaaS Startup Landing Page',
      description: 'High-converting landing page for a B2B SaaS company with animated illustrations.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
      tech: ['Next.js', 'Framer Motion', 'Tailwind'],
      category: 'landing',
      link: '/projects/7',
    },
    {
      id: 8,
      title: 'Product Launch Page',
      description: 'Countdown-based product launch page with email collection and social proof.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      tech: ['HTML', 'CSS', 'JavaScript'],
      category: 'landing',
      link: '/projects/8',
    },
    {
      id: 9,
      title: 'Creative Agency Portfolio',
      description: 'Showcase website for a creative agency with case studies and team profiles.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
      tech: ['React', 'SCSS', 'GSAP', 'Contentful'],
      category: 'landing',
      link: '/projects/9',
    },
  ]
};

// ========== SERVICES DATA WITH IDS ==========
export const services = [
  {
    id: 1,
    icon: 'fa-code',
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies like React, Next.js, and Node.js',
    longDescription: 'I build fast, secure, and scalable web applications tailored to your business needs. From simple websites to complex web apps, I use the latest technologies to ensure optimal performance.',
    features: [
      'Custom website development',
      'Web application development',
      'API development & integration',
      'Database design & management',
      'Third-party integrations',
      'Maintenance & support'
    ],
    price: 'Starting at $2,500',
    timeline: '2-6 weeks'
  },
  {
    id: 2,
    icon: 'fa-paint-brush',
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that provide exceptional user experiences',
    longDescription: 'I design user-centered interfaces that not only look great but also provide seamless experiences. My design process focuses on understanding your users and creating intuitive solutions.',
    features: [
      'User research & personas',
      'Wireframing & prototyping',
      'Visual design',
      'Interaction design',
      'Usability testing',
      'Design systems'
    ],
    price: 'Starting at $1,800',
    timeline: '2-4 weeks'
  },
  {
    id: 3,
    icon: 'fa-mobile-alt',
    title: 'Responsive Design',
    description: 'Websites that look and function perfectly on all devices - from mobile to desktop',
    longDescription: 'I ensure your website provides an optimal viewing experience across all devices. Using mobile-first approach, I create flexible layouts that adapt seamlessly to any screen size.',
    features: [
      'Mobile-first approach',
      'Cross-browser compatibility',
      'Touch-friendly interfaces',
      'Performance optimization',
      'Accessibility compliance',
      'Testing on real devices'
    ],
    price: 'Starting at $1,200',
    timeline: '1-3 weeks'
  },
  {
    id: 4,
    icon: 'fa-rocket',
    title: 'Website Optimization',
    description: 'Fast loading, SEO-friendly websites that rank higher and convert better',
    longDescription: 'I optimize your website for speed, search engines, and user experience. From code optimization to content strategy, I help your site perform at its best.',
    features: [
      'Performance optimization',
      'SEO strategy & implementation',
      'Core Web Vitals',
      'Image optimization',
      'Caching strategies',
      'Analytics setup'
    ],
    price: 'Starting at $900',
    timeline: '1-2 weeks'
  },
  {
    id: 5,
    icon: 'fa-shopping-cart',
    title: 'E-commerce Solutions',
    description: 'Complete online stores with secure payments, inventory management, and marketing tools',
    longDescription: 'I build comprehensive e-commerce solutions that help you sell products online effectively. From small boutiques to large catalogs, I create stores that convert.',
    features: [
      'Product management',
      'Secure checkout',
      'Payment gateway integration',
      'Inventory tracking',
      'Order management',
      'Marketing tools'
    ],
    price: 'Starting at $3,500',
    timeline: '4-8 weeks'
  },
  {
    id: 6,
    icon: 'fa-cogs',
    title: 'CMS Development',
    description: 'Custom content management systems that make updating your website easy',
    longDescription: 'I build custom CMS solutions that give you complete control over your content. No coding required - just simple, intuitive interfaces for managing your website.',
    features: [
      'Custom admin panels',
      'Content modeling',
      'Media management',
      'User roles & permissions',
      'Version control',
      'API-first approach'
    ],
    price: 'Starting at $2,800',
    timeline: '3-6 weeks'
  },
];

// Testimonials Data
export const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO, TechStart',
    content: 'Amazing developer! Delivered our project ahead of schedule and exceeded all expectations. His attention to detail and problem-solving skills are exceptional.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    project: 'E-commerce Platform'
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Founder, CreativeStudio',
    content: 'Excellent communication and technical skills. He understood our vision perfectly and brought it to life. Will definitely work with them again!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108777-296ef5a0cef7?w=150',
    project: 'Agency Website'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    position: 'Product Manager, InnovateCo',
    content: 'Transformed our outdated website into a modern, high-performing platform. The team loves the new dashboard and our users are thrilled with the experience.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    project: 'Analytics Dashboard'
  },
  {
    id: 4,
    name: 'Sarah Williams',
    position: 'Marketing Director, GrowthHub',
    content: 'Our conversion rates doubled after the redesign. His understanding of user psychology and conversion optimization is remarkable.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150',
    project: 'Landing Page Redesign'
  },
  {
    id: 5,
    name: 'David Chen',
    position: 'CTO, FinTech Solutions',
    content: 'One of the best developers I\'ve worked with. His code is clean, well-documented, and scalable. A true professional.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    project: 'Financial Dashboard'
  },
];

// Journey / Timeline Data
export const journey = [
  { 
    year: '2021', 
    title: 'Started Freelancing', 
    description: 'Began my journey as a freelance web developer, working with local businesses and startups.',
    achievements: ['Built 15+ websites', 'Worked with 10 clients', 'Learned React & Node.js']
  },
  { 
    year: '2022', 
    title: 'First Full-time Role', 
    description: 'Joined a digital agency as a frontend developer, working on enterprise-level projects.',
    achievements: ['Promoted to Senior in 8 months', 'Led 3 major projects', 'Mentored 2 junior developers']
  },
  { 
    year: '2023', 
    title: 'Full Stack Developer', 
    description: 'Expanded skills to include backend technologies and database management.',
    achievements: ['Built 5 full-stack applications', 'Implemented CI/CD pipelines', 'Learned AWS & Docker']
  },
  { 
    year: '2024', 
    title: 'Lead Developer', 
    description: 'Promoted to lead developer at a tech startup, managing a team of 5 developers.',
    achievements: ['Scaled platform to 100K users', 'Reduced costs by 40%', 'Implemented microservices']
  },
  { 
    year: '2025', 
    title: 'Independent Consultant', 
    description: 'Returned to freelancing to work with global clients and focus on challenging projects.',
    achievements: ['Worked with 8 international clients', 'Launched 12 projects', '$500K+ revenue generated']
  },
  {
    year: '2026',
    title: 'Today',
    description: 'Continuing to build amazing web experiences for clients worldwide.',
    achievements: ['Open to new opportunities', 'Learning AI/ML', 'Building developer tools']
  }
];

// Philosophy / Values Data
export const philosophy = [
  {
    icon: 'fa-heart',
    title: 'Passion First',
    description: 'I only take projects I\'m genuinely excited about, ensuring 100% dedication and creativity.',
  },
  {
    icon: 'fa-handshake',
    title: 'Client Collaboration',
    description: 'Working closely with clients throughout the process to achieve their vision.',
  },
  {
    icon: 'fa-star',
    title: 'Quality Matters',
    description: 'Delivering pixel-perfect, performant solutions that stand the test of time.',
  },
  {
    icon: 'fa-lightbulb',
    title: 'Innovation',
    description: 'Staying ahead of trends and bringing fresh ideas to every project.',
  },
  {
    icon: 'fa-clock',
    title: 'Timely Delivery',
    description: 'Respecting deadlines and delivering projects on time, every time.',
  },
  {
    icon: 'fa-users',
    title: 'User-Centered',
    description: 'Putting users first in every design and development decision.',
  }
];

// Social Links
export const socialLinks = [
  { platform: 'GitHub', url: 'https://github.com/yourusername', icon: 'fa-github' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'fa-linkedin' },
  { platform: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'fa-twitter' },
  { platform: 'Email', url: 'mailto:hello@devportfolio.com', icon: 'fa-envelope' },
];

// Contact Info
export const contactInfo = {
  email: 'sitarathaku0@gmail.com',
  phone: '+92 3177720927',
  location: 'Gogera, Okara, Punjab, Pakistan',
  availability: 'Available for freelance & remote work',
  responseTime: 'Within 24 hours'
};

// ========== PRICING PLANS ==========
export const pricingPlans = [
  {
    name: 'Basic',
    price: '$1,500',
    description: 'Perfect for small businesses and simple websites',
    features: [
      '5-page responsive website',
      'Basic SEO setup',
      'Contact form',
      'Social media integration',
      '1 month support'
    ],
    recommended: false
  },
  {
    name: 'Professional',
    price: '$3,500',
    description: 'Ideal for growing businesses needing more features',
    features: [
      '10-page responsive website',
      'Advanced SEO optimization',
      'Custom animations',
      'Blog/News section',
      'Analytics setup',
      '3 months support'
    ],
    recommended: true
  },
  {
    name: 'Enterprise',
    price: '$6,500+',
    description: 'For complex web applications and e-commerce',
    features: [
      'Custom web application',
      'E-commerce functionality',
      'User authentication',
      'Payment integration',
      'Database design',
      '6 months support',
    ],
    recommended: false
  }
];

// Achievements
export const achievements = [
  { number: '50+', label: 'Projects Completed', icon: 'fa-code-branch' },
  { number: '30+', label: 'Happy Clients', icon: 'fa-smile' },
  { number: '5+', label: 'Years Experience', icon: 'fa-calendar' },
  { number: '15+', label: 'Countries Served', icon: 'fa-globe' },
];

// FAQs
export const faqs = [
  {
    question: 'What is your development process?',
    answer: 'I follow an agile methodology with regular client check-ins. The process includes: Discovery & Planning, Design, Development, Testing, and Launch.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity. A simple website might take 2-3 weeks, while complex web applications can take 2-3 months.'
  },
  {
    question: 'Do you provide maintenance after launch?',
    answer: 'Yes! I offer maintenance packages to keep your site secure, updated, and running smoothly.'
  },
  {
    question: 'Do you work with clients remotely?',
    answer: 'Absolutely! I work with clients from all over the world. Timezone differences are never a problem.'
  }
];