/*
  Warnings:

  - A unique constraint covering the columns `[name,wilaya]` on the table `Site` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Site_name_wilaya_key" ON "Site"("name", "wilaya");
