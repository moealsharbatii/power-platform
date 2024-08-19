CREATE TABLE `Accessories` (
	`id` integer PRIMARY KEY NOT NULL,
	`accessoriesId` integer NOT NULL,
	FOREIGN KEY (`accessoriesId`) REFERENCES `Exercises`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `Compounds` (
	`id` integer PRIMARY KEY NOT NULL,
	`compoundsId` integer NOT NULL,
	FOREIGN KEY (`compoundsId`) REFERENCES `Exercises`(`id`) ON UPDATE no action ON DELETE no action
);
