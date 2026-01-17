import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Briefcase, User } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-bold font-headline mb-4">Welcome to your Dashboard</h1>
      <p className="text-muted-foreground mb-8">Select your role to continue.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl w-full">
        <Card className="text-center">
            <CardHeader>
                <Briefcase className="h-10 w-10 mx-auto text-primary mb-2" />
                <CardTitle className="font-headline">Company</CardTitle>
                <CardDescription>Manage your projects and applicants.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button asChild className="w-full">
                    <Link href="/dashboard/projects">Go to Company Dashboard</Link>
                </Button>
            </CardContent>
        </Card>
        <Card className="text-center">
            <CardHeader>
                <User className="h-10 w-10 mx-auto text-accent mb-2" />
                <CardTitle className="font-headline">Developer</CardTitle>
                <CardDescription>Track your applications and submissions.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button asChild className="w-full">
                    <Link href="/dashboard/applications">Go to Developer Dashboard</Link>
                </Button>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
