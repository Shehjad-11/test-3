import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DollarSign, Clock, CheckCircle, Tag, Users, Award } from "lucide-react";

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-6">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  data-ai-hint={project.imageHint}
                />
              </div>

              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={project.company.logoUrl}
                  alt={`${project.company.name} logo`}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h1 className="font-headline text-3xl md:text-4xl font-bold">{project.title}</h1>
                  <p className="text-lg text-muted-foreground">posted by {project.company.name}</p>
                </div>
              </div>
              
              <Separator className="my-6" />

              <h2 className="font-headline text-2xl font-semibold mb-4">Project Description</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.longDescription}</p>

              <Separator className="my-8" />

              <div>
                <h2 className="font-headline text-2xl font-semibold mb-4">Required Skills</h2>
                <div className="flex flex-wrap gap-3">
                  {project.skills.map(skill => (
                    <Badge key={skill} variant="default" className="text-sm px-3 py-1">{skill}</Badge>
                  ))}
                </div>
              </div>

              <Separator className="my-8" />

              <div>
                <h2 className="font-headline text-2xl font-semibold mb-4">Deliverables</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {project.deliverables.map(item => (
                    <li key={item} className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="lg:sticky lg:top-24 h-fit">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Project Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Award className="w-5 h-5 mr-3 text-primary" />
                    <div>
                      <p className="font-semibold">${project.compensation.winner}</p>
                      <p className="text-sm text-muted-foreground">Winner Reward</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 mr-3 text-accent" />
                    <div>
                      <p className="font-semibold">${project.compensation.participation}</p>
                      <p className="text-sm text-muted-foreground">Participation Reward</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-muted-foreground" />
                    <div>
                      <p className="font-semibold">{new Date(project.deadline).toLocaleDateString()}</p>
                      <p className="text-sm text-muted-foreground">Deadline</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-3 text-muted-foreground" />
                    <div>
                      <p className="font-semibold">{project.applicantsCount} Applicants / {project.shortlistedCount} Shortlisted</p>
                      <p className="text-sm text-muted-foreground">Engagement</p>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <Button className="w-full font-bold text-lg" size="lg">
                    Apply Now
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">Applications close on {new Date(project.deadline).toLocaleDateString()}.</p>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
