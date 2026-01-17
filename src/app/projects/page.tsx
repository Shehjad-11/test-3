import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/lib/data';
import { Search, Filter, SlidersHorizontal, MapPin, Clock, DollarSign, Users, Zap, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsPage() {
  const categories = [
    { name: 'Frontend Development', count: 45, color: 'from-blue-500 to-cyan-500' },
    { name: 'UI/UX Design', count: 32, color: 'from-purple-500 to-pink-500' },
    { name: 'Backend Development', count: 28, color: 'from-green-500 to-emerald-500' },
    { name: 'Mobile Development', count: 23, color: 'from-orange-500 to-red-500' },
    { name: 'Full-Stack', count: 19, color: 'from-indigo-500 to-blue-500' },
    { name: 'DevOps', count: 15, color: 'from-gray-500 to-slate-500' },
  ];

  const stats = [
    { label: 'Active Projects', value: '2,847', icon: TrendingUp },
    { label: 'Total Budget', value: '$2.4M', icon: DollarSign },
    { label: 'Companies', value: '890+', icon: Users },
    { label: 'Success Rate', value: '94%', icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary via-accent to-primary animate-gradient">
        <div className="container mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">
            Discover Amazing Projects
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
            Find your next opportunity from top companies worldwide. Fair compensation guaranteed.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex gap-4 bg-white/10 backdrop-blur rounded-full p-2">
              <div className="flex-1 flex items-center gap-3 bg-white rounded-full px-4 py-3">
                <Search className="h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Search projects by skills, company, or keywords..." 
                  className="border-0 bg-transparent focus-visible:ring-0 text-foreground"
                />
              </div>
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90">
                Search
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-headline text-center mb-8">
            Browse by <span className="text-gradient">Category</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-card to-card/50 hover:scale-105 transition-transform cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold font-headline mb-1">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.count} projects</p>
                    </div>
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                      <span className="text-white font-bold">{category.count}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Filters */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-semibold">All Projects</h2>
              <Badge variant="secondary">{projects.length} results</Badge>
            </div>
            <div className="flex items-center gap-4">
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Budget Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Budgets</SelectItem>
                  <SelectItem value="0-1000">$0 - $1,000</SelectItem>
                  <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                  <SelectItem value="5000+">$5,000+</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Timelines</SelectItem>
                  <SelectItem value="1week">1 Week</SelectItem>
                  <SelectItem value="2weeks">2 Weeks</SelectItem>
                  <SelectItem value="1month">1 Month</SelectItem>
                  <SelectItem value="3months">3+ Months</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="budget-high">Highest Budget</SelectItem>
                  <SelectItem value="budget-low">Lowest Budget</SelectItem>
                  <SelectItem value="deadline">Deadline</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                More Filters
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Projects
            </Button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <Card className="border-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl md:text-3xl font-bold font-headline mb-4">
                Ready to Start Your Next Project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of successful professionals who have found their perfect projects on CollabForge
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gradient-bg">
                  <Link href="/login">Get Started Today</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/how-it-works">Learn How It Works</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}