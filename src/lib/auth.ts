// Authentication and user management
export type UserRole = 'company' | 'developer';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  createdAt: string;
}

export interface CompanyProfile extends User {
  role: 'company';
  companyName: string;
  website?: string;
  description: string;
  industry: string;
  size: string;
  location: string;
}

export interface DeveloperProfile extends User {
  role: 'developer';
  title: string;
  skills: string[];
  experience: string;
  portfolio: {
    github?: string;
    behance?: string;
    dribbble?: string;
    website?: string;
  };
  bio: string;
  availability: 'Full-time' | 'Part-time' | 'Unavailable';
  hourlyRate?: number;
}

// Mock authentication - in real app, use NextAuth.js or similar
let currentUser: CompanyProfile | DeveloperProfile | null = null;

export function getCurrentUser(): CompanyProfile | DeveloperProfile | null {
  return currentUser;
}

export function setCurrentUser(user: CompanyProfile | DeveloperProfile | null) {
  currentUser = user;
}

export function isCompany(user: User | null): user is CompanyProfile {
  return user?.role === 'company';
}

export function isDeveloper(user: User | null): user is DeveloperProfile {
  return user?.role === 'developer';
}

// Mock users for demo
export const mockUsers: (CompanyProfile | DeveloperProfile)[] = [
  {
    id: 'company-1',
    email: 'john@innovate.com',
    name: 'John Smith',
    role: 'company',
    companyName: 'Innovate Inc.',
    website: 'https://innovate.com',
    description: 'Leading technology innovation company',
    industry: 'Technology',
    size: '50-100',
    location: 'San Francisco, CA',
    createdAt: '2024-01-15',
  },
  {
    id: 'dev-1',
    email: 'alice@example.com',
    name: 'Alice Johnson',
    role: 'developer',
    title: 'Senior Frontend Developer',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL'],
    experience: '5+ years',
    portfolio: {
      github: 'https://github.com/alice',
      website: 'https://alice-dev.com'
    },
    bio: 'Passionate about building beautiful and performant user interfaces.',
    availability: 'Part-time',
    hourlyRate: 75,
    createdAt: '2024-01-10',
  }
];