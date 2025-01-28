-- CreateTable
CREATE TABLE "Producer" (
    "id" SERIAL NOT NULL,
    "document" TEXT NOT NULL,
    "documentType" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Producer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "totalArea" DOUBLE PRECISION NOT NULL,
    "vegetationArea" DOUBLE PRECISION NOT NULL,
    "cultivableArea" DOUBLE PRECISION NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "producerId" INTEGER NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Culture" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Culture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Harvest" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "plantedArea" DOUBLE PRECISION NOT NULL,
    "propertyId" INTEGER NOT NULL,
    "cultureId" INTEGER NOT NULL,

    CONSTRAINT "Harvest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CultureToProperty" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CultureToProperty_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CultureToProperty_B_index" ON "_CultureToProperty"("B");

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "Producer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Harvest" ADD CONSTRAINT "Harvest_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Harvest" ADD CONSTRAINT "Harvest_cultureId_fkey" FOREIGN KEY ("cultureId") REFERENCES "Culture"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CultureToProperty" ADD CONSTRAINT "_CultureToProperty_A_fkey" FOREIGN KEY ("A") REFERENCES "Culture"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CultureToProperty" ADD CONSTRAINT "_CultureToProperty_B_fkey" FOREIGN KEY ("B") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;
