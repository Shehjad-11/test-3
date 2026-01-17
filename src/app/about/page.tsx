import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Target, 
  Heart, 
  Zap, 
  Globe, 
  Award, 
  TrendingUp,
  Shield,
  ArrowRight,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Fair Compensation',
      description: 'We believe every contributor deserves fair payment for their work, regardless of whether they win the project.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Open processes, clear communication, and honest feedback create trust between all parties.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We leverage cutting-edge AI technology to create better matches and more efficient workflows.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive ecosystem where companies and developers can thrive together.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const stats = [
    { label: 'Active Users', value: '25,000+', icon: Users },
    { label: 'Projects Completed', value: '5,000+', icon: Award },
    { label: 'Countries Served', value: '50+', icon: Globe },
    { label: 'Success Rate', value: '98%', icon: TrendingUp },
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former VP of Engineering at TechCorp with 15+ years in product development.',
      avatar: 'https://picsum.photos/seed/sarah-ceo/120/120',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'AI/ML expert and former Google engineer passionate about fair tech solutions.',
      avatar: 'https://picsum.photos/seed/marcus-cto/120/120',
      social: { linkedin: '#', github: '#' }
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Design',
      bio: 'Award-winning designer focused on creating inclusive and accessible experiences.',
      avatar: 'https://picsum.photos/seed/emily-design/120/120',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'David Kim',
      role: 'Head of Community',
      bio: 'Community builder with a passion for connecting talented people worldwide.',
      avatar: 'https://picsum.photos/seed/david-community/120/120',
      social: { linkedin: '#', twitter: '#' }
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Company Founded',
      description: 'CollabForge was born from the vision of creating fair project-based collaboration.'
    },
    {
      year: '2023',
      title: 'First 1,000 Users',
      description: 'Reached our first milestone with developers and companies joining the platform.'
    },
    {
      year: '2024',
      title: 'AI Matching Launch',
      description: 'Introduced our revolutionary AI-powered skill matching system.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded to serve users in over 50 countries worldwide.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary via-accent to-primary animate-gradient">
        <div className="container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6">
            About CollabForge
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
            We're on a mission to revolutionize project-based collaboration by ensuring 
            fair compensation and transparent processes for everyone.
          </p>
          <Button size="lg" variant="secondary" className="font-semibold">
            <ArrowRight className="mr-2 h-5 w-5" />
            Join Our Mission
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Mission Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-gradient-to-r from-primary to-accent text-white mb-6">
              Our Mission
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
              Transforming How the World Collaborates
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We believe that great work deserves fair compensation. Our platform ensures that 
              every developer and designer who contributes to a project receives payment for their 
              effort, creating a more equitable and sustainable freelance ecosystem.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at CollabForge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-card to-card/50 text-center hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className={`mx-auto bg-gradient-to-r ${value.color} p-4 rounded-full w-fit mb-4`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="font-headline text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals building the future of collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-card to-card/50 text-center hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="font-headline text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  <div className="flex justify-center gap-3">
                    {member.social.linkedin && (
                      <Button size="sm" variant="ghost" className="p-2">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    )}
                    {member.social.twitter && (
                      <Button size="sm" variant="ghost" className="p-2">
                        <Twitter className="h-4 w-4" />
                      </Button>
                    )}
                    {member.social.github && (
                      <Button size="sm" variant="ghost" className="p-2">
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in building the CollabForge platform
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card className="border-0 bg-gradient-to-br from-card to-card/50">
                        <CardContent className="p-6">
                          <Badge className="bg-gradient-to-r from-primary to-accent text-white mb-3">
                            {milestone.year}
                          </Badge>
                          <h3 className="text-xl font-semibold font-headline mb-2">{milestone.title}</h3>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="relative z-10 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background"></div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="border-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-12">
            <CardContent className="p-0">
              <h3 className="text-3xl md:text-4xl font-bold font-headline mb-6">
                Ready to Join Our Community?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Be part of the revolution in project-based collaboration. Fair, transparent, and innovative.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gradient-bg font-semibold">
                  <Link href="/register">
                    Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}