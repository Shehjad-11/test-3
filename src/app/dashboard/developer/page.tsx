export const dynamic = 'force-dynamic';

export default function DeveloperDashboard() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gradient mb-8">Developer Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">Applications</h3>
            <p className="text-3xl font-bold text-primary">23</p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">Projects Won</h3>
            <p className="text-3xl font-bold text-primary">8</p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">Earnings</h3>
            <p className="text-3xl font-bold text-primary">$12,400</p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">Success Rate</h3>
            <p className="text-3xl font-bold text-primary">87%</p>
          </div>
        </div>
        <div className="mt-8 bg-card p-6 rounded-lg border">
          <h2 className="text-2xl font-bold mb-4">Welcome to CollabForge</h2>
          <p className="text-muted-foreground mb-4">
            Discover amazing projects and grow your career with fair compensation.
          </p>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold">
            Browse Projects
          </button>
        </div>
      </div>
    </div>
  );
}