-- CreateTable
CREATE TABLE `Solvemate` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `userName` VARCHAR(191) NOT NULL,
    `src` VARCHAR(191) NOT NULL,
    `name` TEXT NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `instruction` TEXT NOT NULL,
    `seed` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `categoryId` VARCHAR(191) NOT NULL,

    INDEX `Solvemate_categoryId_idx`(`categoryId`),
    FULLTEXT INDEX `Solvemate_name_idx`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Solvemate` ADD CONSTRAINT `Solvemate_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
