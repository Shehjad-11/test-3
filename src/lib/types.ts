import type { ImagePlaceholder } from './placeholder-images';

export type Company = {
  id: string;
  name: string;
  logoUrl: string;
  domain: string;
  description: string;
};

export type Developer = {
  id: string;
  name: string;
  avatarUrl: string;
  title: string;
  skills: string[];
  experience: string;
  portfolio: {
    github?: string;
    behance?: string;
    dribbble?: string;
  };
  bio: string;
  availability: 'Full-time' | 'Part-time' | 'Unavailable';
};

export type Project = {
  id: string;
  title: string;
  company: Company;
  description: string;
  longDescription: string;
  skills: string[];
  deliverables: string[];
  timeline: string;
  deadline: string;
  compensation: {
    winner: number;
    participation: number;
  };
  applicantsCount: number;
  shortlistedCount: number;
  status: 'Open' | 'In Progress' | 'Completed';
  imageUrl: string;
  imageHint: string;
};

export type Application = {
    id: string;
    project: Project;
    developer: Developer;
    status: 'Applied' | 'Shortlisted' | 'Rejected' | 'Selected';
    proposal: string;
}
