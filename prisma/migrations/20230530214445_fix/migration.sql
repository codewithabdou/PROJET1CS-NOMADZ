/*
  Warnings:

  - The primary key for the `Eval` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `siteName` on the `Eval` table. All the data in the column will be lost.
  - You are about to drop the column `wilaya` on the `Eval` table. All the data in the column will be lost.
  - The primary key for the `Event` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `siteName` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `wilaya` on the `Event` table. All the data in the column will be lost.
  - The primary key for the `Favori` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `siteName` on the `Favori` table. All the data in the column will be lost.
  - You are about to drop the column `wilaya` on the `Favori` table. All the data in the column will be lost.
  - The primary key for the `Site` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `siteId` to the `Eval` table without a default value. This is not possible if the table is not empty.
  - Added the required column `siteId` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `siteId` to the `Favori` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Eval" DROP CONSTRAINT "Eval_siteName_wilaya_fkey";

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_siteName_wilaya_fkey";

-- DropForeignKey
ALTER TABLE "Favori" DROP CONSTRAINT "Favori_siteName_wilaya_fkey";

-- AlterTable
ALTER TABLE "Eval" DROP CONSTRAINT "Eval_pkey",
DROP COLUMN "siteName",
DROP COLUMN "wilaya",
ADD COLUMN     "siteId" INTEGER NOT NULL,
ADD CONSTRAINT "Eval_pkey" PRIMARY KEY ("userId", "siteId");

-- AlterTable
ALTER TABLE "Event" DROP CONSTRAINT "Event_pkey",
DROP COLUMN "siteName",
DROP COLUMN "wilaya",
ADD COLUMN     "siteId" INTEGER NOT NULL,
ADD CONSTRAINT "Event_pkey" PRIMARY KEY ("id", "siteId");

-- AlterTable
ALTER TABLE "Favori" DROP CONSTRAINT "Favori_pkey",
DROP COLUMN "siteName",
DROP COLUMN "wilaya",
ADD COLUMN     "siteId" INTEGER NOT NULL,
ADD CONSTRAINT "Favori_pkey" PRIMARY KEY ("userId", "siteId");

-- AlterTable
ALTER TABLE "Site" DROP CONSTRAINT "Site_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Site_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favori" ADD CONSTRAINT "Favori_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Eval" ADD CONSTRAINT "Eval_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
