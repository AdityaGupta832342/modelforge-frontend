import { PrismaClient } from "../src/generated/prisma/client";
const prisma = new PrismaClient();

describe("SequentialModel CRUD Operations", () => {
  it("should create a new SequentialModel", async () => {
    const newModel = await prisma.sequentialModel.create({
      data: {
        name: "Test Model",
        description: "This is a test model description",
        userId: "yourUserId", // Replace with an actual userId if required
      },
    });

    expect(newModel).toHaveProperty("id");
    expect(newModel.name).toBe("Test Model");
    expect(newModel.description).toBe("This is a test model description");
  });

  it("should retrieve the model by ID", async () => {
    const model = await prisma.sequentialModel.findUnique({
      where: {
        id: "yourModelId", // Use an actual model ID
      },
    });

    expect(model).not.toBeNull();
    expect(model?.name).toBe("Test Model");
  });

  it("should list all models for a user", async () => {
    const models = await prisma.sequentialModel.findMany({
      where: {
        userId: "yourUserId", // Replace with an actual userId
      },
    });

    expect(models.length).toBeGreaterThan(0);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
