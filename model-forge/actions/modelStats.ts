"use server";
//ts-ignore
import {currentUser} from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

class UserNotFoundErr extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UserNotFoundErr";
  }
}

export async function getDashboardStats() {
    if (!prisma) {
        throw new Error("Prisma client is not initialized");
      }

  const user = await currentUser();
  if (!user) {
    throw new UserNotFoundErr("User not found");
    
  }

  const userId = user.id;

  // 1. Total models
  const totalModels = await prisma.sequentialModel.count({
    where: { userId },
  });
    // Check if the user has any models
    if (totalModels === 0) {
        return {
            totalModels: 0,
            totalTrainings: 0,
            costThisMonth: 0,
            mostActiveModel: "No Models Found",
        };
        }

  // 2. Total training sessions
  const totalTrainings = await prisma.trainingSession.count({
    where: {
      model: { userId },
    },
  });
    // Check if the user has any training sessions
    if (totalTrainings === 0) {
        return {
            totalModels,
            totalTrainings: 0,
            costThisMonth: 0,
            mostActiveModel: "No Models Found",
        };
    }

  // 3. Total cost this month
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  

  const costThisMonthAgg = await prisma.trainingSession.aggregate({
    where: {
      createdAt: { gte: startOfMonth },
      model: { userId },
    },
    _sum: {
      cost: true,
    },
  });
  const costThisMonth = costThisMonthAgg._sum.cost || 0;

  // 4. Most recently updated model
  const mostActiveModel = await prisma.sequentialModel.findFirst({
    where: { userId },
    orderBy: { updatedAt: "desc" },
    select: {
      name: true
    },
  });


  return {
    totalModels,
    totalTrainings,
    costThisMonth,
    mostActiveModel: mostActiveModel ?? "No models found",
  };
}
