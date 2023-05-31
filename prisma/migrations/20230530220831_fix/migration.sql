/*
  Warnings:

  - Added the required column `stars` to the `Eval` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Eval" ADD COLUMN     "comment" TEXT,
ADD COLUMN     "stars" INTEGER NOT NULL;
