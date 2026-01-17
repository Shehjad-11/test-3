import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, User, ArrowRight, CheckCircle, Star, Users, Zap } from 'lucide-react';
import { Logo } from '@/components/logo';

export default function RegisterPage() {
  const companyFeatures = [
    'Post unlimited projects',
    'Access to 15,000+ developers',
    'AI-powered talent matching',
    'Project management tools',
    'Transparent pricing',
    'Quality guarantee'
  ];

  const developerFeatures = [
    'Browse thousands of projects',
    'Get matched with perfect opportunities',
    'Guaranteed compensation',
    'Build your portfolio',
    'Direct client communication',
    'Skill development resources'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechStart',
      content: 'Found amazing developers in just 2 days. The quality exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Full-Stack Developer',
      content: 'Earned $15K in my first month. The platform is transparent and fair.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/40">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center space-x-3">
            <Logo className="h-8 w-8" />
            <span className="font-bold text-xl font-headline text-gradient">CollabForge</span>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6">
            Join the Future of <span className="text-gradient">Collaboration</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Whether you're a company looking for top talent or a developer seeking amazing projects, 
            CollabForge is your gateway to success.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>100% Free to Join</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Verified Companies</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Fair Compensation</span>
            </div>
          </div>
        </div>

        {/* Registration Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Company Registration */}
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-card/50 hover:scale-105 transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full w-fit mb-4">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-headline">I'm a Company</CardTitle>
              <CardDescription className="text-base">
                Find and hire the best developers and designers for your projects
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {companyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-border/40">
                <div className="text-center mb-4">
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    Most Popular for Companies
                  </Badge>
                </div>
                <Button asChild className="w-full gradient-bg font-semibold text-lg py-6">
                  <Link href="/login">
                    Get Started as Company <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Developer Registration */}
          <Card className="border-2 border-accent/20 bg-gradient-to-br from-card to-card/50 hover:scale-105 transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-full w-fit mb-4">
                <User className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-headline">I'm a Developer</CardTitle>
              <CardDescription className="text-base">
                Discover amazing projects and grow your career with fair compensation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {developerFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-border/40">
                <div className="text-center mb-4">
                  <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
                    Perfect for Freelancers
                  </Badge>
                </div>
                <Button asChild className="w-full gradient-bg font-semibold text-lg py-6">
                  <Link href="/login">
                    Get Started as Developer <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-headline text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-card to-card/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">15,000+</div>
              <div className="text-sm text-muted-foreground">Active Developers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">800+</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">$2.4M+</div>
              <div className="text-sm text-muted-foreground">Paid to Developers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Already have an account?{' '}
            <Link href="/login" className="text-primary font-semibold hover:underline">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}