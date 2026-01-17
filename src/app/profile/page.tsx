import Image from "next/image";
import { Github, Dribbble, Globe, Mail, MapPin, Briefcase, Star, CheckCircle } from "lucide-react";
import { developers } from "@/lib/data";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ProfilePage() {
  const developer = developers[0]; // Using mock data for a single developer

  return (
    <div className="bg-muted/40 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Card className="overflow-hidden">
          <div className="bg-card h-32 md:h-48 relative">
             <Image
              src="https://picsum.photos/seed/profile-bg/1200/300"
              alt="Profile banner"
              layout="fill"
              objectFit="cover"
              data-ai-hint="abstract background"
            />
          </div>
          <CardContent className="p-4 md:p-8 pt-0">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-shrink-0 -mt-16 md:-mt-24">
                <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-background bg-background">
                  <Image
                    src={developer.avatarUrl}
                    alt={developer.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                    data-ai-hint="woman portrait"
                  />
                </div>
              </div>

              <div className="w-full md:ml-8 mt-4 md:mt-6">
                <div className="flex flex-col md:flex-row justify-between items-start">
                  <div>
                    <h1 className="font-headline text-3xl md:text-4xl font-bold">{developer.name}</h1>
                    <p className="text-lg text-muted-foreground">{developer.title}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                       <Badge variant={developer.availability === 'Full-time' ? 'default' : 'secondary'} className="capitalize">
                         <CheckCircle className="mr-1 h-3 w-3" />
                         {developer.availability}
                       </Badge>
                       <span>•</span>
                       <Briefcase className="h-4 w-4" />
                       <span>{developer.experience} experience</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Button>Contact</Button>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mt-4 text-muted-foreground">
                  {developer.portfolio.github && <a href={developer.portfolio.github} target="_blank" rel="noopener noreferrer"><Github className="h-6 w-6 hover:text-foreground" /></a>}
                  {developer.portfolio.dribbble && <a href={developer.portfolio.dribbble} target="_blank" rel="noopener noreferrer"><Dribbble className="h-6 w-6 hover:text-foreground" /></a>}
                </div>

              </div>
            </div>

            <Separator className="my-8" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="font-headline text-2xl font-semibold mb-4">About Me</h2>
                <p className="text-muted-foreground leading-relaxed">{developer.bio}</p>

                <h2 className="font-headline text-2xl font-semibold mt-8 mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {developer.skills.map(skill => (
                    <Badge key={skill} variant="secondary" className="text-base px-4 py-1">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-headline">Reputation</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 mr-2 text-yellow-500" />
                      <span>4.9 Stars (22 Projects)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      <span>100% Project Completion</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
