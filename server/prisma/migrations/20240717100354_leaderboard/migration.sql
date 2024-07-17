/*
  Warnings:

  - The primary key for the `Leaderboard` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Leaderboard" DROP CONSTRAINT "Leaderboard_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Leaderboard_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Leaderboard" ADD CONSTRAINT "Leaderboard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
