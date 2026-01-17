import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Award, Users, Search, FileText, DollarSign, MessageSquare, Zap, Shield, Globe, Rocket, Star, TrendingUp, Code, Palette, Brain, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";
import AiSkillMatcher from "@/components/ai-skill-matcher";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  const stats = [
    { label: "Active Projects", value: "2,500+", icon: Rocket },
    { label: "Talented Developers", value: "15,000+", icon: Users },
    { label: "Companies Served", value: "800+", icon: Globe },
    { label: "Success Rate", value: "98%", icon: TrendingUp },
  ];

  const howItWorksCompany = [
    { 
      icon: FileText, 
      title: "Post Your Vision", 
      description: "Share your project requirements, tech stack, timeline, and budget with our intelligent matching system.",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: Brain, 
      title: "AI-Powered Matching", 
      description: "Our advanced AI analyzes and matches your project with the most suitable developers and designers.",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: Users, 
      title: "Review & Shortlist", 
      description: "Evaluate applications, portfolios, and proposals. Shortlist candidates for the submission phase.",
      color: "from-green-500 to-emerald-500"
    },
    { 
      icon: Award, 
      title: "Fair Selection", 
      description: "Choose the winning submission while ensuring all participants receive fair compensation for their effort.",
      color: "from-orange-500 to-red-500"
    },
  ];

  const howItWorksDeveloper = [
    { 
      icon: Search, 
      title: "Discover Opportunities", 
      description: "Browse curated projects that match your skills, interests, and availability using our smart filters.",
      color: "from-indigo-500 to-blue-500"
    },
    { 
      icon: Zap, 
      title: "Apply with Confidence", 
      description: "Submit compelling proposals showcasing your expertise and unique approach to the project.",
      color: "from-cyan-500 to-teal-500"
    },
    { 
      icon: Code, 
      title: "Create & Submit", 
      description: "If shortlisted, develop your solution using industry-standard tools and submit within the timeline.",
      color: "from-green-500 to-lime-500"
    },
    { 
      icon: DollarSign, 
      title: "Get Rewarded", 
      description: "Receive guaranteed compensation for participation, with bonus rewards for winning submissions.",
      color: "from-yellow-500 to-orange-500"
    },
  ];
  
  const whyUsPoints = [
    { 
      icon: Shield, 
      title: "Guaranteed Compensation", 
      description: "Every shortlisted participant receives fair payment, ensuring your time and effort are always valued and rewarded.",
      gradient: "from-emerald-500 to-teal-500"
    },
    { 
      icon: CheckCircle, 
      title: "Complete Transparency", 
      description: "Crystal-clear processes, open communication, and detailed feedback at every stage of the collaboration.",
      gradient: "from-blue-500 to-indigo-500"
    },
    { 
      icon: Brain, 
      title: "AI-Enhanced Matching", 
      description: "Advanced algorithms ensure perfect project-talent alignment, increasing success rates and satisfaction.",
      gradient: "from-purple-500 to-pink-500"
    },
  ];

  const features = [
    { icon: Palette, title: "Design Excellence", description: "Top-tier UI/UX designers" },
    { icon: Code, title: "Development Mastery", description: "Expert full-stack developers" },
    { icon: Clock, title: "Rapid Delivery", description: "Fast turnaround times" },
    { icon: Star, title: "Quality Assured", description: "Rigorous quality standards" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative hero-gradient pt-20 md:pt-32 pb-16 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Powered by Advanced AI</span>
            </div>
            
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              <span className="text-gradient">CollabForge</span>
              <br />
              <span className="text-foreground/90">Where Innovation</span>
              <br />
              <span className="text-foreground/90">Meets Talent</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              The ultimate platform connecting visionary companies with world-class developers and designers. 
              Experience fair compensation, transparent processes, and cutting-edge collaboration technology.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
              <Button asChild size="lg" className="font-bold text-lg px-8 py-6 gradient-bg hover:scale-105 transition-transform">
                <Link href="/projects">
                  Explore Projects <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-bold text-lg px-8 py-6 glass-effect hover:scale-105 transition-transform">
                <Link href="/login">Post a Project</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
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

        {/* Features Grid */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">
                Why Choose <span className="text-gradient">CollabForge</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience the future of project-based collaboration with our innovative platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {features.map((feature, index) => (
                <Card key={index} className="text-center border-0 bg-gradient-to-br from-card to-card/50 hover:scale-105 transition-transform">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit mb-4">
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="font-headline text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyUsPoints.map((point, index) => (
                <Card key={index} className="text-center border-0 bg-gradient-to-br from-card to-card/50 hover:scale-105 transition-all duration-300 group">
                  <CardHeader>
                    <div className={`mx-auto bg-gradient-to-r ${point.gradient} p-4 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform`}>
                      <point.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="font-headline text-xl">{point.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-center mb-16">
              How <span className="text-gradient">CollabForge</span> Works
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h3 className="font-headline text-2xl md:text-3xl font-semibold text-center mb-12 flex items-center justify-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  For Companies
                </h3>
                <div className="space-y-8">
                  {howItWorksCompany.map((step, index) => (
                    <div key={index} className="flex items-start gap-6 group">
                      <div className={`flex-shrink-0 bg-gradient-to-r ${step.color} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-headline text-xl font-semibold mb-2">{step.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-headline text-2xl md:text-3xl font-semibold text-center mb-12 flex items-center justify-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                    <Code className="w-4 h-4 text-white" />
                  </div>
                  For Developers & Designers
                </h3>
                <div className="space-y-8">
                  {howItWorksDeveloper.map((step, index) => (
                    <div key={index} className="flex items-start gap-6 group">
                      <div className={`flex-shrink-0 bg-gradient-to-r ${step.color} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-headline text-xl font-semibold mb-2">{step.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Projects */}
        <section id="featured-projects" className="py-16 md:py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">
                Featured <span className="text-gradient">Projects</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover exciting opportunities from top companies worldwide
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg" className="font-bold">
                <Link href="/projects">
                  View All Projects <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* AI Skill Matcher */}
        <section id="ai-matcher" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
                <Brain className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">AI-Powered Technology</span>
              </div>
              <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">
                Smart <span className="text-gradient">Skill Matching</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience our revolutionary AI that analyzes your skills and matches you with the perfect projects. 
                Get instant compatibility scores and personalized recommendations.
              </p>
            </div>
            <AiSkillMatcher />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary via-accent to-primary animate-gradient">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
              Join thousands of successful professionals who have found their perfect projects on CollabForge
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Button asChild size="lg" variant="secondary" className="font-bold text-lg px-8 py-6">
                <Link href="/login">Get Started Today</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-bold text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                <Link href="/projects">Browse Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}