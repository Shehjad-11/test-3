// src/components/project-card.tsx
import Image from "next/image";
import Link from "next/link";
import { DollarSign, Clock, Users, Tag } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0">
        <Link href={`/projects/${project.id}`}>
          <div className="relative h-48 w-full">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              data-ai-hint={project.imageHint}
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <div className="flex items-center mb-2">
          <Image
            src={project.company.logoUrl}
            alt={`${project.company.name} logo`}
            width={24}
            height={24}
            className="rounded-full mr-2"
          />
          <span className="text-sm font-medium text-muted-foreground">{project.company.name}</span>
        </div>
        <Link href={`/projects/${project.id}`}>
          <CardTitle className="font-headline text-xl leading-tight mb-2 hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
        </Link>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.skills.slice(0, 3).map(skill => (
            <Badge key={skill} variant="secondary">{skill}</Badge>
          ))}
          {project.skills.length > 3 && (
            <Badge variant="secondary">+{project.skills.length - 3}</Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 bg-muted/50 flex flex-col items-start gap-3">
        <div className="flex items-center text-sm text-foreground">
          <DollarSign className="w-4 h-4 mr-2 text-primary" />
          <span className="font-semibold">${project.compensation.winner}</span>
          <span className="text-muted-foreground mx-1">/</span>
          <span className="font-semibold">${project.compensation.participation}</span>
          <span className="text-muted-foreground ml-1">(participation)</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="w-4 h-4 mr-2" />
          <span>Deadline: {new Date(project.deadline).toLocaleDateString()}</span>
        </div>
        <Button asChild className="w-full mt-2">
          <Link href={`/projects/${project.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
