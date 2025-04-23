"use server";

import prisma from "@/lib/prisma";
import { currentUser} from "@clerk/nextjs/server";
import { z } from "zod";

const formSchema = z.object({
  modelName: z.string().min(4, "Model name is required"),
  modelDescription: z.string().min(1, "Model description is required"),
});

const createModel = async (data: z.infer<typeof formSchema>) => {
  try {
    const user = await currentUser();
    if (!user) throw new Error("User not found");

    const userId = user.id;
    const { modelName, modelDescription } = data;
    if (!prisma) throw new Error("Prisma client is not initialized");

    const newModel = await prisma.sequentialModel.create({
      data: {
        name: modelName,
        description: modelDescription,
        userId: userId,
      },
    });

    return newModel;
  } catch (error) {
    console.error("Error creating model:", error);
    throw new Error("Failed to create model. Please try again.");
  }
};

const getUserModels = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("User not found");
  }
  const userId = user.id;
  if (!prisma) {
    throw new Error("Prisma client is not initialized");
  }
  // Get all models for the user
  const models = await prisma.sequentialModel.findMany({
    where: {
      userId: userId,
    },
  });
  return models;
};

async function getModelbyID(id: string) {
  if (!prisma) {
    throw new Error("Prisma client is not initialized");
  }
  const user = await currentUser();
  if (!user) {
    throw new Error("User not found");
  }

  // Use the compound unique constraint for the query
  return prisma.sequentialModel.findUnique({
    where: {
      id: id,
      userId: user.id,
    },
  });
}

export { createModel, getUserModels, getModelbyID };
