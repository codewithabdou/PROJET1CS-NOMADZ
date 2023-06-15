/*
  Warnings:

  - You are about to drop the column `siteId` on the `Event` table. All the data in the column will be lost.
  - The primary key for the `Site` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Site` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `siteName` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wilaya` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latitude` to the `Site` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Site` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Site` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_siteId_fkey";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "siteId",
ADD COLUMN     "siteName" TEXT NOT NULL,
ADD COLUMN     "wilaya" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Site" DROP CONSTRAINT "Site_pkey",
DROP COLUMN "id",
ADD COLUMN     "latitude" INTEGER NOT NULL,
ADD COLUMN     "longitude" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "transport" DROP NOT NULL,
ADD CONSTRAINT "Site_pkey" PRIMARY KEY ("name", "wilaya");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Favori" (
    "userId" INTEGER NOT NULL,
    "siteName" TEXT NOT NULL,
    "wilaya" TEXT NOT NULL,

    CONSTRAINT "Favori_pkey" PRIMARY KEY ("userId","siteName","wilaya")
);

-- CreateTable
CREATE TABLE "Eval" (
    "userId" INTEGER NOT NULL,
    "siteName" TEXT NOT NULL,
    "wilaya" TEXT NOT NULL,

    CONSTRAINT "Eval_pkey" PRIMARY KEY ("userId","siteName","wilaya")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_siteName_wilaya_fkey" FOREIGN KEY ("siteName", "wilaya") REFERENCES "Site"("name", "wilaya") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favori" ADD CONSTRAINT "Favori_siteName_wilaya_fkey" FOREIGN KEY ("siteName", "wilaya") REFERENCES "Site"("name", "wilaya") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favori" ADD CONSTRAINT "Favori_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Eval" ADD CONSTRAINT "Eval_siteName_wilaya_fkey" FOREIGN KEY ("siteName", "wilaya") REFERENCES "Site"("name", "wilaya") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Eval" ADD CONSTRAINT "Eval_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
