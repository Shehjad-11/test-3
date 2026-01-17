'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building2, User, ArrowRight, Zap, Shield, CheckCircle } from 'lucide-react';
import { mockUsers, setCurrentUser, type UserRole } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/logo';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('developer');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock authentication - find user by email and role
    const user = mockUsers.find(u => u.email === email && u.role === role);
    
    if (user) {
      setCurrentUser(user);
      router.push(role === 'company' ? '/dashboard/company' : '/dashboard/developer');
    } else {
      alert('Invalid credentials. Try: john@innovate.com (company) or alice@example.com (developer)');
    }
    
    setIsLoading(false);
  };

  const features = [
    { icon: Shield, title: "Secure Platform", description: "Enterprise-grade security" },
    { icon: Zap, title: "AI-Powered", description: "Smart project matching" },
    { icon: CheckCircle, title: "Fair Compensation", description: "Guaranteed payments" },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary via-accent to-primary animate-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-white">
          <div className="mb-8">
            <Logo className="h-16 w-16 mb-4" />
            <h1 className="text-4xl font-bold font-headline mb-4">Welcome to CollabForge</h1>
            <p className="text-xl opacity-90 max-w-md text-center">
              Where innovation meets talent. Join the future of project-based collaboration.
            </p>
          </div>
          
          <div className="grid gap-6 max-w-md">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="bg-white/20 p-2 rounded-full">
                  <feature.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm opacity-80">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <Card className="w-full max-w-md border-0 shadow-2xl">
          <CardHeader className="text-center pb-2">
            <div className="lg:hidden mb-4">
              <Logo className="h-12 w-12 mx-auto mb-2" />
              <span className="text-2xl font-bold font-headline text-gradient">CollabForge</span>
            </div>
            <CardTitle className="text-3xl font-headline">Welcome Back</CardTitle>
            <CardDescription className="text-base">Sign in to your account and continue your journey</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Tabs value={role} onValueChange={(value) => setRole(value as UserRole)} className="mb-6">
              <TabsList className="grid w-full grid-cols-2 h-12">
                <TabsTrigger value="developer" className="flex items-center gap-2 text-sm font-medium">
                  <User className="h-4 w-4" />
                  Developer
                </TabsTrigger>
                <TabsTrigger value="company" className="flex items-center gap-2 text-sm font-medium">
                  <Building2 className="h-4 w-4" />
                  Company
                </TabsTrigger>
              </TabsList>
              
              <form onSubmit={handleLogin} className="space-y-6 mt-8">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={role === 'company' ? 'john@innovate.com' : 'alice@example.com'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
                
                <Button type="submit" className="w-full h-12 gradient-bg font-semibold text-base" disabled={isLoading}>
                  {isLoading ? 'Signing in...' : (
                    <>
                      Sign In <ArrowRight className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="font-semibold mb-3 text-sm">Demo Credentials:</p>
                <TabsContent value="company" className="mt-0 space-y-1">
                  <p className="text-sm"><strong>Email:</strong> john@innovate.com</p>
                  <p className="text-sm"><strong>Password:</strong> any</p>
                </TabsContent>
                <TabsContent value="developer" className="mt-0 space-y-1">
                  <p className="text-sm"><strong>Email:</strong> alice@example.com</p>
                  <p className="text-sm"><strong>Password:</strong> any</p>
                </TabsContent>
              </div>
            </Tabs>
            
            <div className="text-center text-sm text-muted-foreground">
              Don't have an account?{' '}
              <Button variant="link" className="p-0 h-auto font-semibold text-primary">
                Sign up for free
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}