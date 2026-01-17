'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Plus, 
  Users, 
  Briefcase, 
  DollarSign, 
  TrendingUp, 
  Clock, 
  Eye,
  Edit,
  MessageSquare,
  Star,
  Calendar,
  Filter,
  Search,
  MoreHorizontal
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';

export default function CompanyDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { title: 'Active Projects', value: '12', change: '+2', icon: Briefcase, color: 'text-blue-600' },
    { title: 'Total Applications', value: '248', change: '+15%', icon: Users, color: 'text-green-600' },
    { title: 'Budget Spent', value: '$45,200', change: '+8%', icon: DollarSign, color: 'text-purple-600' },
    { title: 'Success Rate', value: '94%', change: '+2%', icon: TrendingUp, color: 'text-emerald-600' },
  ];

  const recentProjects = [
    {
      id: 1,
      title: 'E-commerce Mobile App',
      status: 'Active',
      applications: 24,
      budget: '$8,000',
      deadline: '2024-02-15',
      progress: 65,
    },
    {
      id: 2,
      title: 'Dashboard Redesign',
      status: 'Review',
      applications: 18,
      budget: '$5,500',
      deadline: '2024-02-20',
      progress: 90,
    },
    {
      id: 3,
      title: 'API Development',
      status: 'Completed',
      applications: 31,
      budget: '$12,000',
      deadline: '2024-01-30',
      progress: 100,
    },
  ];

  const topApplicants = [
    {
      id: 1,
      name: 'Sarah Chen',
      title: 'Senior UI/UX Designer',
      rating: 4.9,
      projects: 23,
      avatar: 'https://picsum.photos/seed/sarah/40/40',
      skills: ['Figma', 'React', 'Design Systems'],
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      title: 'Full-Stack Developer',
      rating: 4.8,
      projects: 18,
      avatar: 'https://picsum.photos/seed/marcus/40/40',
      skills: ['Node.js', 'React', 'PostgreSQL'],
    },
    {
      id: 3,
      name: 'Emily Johnson',
      title: 'Frontend Specialist',
      rating: 4.9,
      projects: 15,
      avatar: 'https://picsum.photos/seed/emily/40/40',
      skills: ['Vue.js', 'TypeScript', 'CSS'],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/40 bg-card/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold font-headline text-gradient">Company Dashboard</h1>
              <p className="text-muted-foreground mt-1">Manage your projects and find the best talent</p>
            </div>
            <Button className="gradient-bg font-semibold">
              <Plus className="mr-2 h-4 w-4" />
              Post New Project
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 lg:w-fit">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Projects */}
              <Card className="border-0 bg-gradient-to-br from-card to-card/50">
                <CardHeader>
                  <CardTitle className="font-headline">Recent Projects</CardTitle>
                  <CardDescription>Your latest project activities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentProjects.map((project) => (
                    <div key={project.id} className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold">{project.title}</h4>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {project.applications} applications
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {project.deadline}
                          </span>
                        </div>
                        <Progress value={project.progress} className="mt-2 h-2" />
                      </div>
                      <div className="text-right ml-4">
                        <Badge variant={project.status === 'Active' ? 'default' : project.status === 'Review' ? 'secondary' : 'outline'}>
                          {project.status}
                        </Badge>
                        <p className="text-sm font-semibold mt-1">{project.budget}</p>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    View All Projects
                  </Button>
                </CardContent>
              </Card>

              {/* Top Applicants */}
              <Card className="border-0 bg-gradient-to-br from-card to-card/50">
                <CardHeader>
                  <CardTitle className="font-headline">Top Applicants</CardTitle>
                  <CardDescription>Highly rated talent in your network</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {topApplicants.map((applicant) => (
                    <div key={applicant.id} className="flex items-center gap-4 p-4 bg-background/50 rounded-lg">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={applicant.avatar} />
                        <AvatarFallback>{applicant.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold">{applicant.name}</h4>
                        <p className="text-sm text-muted-foreground">{applicant.title}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{applicant.rating}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{applicant.projects} projects</span>
                        </div>
                        <div className="flex gap-1 mt-2">
                          {applicant.skills.slice(0, 2).map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                          ))}
                          {applicant.skills.length > 2 && (
                            <Badge variant="secondary" className="text-xs">+{applicant.skills.length - 2}</Badge>
                          )}
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    Browse All Talent
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold font-headline">All Projects</h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search projects..." className="w-64" />
                </div>
                <Select>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="review">Review</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="gradient-bg">
                  <Plus className="mr-2 h-4 w-4" />
                  New Project
                </Button>
              </div>
            </div>

            <div className="grid gap-6">
              {recentProjects.map((project) => (
                <Card key={project.id} className="border-0 bg-gradient-to-br from-card to-card/50">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-xl font-semibold font-headline">{project.title}</h3>
                          <Badge variant={project.status === 'Active' ? 'default' : project.status === 'Review' ? 'secondary' : 'outline'}>
                            {project.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Applications</p>
                            <p className="font-semibold">{project.applications}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Budget</p>
                            <p className="font-semibold">{project.budget}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Deadline</p>
                            <p className="font-semibold">{project.deadline}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Progress</p>
                            <div className="flex items-center gap-2">
                              <Progress value={project.progress} className="flex-1 h-2" />
                              <span className="text-sm font-semibold">{project.progress}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <div className="text-center py-12">
              <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Applications Management</h3>
              <p className="text-muted-foreground mb-6">Review and manage applications for your projects</p>
              <Button className="gradient-bg">Coming Soon</Button>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="text-center py-12">
              <TrendingUp className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-muted-foreground mb-6">Detailed insights and performance metrics</p>
              <Button className="gradient-bg">Coming Soon</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}