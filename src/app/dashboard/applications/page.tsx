import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { applications } from "@/lib/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const statusColors = {
  Applied: 'secondary',
  Shortlisted: 'default',
  Selected: 'default',
  Rejected: 'destructive'
} as const;

const statusStyles = {
  Applied: 'bg-yellow-500/10 text-yellow-500',
  Shortlisted: 'bg-blue-500/10 text-blue-500',
  Selected: 'bg-green-500/10 text-green-500',
  Rejected: 'bg-red-500/10 text-red-500',
} as const;


export default function DeveloperApplicationsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold font-headline mb-8">My Applications</h1>
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Applied On</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((app) => (
              <TableRow key={app.id}>
                <TableCell className="font-medium">{app.project.title}</TableCell>
                <TableCell className="flex items-center">
                   <Image src={app.project.company.logoUrl} alt={app.project.company.name} width={24} height={24} className="mr-2 rounded-full" />
                   {app.project.company.name}
                </TableCell>
                <TableCell>
                  <Badge variant={statusColors[app.status] as any}>{app.status}</Badge>
                </TableCell>
                <TableCell>{new Date().toLocaleDateString()}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View Application</DropdownMenuItem>
                      <DropdownMenuItem>View Project</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Withdraw Application</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
