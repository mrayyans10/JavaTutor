import { ProgressDashboard } from "@/components/dashboard/ProgressDashboard";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="mb-6 text-2xl font-bold text-slate-900">Your Progress</h1>
      <ProgressDashboard />
    </div>
  );
}
