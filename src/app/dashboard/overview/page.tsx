import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Briefcase, FileText, CheckCircle, Clock } from "lucide-react";

export default function DashboardOverviewPage() {
  const stats = [
    { title: "Active Projects", value: "3", icon: Briefcase, color: "text-primary" },
    { title: "Applications", value: "12", icon: FileText, color: "text-accent" },
    { title: "Projects Completed", value: "8", icon: CheckCircle, color: "text-green-500" },
    { title: "Pending Review", value: "2", icon: Clock, color: "text-yellow-500" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold font-headline mb-8">Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold font-headline mb-4">Recent Activity</h2>
        <Card>
            <CardContent className="p-6">
                <p className="text-muted-foreground">No recent activity to display.</p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
