import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, X, Zap, Building2, User, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  const companyPlans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for small projects and testing the platform',
      features: [
        'Post up to 2 projects per month',
        'Basic AI matching',
        'Standard support',
        'Project management tools',
        'Basic analytics'
      ],
      limitations: [
        'Limited to 10 applications per project',
        'No priority support'
      ],
      cta: 'Get Started Free',
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing companies with regular project needs',
      features: [
        'Unlimited projects',
        'Advanced AI matching',
        'Priority support',
        'Advanced analytics',
        'Custom branding',
        'Dedicated account manager',
        'API access'
      ],
      limitations: [],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large organizations',
      features: [
        'Everything in Professional',
        'Custom integrations',
        'White-label solution',
        'Advanced security',
        'SLA guarantee',
        'On-premise deployment',
        'Custom training'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const developerFeatures = [
    'Browse unlimited projects',
    'AI-powered project matching',
    'Guaranteed participation rewards',
    'Direct client communication',
    'Portfolio building tools',
    'Skill development resources',
    'Payment protection',
    'Community access'
  ];

  const faqs = [
    {
      question: 'How does the compensation model work?',
      answer: 'All shortlisted developers receive participation compensation, with additional rewards for winning submissions. This ensures fair payment for effort invested.'
    },
    {
      question: 'What percentage does CollabForge take?',
      answer: 'We take a small platform fee (5-10%) only from successful project completions. There are no upfront costs or hidden fees.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. You\'ll continue to have access until the end of your billing period.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for our Professional plan. No credit card required to start.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary via-accent to-primary animate-gradient">
        <div className="container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your needs. Always fair, always transparent.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>14-Day Free Trial</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Company Pricing */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-4">
              <Building2 className="mr-2 h-4 w-4" />
              For Companies
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              Find the Perfect Plan
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Scale your hiring with our flexible pricing options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {companyPlans.map((plan, index) => (
              <Card key={index} className={`border-2 ${plan.popular ? 'border-primary bg-gradient-to-br from-primary/5 to-accent/5' : 'border-border/40'} bg-gradient-to-br from-card to-card/50 hover:scale-105 transition-all duration-300 relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1">
                      <Star className="mr-1 h-3 w-3" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-headline">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                  </div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <X className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{limitation}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className={`w-full font-semibold ${plan.popular ? 'gradient-bg' : ''}`} variant={plan.popular ? 'default' : 'outline'}>
                    <Link href="/register">
                      {plan.cta}
                      {plan.cta !== 'Contact Sales' && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Developer Pricing */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white mb-4">
              <User className="mr-2 h-4 w-4" />
              For Developers
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              Always Free to Join
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start earning immediately with no upfront costs or subscription fees
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-accent/20 bg-gradient-to-br from-card to-card/50">
              <CardHeader className="text-center">
                <div className="mx-auto bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-full w-fit mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-headline">Developer Account</CardTitle>
                <div className="text-4xl font-bold text-gradient mb-4">Free Forever</div>
                <CardDescription className="text-lg">
                  Access all platform features and start earning from day one
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {developerFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-border/40">
                  <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold mb-2">How You Earn:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Participation rewards for shortlisted submissions</li>
                      <li>• Winner bonuses for selected projects</li>
                      <li>• No platform fees on your earnings</li>
                    </ul>
                  </div>
                  
                  <Button asChild className="w-full gradient-bg font-semibold text-lg py-6">
                    <Link href="/register">
                      Start Earning Today <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our pricing and platform
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-card to-card/50">
                <CardHeader>
                  <CardTitle className="text-lg font-headline">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions?
            </p>
            <Button variant="outline" size="lg">
              Contact Support
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}