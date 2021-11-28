CREATE TABLE `products` (
   `id` INT NOT NULL,
   `name` TEXT NOT NULL,
   `description` TEXT,
   `category` TEXT NOT NULL,
   `size` TEXT NOT NULL,
   `discount` INT NOT NULL,
   `img` TEXT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
   `id` INT NOT NULL,
   `first_name` TEXT NOT NULL,
   `last_name` TEXT NOT NULL,
   `email` TEXT NOT NULL,
   `img` ,
   `category`  NOT NULL,
   `password`  NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `sizes` (
   `id` ,
   `name`  NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `ventas_users` (
   `id`  NOT NULL,
   `user_id`  NOT NULL,
   `product_id`  NOT NULL,
   `cantidad`  NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `product_size` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `product_id` INT NOT NULL AUTO_INCREMENT,
   `size_id` INT NOT NULL AUTO_INCREMENT,
   PRIMARY KEY (`id`)
);


ALTER TABLE `ventas_users` ADD CONSTRAINT `FK_9424ce0c-f0c3-4f05-99c6-0fa134818e46` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)  ;

ALTER TABLE `ventas_users` ADD CONSTRAINT `FK_f4b002c9-322d-4a6f-a062-6a8692f50f4f` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)  ;

ALTER TABLE `product_size` ADD CONSTRAINT `FK_0b3d4a76-421c-42d7-b389-b10a10c155c2` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)  ;

ALTER TABLE `product_size` ADD CONSTRAINT `FK_a58e8ca8-75fb-4f3b-91a7-233aa2343bfe` FOREIGN KEY (`size_id`) REFERENCES `sizes`(`id`)  ;
