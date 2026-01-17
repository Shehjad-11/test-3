export const dynamic = 'force-dynamic';

export default function CompanyDashboard() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gradient mb-8">Company Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">Active Projects</h3>
            <p className="text-3xl font-bold text-primary">12</p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">Applications</h3>
            <p className="text-3xl font-bold text-primary">248</p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">Budget Spent</h3>
            <p className="text-3xl font-bold text-primary">$45,200</p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">Success Rate</h3>
            <p className="text-3xl font-bold text-primary">94%</p>
          </div>
        </div>
        <div className="mt-8 bg-card p-6 rounded-lg border">
          <h2 className="text-2xl font-bold mb-4">Welcome to CollabForge</h2>
          <p className="text-muted-foreground mb-4">
            Manage your projects and find the best talent for your needs.
          </p>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold">
            Post New Project
          </button>
        </div>
      </div>
    </div>
  );
}