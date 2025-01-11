/*
  Warnings:

  - You are about to drop the column `bloodTpe` on the `User` table. All the data in the column will be lost.
  - Added the required column `bloodType` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "bloodTpe",
ADD COLUMN     "bloodType" TEXT NOT NULL;
