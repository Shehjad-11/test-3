'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Briefcase, 
  DollarSign, 
  Clock, 
  Star,
  TrendingUp,
  Award,
  Eye,
  Heart,
  Filter,
  Calendar,
  MapPin,
  Users,
  Code,
  Palette,
  Brain,
  Zap
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';

export default function DeveloperDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { title: 'Applications Sent', value: '23', change: '+3', icon: Briefcase, color: 'text-blue-600' },
    { title: 'Projects Won', value: '8', change: '+2', icon: Award, color: 'text-green-600' },
    { title: 'Total Earnings', value: '$12,400', change: '+15%', icon: DollarSign, color: 'text-purple-600' },
    { title: 'Success Rate', value: '87%', change: '+5%', icon: TrendingUp, color: 'text-emerald-600' },
  ];

  const recommendedProjects = [
    {
      id: 1,
      title: 'React Dashboard Development',
      company: 'TechCorp Inc.',
      budget: '$3,500',
      deadline: '3 weeks',
      skills: ['React', 'TypeScript', 'Tailwind CSS'],
      applicants: 12,
      matchScore: 95,
      posted: '2 days ago',
      logo: 'https://picsum.photos/seed/techcorp/40/40',
    },
    {
      id: 2,
      title: 'Mobile App UI Design',
      company: 'StartupXYZ',
      budget: '$2,800',
      deadline: '2 weeks',
      skills: ['Figma', 'UI/UX', 'Mobile Design'],
      applicants: 8,
      matchScore: 88,
      posted: '1 day ago',
      logo: 'https://picsum.photos/seed/startupxyz/40/40',
    },
    {
      id: 3,
      title: 'E-commerce Frontend',
      company: 'ShopFlow',
      budget: '$4,200',
      deadline: '4 weeks',
      skills: ['Next.js', 'React', 'Stripe Integration'],
      applicants: 15,
      matchScore: 92,
      posted: '3 hours ago',
      logo: 'https://picsum.photos/seed/shopflow/40/40',
    },
  ];

  const myApplications = [
    {
      id: 1,
      title: 'Landing Page Redesign',
      company: 'DesignCo',
      status: 'Shortlisted',
      appliedDate: '2024-01-15',
      budget: '$1,500',
      progress: 75,
    },
    {
      id: 2,
      title: 'API Integration Project',
      company: 'DataFlow',
      status: 'Under Review',
      appliedDate: '2024-01-18',
      budget: '$2,200',
      progress: 25,
    },
    {
      id: 3,
      title: 'Mobile App Development',
      company: 'AppMakers',
      status: 'Selected',
      appliedDate: '2024-01-10',
      budget: '$5,000',
      progress: 100,
    },
  ];

  const skillCategories = [
    { name: 'Frontend', icon: Code, count: 45, color: 'from-blue-500 to-cyan-500' },
    { name: 'Design', icon: Palette, count: 23, color: 'from-purple-500 to-pink-500' },
    { name: 'AI/ML', icon: Brain, count: 12, color: 'from-green-500 to-emerald-500' },
    { name: 'Full-Stack', icon: Zap, count: 31, color: 'from-orange-500 to-red-500' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/40 bg-card/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold font-headline text-gradient">Developer Dashboard</h1>
              <p className="text-muted-foreground mt-1">Discover amazing projects and grow your career</p>
            </div>
            <Button className="gradient-bg font-semibold">
              <Search className="mr-2 h-4 w-4" />
              Browse Projects
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 lg:w-fit">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="projects">Discover</TabsTrigger>
            <TabsTrigger value="applications">My Applications</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="border-0 bg-gradient-to-br from-card to-card/50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                        <p className="text-3xl font-bold font-headline">{stat.value}</p>
                        <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                      </div>
                      <div className={`p-3 rounded-full bg-primary/10 ${stat.color}`}>
                        <stat.icon className="h-6 w-6" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recommended Projects */}
              <div className="lg:col-span-2">
                <Card className="border-0 bg-gradient-to-br from-card to-card/50">
                  <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      AI-Recommended Projects
                    </CardTitle>
                    <CardDescription>Projects perfectly matched to your skills</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recommendedProjects.map((project) => (
                      <div key={project.id} className="p-4 bg-background/50 rounded-lg border border-border/40">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={project.logo} />
                              <AvatarFallback>{project.company[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-semibold">{project.title}</h4>
                              <p className="text-sm text-muted-foreground">{project.company}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                              {project.matchScore}% Match
                            </Badge>
                            <Button size="sm" variant="ghost">
                              <Heart className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <DollarSign className="h-3 w-3" />
                            {project.budget}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {project.deadline}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {project.applicants} applicants
                          </span>
                          <span>{project.posted}</span>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1 gradient-bg">
                            Apply Now
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      View More Recommendations
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Skill Categories & Recent Activity */}
              <div className="space-y-6">
                <Card className="border-0 bg-gradient-to-br from-card to-card/50">
                  <CardHeader>
                    <CardTitle className="font-headline">Trending Skills</CardTitle>
                    <CardDescription>Popular project categories</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {skillCategories.map((category) => (
                      <div key={category.name} className="flex items-center gap-4 p-3 bg-background/50 rounded-lg">
                        <div className={`p-2 rounded-full bg-gradient-to-r ${category.color}`}>
                          <category.icon className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{category.name}</h4>
                          <p className="text-sm text-muted-foreground">{category.count} projects</p>
                        </div>
                        <Button size="sm" variant="ghost">
                          <Search className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-br from-card to-card/50">
                  <CardHeader>
                    <CardTitle className="font-headline">My Applications</CardTitle>
                    <CardDescription>Recent application status</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {myApplications.slice(0, 3).map((app) => (
                      <div key={app.id} className="p-3 bg-background/50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-sm">{app.title}</h4>
                          <Badge variant={app.status === 'Selected' ? 'default' : app.status === 'Shortlisted' ? 'secondary' : 'outline'} className="text-xs">
                            {app.status}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{app.company}</p>
                        <Progress value={app.progress} className="h-1" />
                      </div>
                    ))}
                    <Button variant="outline" size="sm" className="w-full">
                      View All Applications
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold font-headline">Discover Projects</h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search projects..." className="w-64" />
                </div>
                <Select>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="frontend">Frontend</SelectItem>
                    <SelectItem value="backend">Backend</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </div>
            </div>

            <div className="grid gap-6">
              {recommendedProjects.map((project) => (
                <Card key={project.id} className="border-0 bg-gradient-to-br from-card to-card/50">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={project.logo} />
                          <AvatarFallback>{project.company[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-xl font-semibold font-headline">{project.title}</h3>
                          <p className="text-muted-foreground">{project.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                          {project.matchScore}% Match
                        </Badge>
                        <Button size="sm" variant="ghost">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Budget</p>
                        <p className="font-semibold">{project.budget}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Timeline</p>
                        <p className="font-semibold">{project.deadline}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Applicants</p>
                        <p className="font-semibold">{project.applicants}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Posted</p>
                        <p className="font-semibold">{project.posted}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button className="flex-1 gradient-bg">
                        Apply Now
                      </Button>
                      <Button variant="outline">
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold font-headline">My Applications</h2>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="shortlisted">Shortlisted</SelectItem>
                  <SelectItem value="selected">Selected</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-6">
              {myApplications.map((application) => (
                <Card key={application.id} className="border-0 bg-gradient-to-br from-card to-card/50">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold font-headline">{application.title}</h3>
                        <p className="text-muted-foreground">{application.company}</p>
                      </div>
                      <Badge variant={application.status === 'Selected' ? 'default' : application.status === 'Shortlisted' ? 'secondary' : 'outline'}>
                        {application.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Applied Date</p>
                        <p className="font-semibold">{application.appliedDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Budget</p>
                        <p className="font-semibold">{application.budget}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Progress</p>
                        <div className="flex items-center gap-2">
                          <Progress value={application.progress} className="flex-1 h-2" />
                          <span className="text-sm font-semibold">{application.progress}%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button variant="outline">
                        <Eye className="mr-2 h-4 w-4" />
                        View Project
                      </Button>
                      {application.status === 'Shortlisted' && (
                        <Button className="gradient-bg">
                          Submit Work
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <div className="text-center py-12">
              <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Profile Management</h3>
              <p className="text-muted-foreground mb-6">Update your skills, portfolio, and preferences</p>
              <Button className="gradient-bg">Coming Soon</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}