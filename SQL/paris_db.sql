 CREATE TABLE `products` (
   `id` INT NOT NULL,
   `name` TEXT NOT NULL,
   `description` TEXT,
   `category` TEXT NOT NULL,
   `size` TEXT NOT NULL,
   `discount` INT,
   `price` FLOAT not null, 
   PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
   `id` INT NOT NULL,
   `first_name` TEXT NOT NULL,
   `last_name` TEXT NOT NULL,
   `email` TEXT NOT NULL,
   `img` TEXT,
   `category` TEXT NOT NULL,
   `password` TEXT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `sizes` (
   `id` INT,
   `name` TEXT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `ventas_users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `user_id` INT NOT NULL,
   `product_id` INT NOT NULL,
   `cantidad` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `product_size` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `product_id` INT NOT NULL,
   `size_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `user_category` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `user_id` INT NOT NULL,
   `category_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `category` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` TEXT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `img` (
   `id` INT NOT NULL,
   `name` TEXT NOT NULL,
   `product_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `ventas_users` ADD CONSTRAINT `FK_9424ce0c-f0c3-4f05-99c6-0fa134818e46` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)  ;

ALTER TABLE `ventas_users` ADD CONSTRAINT `FK_f4b002c9-322d-4a6f-a062-6a8692f50f4f` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)  ;

ALTER TABLE `product_size` ADD CONSTRAINT `FK_0b3d4a76-421c-42d7-b389-b10a10c155c2` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)  ;

ALTER TABLE `product_size` ADD CONSTRAINT `FK_a58e8ca8-75fb-4f3b-91a7-233aa2343bfe` FOREIGN KEY (`size_id`) REFERENCES `sizes`(`id`)  ;

ALTER TABLE `user_category` ADD CONSTRAINT `FK_0cdb695c-e7f6-428a-9084-eab395baeeb8` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)  ;

ALTER TABLE `user_category` ADD CONSTRAINT `FK_51686f12-3107-447d-aeb6-e713038e438b` FOREIGN KEY (`category_id`) REFERENCES `category`(`id`)  ;

ALTER TABLE `img` ADD CONSTRAINT `FK_833eafd4-2c70-461f-bf7e-58b62ad70213` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)  ;




