-- CreateTable
CREATE TABLE "SequentialModel" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "public" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,

    CONSTRAINT "SequentialModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Layer" (
    "id" SERIAL NOT NULL,
    "modelId" UUID NOT NULL,
    "type" TEXT NOT NULL,
    "config" JSONB NOT NULL,
    "order" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Layer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LayerConnection" (
    "id" SERIAL NOT NULL,
    "fromLayerId" INTEGER NOT NULL,
    "toLayerId" INTEGER NOT NULL,

    CONSTRAINT "LayerConnection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModelVersion" (
    "id" SERIAL NOT NULL,
    "modelId" UUID NOT NULL,
    "version" INTEGER NOT NULL,
    "snapshot" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ModelVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrainingSession" (
    "id" SERIAL NOT NULL,
    "modelId" UUID NOT NULL,
    "status" TEXT NOT NULL,
    "metrics" JSONB,
    "cost" DOUBLE PRECISION DEFAULT 0.0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TrainingSession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SequentialModel_name_userId_key" ON "SequentialModel"("name", "userId");

-- AddForeignKey
ALTER TABLE "Layer" ADD CONSTRAINT "Layer_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "SequentialModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LayerConnection" ADD CONSTRAINT "LayerConnection_fromLayerId_fkey" FOREIGN KEY ("fromLayerId") REFERENCES "Layer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LayerConnection" ADD CONSTRAINT "LayerConnection_toLayerId_fkey" FOREIGN KEY ("toLayerId") REFERENCES "Layer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModelVersion" ADD CONSTRAINT "ModelVersion_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "SequentialModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingSession" ADD CONSTRAINT "TrainingSession_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "SequentialModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
