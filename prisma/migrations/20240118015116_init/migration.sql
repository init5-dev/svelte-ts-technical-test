/*
  Warnings:

  - You are about to drop the column `category` on the `Cost` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Cost` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cost" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    "file" TEXT,
    CONSTRAINT "Cost_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Cost" ("amount", "createdAt", "date", "file", "id", "updatedAt") SELECT "amount", "createdAt", "date", "file", "id", "updatedAt" FROM "Cost";
DROP TABLE "Cost";
ALTER TABLE "new_Cost" RENAME TO "Cost";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
