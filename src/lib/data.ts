import type { Company, Developer, Project, Application } from './types';

export const companies: Company[] = [
  { id: '1', name: 'Innovate Inc.', logoUrl: 'https://picsum.photos/seed/101/40/40', domain: 'innovate.com', description: 'Driving innovation through technology.' },
  { id: '2', name: 'Tech Solutions', logoUrl: 'https://picsum.photos/seed/102/40/40', domain: 'techsolutions.io', description: 'Providing cutting-edge tech solutions.' },
  { id: '3', name: 'Creative Minds', logoUrl: 'https://picsum.photos/seed/103/40/40', domain: 'creativeminds.design', description: 'Where creativity meets design.' },
];

export const developers: Developer[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    avatarUrl: 'https://picsum.photos/seed/201/40/40',
    title: 'Senior Frontend Developer',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL'],
    experience: '5+ years',
    portfolio: { github: 'https://github.com/alice' },
    bio: 'Passionate about building beautiful and performant user interfaces.',
    availability: 'Part-time',
  },
  {
    id: '2',
    name: 'Bob Williams',
    avatarUrl: 'https://picsum.photos/seed/202/40/40',
    title: 'Full-Stack Engineer',
    skills: ['Node.js', 'Python', 'Django', 'PostgreSQL', 'Docker', 'AWS'],
    experience: '8 years',
    portfolio: { github: 'https://github.com/bob' },
    bio: 'Expert in backend architecture and cloud infrastructure.',
    availability: 'Full-time',
  },
  {
    id: '3',
    name: 'Charlie Brown',
    avatarUrl: 'https://picsum.photos/seed/203/40/40',
    title: 'UI/UX Designer',
    skills: ['Figma', 'Sketch', 'Adobe XD', 'User Research', 'Prototyping'],
    experience: '4 years',
    portfolio: { dribbble: 'https://dribbble.com/charlie' },
    bio: 'Designing user-centric and intuitive digital experiences.',
    availability: 'Full-time',
  }
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'E-commerce Dashboard Redesign',
    company: companies[0],
    description: 'Redesign our main e-commerce dashboard for better user experience and modern aesthetics.',
    longDescription: 'We are looking for a talented designer to completely overhaul our e-commerce dashboard. The current design is outdated and we want to improve user workflow, data visualization, and overall aesthetics. The project involves user research, wireframing, and high-fidelity mockups in Figma.',
    skills: ['UI/UX Design', 'Figma', 'E-commerce', 'Data Visualization'],
    deliverables: ['High-fidelity mockups', 'Clickable prototype', 'Style guide'],
    timeline: '4 Weeks',
    deadline: '2024-08-30',
    compensation: { winner: 5000, participation: 500 },
    applicantsCount: 25,
    shortlistedCount: 5,
    status: 'Open',
    imageUrl: 'https://picsum.photos/seed/302/600/400',
    imageHint: 'design sketch',
  },
  {
    id: 'proj-2',
    title: 'Build a REST API for a Mobile App',
    company: companies[1],
    description: 'Develop a secure and scalable REST API for our new social networking mobile application.',
    longDescription: 'We need a robust backend for our upcoming mobile app. The API should handle user authentication, profiles, posts, and real-time messaging. We expect clean, well-documented code with a focus on performance and security. Experience with Node.js/Express and PostgreSQL is a must.',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'REST API'],
    deliverables: ['Fully functional REST API', 'API documentation', 'Database schema'],
    timeline: '6 Weeks',
    deadline: '2024-09-15',
    compensation: { winner: 8000, participation: 750 },
    applicantsCount: 42,
    shortlistedCount: 8,
    status: 'Open',
    imageUrl: 'https://picsum.photos/seed/301/600/400',
    imageHint: 'laptop code',
  },
  {
    id: 'proj-3',
    title: 'Landing Page in Next.js',
    company: companies[2],
    description: 'Create a fast, responsive, and SEO-friendly landing page for a new SaaS product.',
    longDescription: 'We are launching a new product and need a stunning landing page to capture leads. The page should be built with Next.js for performance and SSR capabilities. It needs to be pixel-perfect based on our Figma designs and optimized for search engines.',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'SEO'],
    deliverables: ['Deployed landing page', 'Source code'],
    timeline: '2 Weeks',
    deadline: '2024-08-20',
    compensation: { winner: 2500, participation: 250 },
    applicantsCount: 18,
    shortlistedCount: 4,
    status: 'Completed',
    imageUrl: 'https://picsum.photos/seed/303/600/400',
    imageHint: 'web design',
  },
];

export const applications: Application[] = [
    { id: 'app-1', project: projects[0], developer: developers[2], status: 'Shortlisted', proposal: "I have extensive experience in designing e-commerce dashboards and I'm excited about this opportunity." },
    { id: 'app-2', project: projects[1], developer: developers[1], status: 'Applied', proposal: "My backend skills with Node.js and PostgreSQL are a perfect fit for this project." },
    { id: 'app-3', project: projects[2], developer: developers[0], status: 'Selected', proposal: "I specialize in building high-performance landing pages with Next.js and can deliver this quickly." },
]
