import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Users, 
  Search, 
  Award, 
  Zap, 
  Code, 
  DollarSign, 
  CheckCircle,
  ArrowRight,
  Play,
  Clock,
  Shield,
  Star
} from 'lucide-react';
import Link from 'next/link';

export default function HowItWorksPage() {
  const companySteps = [
    {
      step: 1,
      icon: FileText,
      title: 'Post Your Project',
      description: 'Create a detailed project brief with requirements, timeline, and budget.',
      details: ['Define project scope and deliverables', 'Set fair compensation structure', 'Specify required skills and experience'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: 2,
      icon: Zap,
      title: 'AI-Powered Matching',
      description: 'Our advanced AI analyzes and matches your project with suitable talent.',
      details: ['Intelligent skill matching', 'Portfolio analysis', 'Availability assessment'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: 3,
      icon: Users,
      title: 'Review Applications',
      description: 'Evaluate proposals and shortlist candidates for the submission phase.',
      details: ['Review developer profiles', 'Assess proposal quality', 'Shortlist top candidates'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: 4,
      icon: Award,
      title: 'Select Winner',
      description: 'Choose the best submission while ensuring fair compensation for all.',
      details: ['Evaluate submitted work', 'Provide feedback', 'Distribute rewards fairly'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const developerSteps = [
    {
      step: 1,
      icon: Search,
      title: 'Discover Projects',
      description: 'Browse curated projects that match your skills and interests.',
      details: ['Smart project recommendations', 'Filter by skills and budget', 'Save interesting projects'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      step: 2,
      icon: FileText,
      title: 'Submit Proposal',
      description: 'Apply with a compelling proposal showcasing your expertise.',
      details: ['Craft personalized proposals', 'Highlight relevant experience', 'Set competitive rates'],
      color: 'from-cyan-500 to-teal-500'
    },
    {
      step: 3,
      icon: Code,
      title: 'Create Solution',
      description: 'If shortlisted, develop your solution within the given timeline.',
      details: ['Access project requirements', 'Use professional tools', 'Submit high-quality work'],
      color: 'from-green-500 to-lime-500'
    },
    {
      step: 4,
      icon: DollarSign,
      title: 'Get Rewarded',
      description: 'Receive guaranteed compensation for your participation and effort.',
      details: ['Participation rewards', 'Winner bonuses', 'Fast, secure payments'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Guaranteed Payments',
      description: 'All shortlisted participants receive compensation, ensuring your time is valued.'
    },
    {
      icon: CheckCircle,
      title: 'Transparent Process',
      description: 'Clear guidelines, open communication, and detailed feedback at every step.'
    },
    {
      icon: Star,
      title: 'Quality Assurance',
      description: 'Rigorous vetting process ensures high-quality projects and professional standards.'
    },
    {
      icon: Clock,
      title: 'Efficient Timeline',
      description: 'Streamlined process from application to completion, respecting everyone\'s time.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary via-accent to-primary animate-gradient">
        <div className="container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6">
            How CollabForge Works
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
            A transparent, fair, and efficient platform connecting companies with top talent
          </p>
          <Button size="lg" variant="secondary" className="font-semibold">
            <Play className="mr-2 h-5 w-5" />
            Watch Demo Video
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Company Process */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-4">
              For Companies
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              Find and Hire Top Talent
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Post your project and let our AI match you with the perfect developers and designers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companySteps.map((step, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-card to-card/50 hover:scale-105 transition-all duration-300 relative">
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto bg-gradient-to-r ${step.color} p-4 rounded-full w-fit mb-4 relative`}>
                    <step.icon className="h-8 w-8 text-white" />
                    <div className="absolute -top-2 -right-2 bg-white text-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <CardTitle className="font-headline text-lg">{step.title}</CardTitle>
                  <CardDescription className="text-sm">{step.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                {index < companySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Developer Process */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white mb-4">
              For Developers
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              Discover Amazing Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find projects that match your skills and get fairly compensated for your work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developerSteps.map((step, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-card to-card/50 hover:scale-105 transition-all duration-300 relative">
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto bg-gradient-to-r ${step.color} p-4 rounded-full w-fit mb-4 relative`}>
                    <step.icon className="h-8 w-8 text-white" />
                    <div className="absolute -top-2 -right-2 bg-white text-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <CardTitle className="font-headline text-lg">{step.title}</CardTitle>
                  <CardDescription className="text-sm">{step.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                {index < developerSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              Why Choose <span className="text-gradient">CollabForge</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the benefits of our innovative platform designed for fair collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-card to-card/50 text-center hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit mb-4">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="border-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-12">
            <CardContent className="p-0">
              <h3 className="text-3xl md:text-4xl font-bold font-headline mb-6">
                Ready to Get Started?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of successful companies and developers who trust CollabForge for their projects
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gradient-bg font-semibold">
                  <Link href="/register">
                    Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/projects">Browse Projects</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}