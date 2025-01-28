/*
  Warnings:

  - Changed the type of `documentType` on the `Producer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('CPF', 'CNPJ');

-- AlterTable
ALTER TABLE "Producer" DROP COLUMN "documentType",
ADD COLUMN     "documentType" "DocumentType" NOT NULL;
