"use client";
import React, { Suspense , useState, useEffect} from "react";
import { getDashboardStats } from "@/../actions/modelStats";
import { getUserModels } from "../../../actions/model";
import {
  NetworkIcon,
  ActivityIcon,
  DollarSignIcon,
  StarIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import CreateModelButton from "@/components/CreateModelButton";
import Link from "next/link";

import { RedirectToSignIn } from "@clerk/nextjs";

function Home() {
  const [models, setModels] = useState<Awaited<ReturnType<typeof getUserModels>>>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<Awaited<ReturnType<typeof getDashboardStats>>>();

  useEffect(() => {
    async function fetchModels() {
      try {
        const userModels = await getUserModels();
        setModels(userModels);
      } catch (error) {
        console.error("Error fetching user models:", error);
        //
         RedirectToSignIn({});
      }
    }
    fetchModels();
  }, []);

  useEffect(() => {
    async function fetchStats() {
      try {
        const dashboardStats = await getDashboardStats();
        setStats(dashboardStats);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      }
    }
    fetchStats();
  }, []);
  return (
    <>
      <div className="container m-auto mt-4">
        <Suspense fallback={<StatsCards loading={true} />}>
            <StatsCards loading={loading} data={stats} />
        </Suspense>

        <Separator className="my-6" />
        <div className="container m-auto mt-4">
          <h2 className="text-2xl font-bold mb-4">Your Models</h2>
          <CreateModelButton />

          {/* Render user models */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {models.map((model:any) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}


interface StatsCardsProps {
  loading: boolean;
  data?: Awaited<ReturnType<typeof getDashboardStats>>;
}

function StatsCards({ loading, data }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatsCard
        title="Total Models"
        value={loading ? undefined : data?.totalModels}
        icon={NetworkIcon}
        loading={loading}
      />
      <StatsCard
        title="Total Trainings"
        value={loading ? undefined : data?.totalTrainings}
        icon={ActivityIcon}
        loading={loading}
      />
      <StatsCard
        title="Cost This Month"
        value={loading ? undefined : `$${data?.costThisMonth.toFixed(2)}`}
        icon={DollarSignIcon}
        loading={loading}
      />
      <StatsCard
        title="Most Active Model"
        value={
          loading
            ? undefined
            : typeof data?.mostActiveModel === "string"
            ? data.mostActiveModel
            : data?.mostActiveModel?.name ?? "None yet"
        }
        icon={StarIcon}
        loading={loading}
      />
    </div>
  );
}

function StatsCard({
  title,
  value,
  icon: Icon,
  helperText,
  loading,
}: {
  loading: boolean;
  icon?: React.ElementType;
  title: string;
  value?: string | number;
  helperText?: string;
}) {
  return (
    <Card className="p-4 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <CardHeader className="flex flex-col items-center">
        <div className="flex items-center justify-center mb-2">
          {loading ? (
            <div className="animate-pulse h-8 w-8 bg-gray-200 rounded-full"></div>
          ) : (
            Icon && <Icon className="h-8 w-8 text-blue-500" />
          )}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </CardHeader>
      <CardContent className="flex items-center justify-center mt-2">
        {loading ? (
          <div className="animate-pulse h-4 w-16 bg-gray-200 rounded"></div>
        ) : (
          <p className="text-xl font-bold">{value}</p>
        )}
      </CardContent>
      {helperText && <p className="text-sm text-gray-500 mt-1">{helperText}</p>}
    </Card>
  );
}

function ModelCard({ model }: { model: { name: string; id: string; description: string; createdAt: Date; updatedAt: Date; userId: string; } }) {
  return (
    <Link href={`/builder/${model.id}`} className="flex flex-col">
    <Card className="p-4 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <CardHeader>
        <h3 className="text-lg font-semibold">{model.name}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{model.description}</p>
      </CardContent>
    </Card>
    </Link>
  );
}

export default Home;
