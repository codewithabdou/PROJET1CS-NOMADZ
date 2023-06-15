-- DropForeignKey
ALTER TABLE "Eval" DROP CONSTRAINT "Eval_siteId_fkey";

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_siteId_fkey";

-- DropForeignKey
ALTER TABLE "Favori" DROP CONSTRAINT "Favori_siteId_fkey";

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favori" ADD CONSTRAINT "Favori_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Eval" ADD CONSTRAINT "Eval_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE CASCADE ON UPDATE CASCADE;
