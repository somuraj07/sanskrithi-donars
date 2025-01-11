/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Donar" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "rollNo" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "bloodType" TEXT NOT NULL,
    "lastDonation" TIMESTAMP(3) NOT NULL,
    "available" BOOLEAN NOT NULL,
    "image" TEXT,
    "donar" TEXT NOT NULL,
    "donarId" INTEGER NOT NULL,

    CONSTRAINT "Donar_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Donar_email_key" ON "Donar"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Donar_rollNo_key" ON "Donar"("rollNo");
