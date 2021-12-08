 CREATE TABLE `products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` TEXT NOT NULL,
   `description` TEXT,
   `category` TEXT NOT NULL,
   `discount` INT,
   `price` FLOAT not null, 
   PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
   `id` INT NOT NULL AUTO_INCREMENT,
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
   `id` INT NOT NULL AUTO_INCREMENT,
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



    INSERT INTO products values(2,'Remera París','Remera paris Messi','remera',10,25000),
    INSERT INTO products values(3,'Buzo','Buzo negro','buzo',NULL,15000),
    INSERT INTO products values(4,'Remera París Negra','Remera bien piolonaaa','remera',NULL,20,4000);
    INSERT INTO products values(5,'Remera blanca','Remera blanca','remera',15,354);
    INSERT INTO products values(6,'Remera Nirvana','Remera negra con estampado de la banda Nirvana','remera',20,4000);
    INSERT INTO products values(7,'Remera Hollister','Remera Hollister color azul oscuro con estampado colorido','remera',10,3200);
    INSERT INTO products values(8,'Remera con Botones','Remera blanca con botones','remera',NULL,2500);
    INSERT INTO products values(9,'Remera negra','Remera negra con estampado de sonrisa blanca','remera',15,3000);
    INSERT INTO products values(10,'Remera Bob Marley','Remera negra con estampado de Bob Marley y su tradicional frase','remera',30,5000);
    INSERT INTO products values(11,'Remera con bolsillo','Remera blanca y gris con bolsillo ','remera',NULL,4000);
    INSERT INTO products values(12,'Remera Calavera ','Remera Blanca con estampado de Calavera','remera',20,2000);
    INSERT INTO products values(13,'Remera negra','Remera negra ajustada al cuerpo','remera',5,4000);
    INSERT INTO products values(14,'Buzo Nike','Buzo Nike Gris','buzo',20,7000);
    INSERT INTO products values(15,'Buzo Beige','Buzo Beige','buzo',50,6000);
    INSERT INTO products values(16,'Buzo Adidas','Buzo Adidas Gris','buzo',20,8000);
    INSERT INTO products values(17,'Buzo Blanco','Buzo Blanco Abercrombie','buzo',10,9000);
    INSERT INTO products values(18,'Buzo Adidas Deportivo','Buzo Adidas Gris ','buzo',20,4000);
    INSERT INTO products values(19,'Buzo Fila Tricolor','Buzo Fila Tricolor','buzo',NULL,5000);
    INSERT INTO products values(20,'Buzo Hollister','Buzo Hollister Negro','buzo',60,10000);
    INSERT INTO products values(21,'Buzo Abercrombie','Buzo Abercrombie','buzo',20,4000);
    INSERT INTO products values(22,'Buzo Tommy','Buzo Tommy Azul','buzo',15,4500);
    INSERT INTO products values(23,'Buzo Fila Negro','Buzo Fila Negro','buzo',25,7600);
    INSERT INTO products values(24,'Jean Celeste Roto','Jean Celeste Roto','pantalon',20,5000);
    INSERT INTO products values(25,'Jean Celeste Chupin','Jean Celeste Chupin','pantalon',10,3000);
    INSERT INTO products values(26,'Pantalón Cuadrille Negro','Pantalón Cuadrille Negro','pantalon',20,6000);
    INSERT INTO products values(27,'Jean Blanco','Jean Blanco','pantalon',20,7800);
    INSERT INTO products values(28,'Pantalón Cuadrille Gris','Pantalón Cuadrille Gris','pantalon',50,6000);
    INSERT INTO products values(29,'Jogger Oscuro','Jogger Oscuro','pantalon',20,3200);
    INSERT INTO products values(30,'Jogger Crema','Jogger Crema','pantalon',5,4000);
    INSERT INTO products values(31,'Jean Negro Roto','Jean Negro Roto','pantalon',20,6580);
    INSERT INTO products values(32,'Jean Blanco Roto','Jean Blanco Roto','pantalon',20,4500);
    INSERT INTO products values(33,'Camisa Cuadros','Camisa Cuadros rojos y negros','camisa',10,6790);
    INSERT INTO products values(34,'Camisa Rayas ','Camisa Rayas ','camisa',20,4500);
    INSERT INTO products values(35,'Camisa Cuadros','Blanco y negro','camisa',10,4000);
    INSERT INTO products values(36,'Camisa Estampados','Camisa Estampados','camisa',40,7000);
    INSERT INTO products values(37,'Camisa Azul Oscuro','Camisa Elegante Azul Oscuro','camisa',15,8000);
    INSERT INTO products values(38,'Camisa Celeste','Camisa Celeste Elegante','camisa',50,3500);
    INSERT INTO products values(39,'Camisa con Puntos','Camisa blanca con Puntos negros ','camisa',10,6000);
    INSERT INTO products values(40,'Camisa manga corta','Camisa manga corta mostaza','camisa',10,5000);
    INSERT INTO products values(41,'Camisa manga corta','Camisa Floreada','camisa',30,3000);
    INSERT INTO products values(42,'Traje de Baño con dibujos','Traje de Baño Blanco con estampas de colores','malla',10,4000);
    INSERT INTO products values(43,'Traje de Baño con rayas','Traje de baño con rayas blancas y azules','malla',NULL,3000);
    INSERT INTO products values(44,'Traje de Baño Liso','Traje de Baño Liso Color verde militar','malla',NULL,2500);
    INSERT INTO products values(45,'Traje de Baño con dibujos','Traje de baño rosa con dibujos de cactus','malla',NULL,3400);
    INSERT INTO products values(46,'Traje de Baño Liso','Traje de Baño Liso color Rojo','malla',NULL,2800);
    INSERT INTO products values(47,'Traje de Baño Liso','Traje de Baño Liso color rosa','malla',10,2000);
    INSERT INTO products values(48,'Traje de Baño con dibujos','Traje de Baño con dibujos color negro y dibujos azules','malla',20,4000);
    INSERT INTO products values(49,'Traje de Baño Liso','Traje de Baño Liso: Color Azul marino','malla',10,2000);
    INSERT INTO products values(50,'Traje de Baño con dibujos','Traje de Baño con dibujos y colores tropicales','malla',5,4000);
    INSERT INTO products values(51,'Medias B&W','Medias blancas con líneas negras','medias',NULL,1000);
    INSERT INTO products values(52,'Medias Fuego','Medias Fuego en blanco y en negro','medias',10,800);
    INSERT INTO products values(53,'Medias Aliens','Medias negras con Aliens Verdes','medias',NULL,800);
    INSERT INTO products values(54,'Medias Rolling Stones','Medias Rolling Stones en blanco y en negro','medias',5,1000);
    INSERT INTO products values(55,'Medias Jordan','Medias Jordan Rojas','medias',20,1000);
    INSERT INTO products values(56,'Medias Stars War','Medias Stars War Negras y amarillas','medias',10,2000);
    INSERT INTO products values(57,'Medias NASA','Medias con dibujos de la NASA','medias',10,1200);
    INSERT INTO products values(58,'Campera AFA','Campera del campeón de América','campera',25,20000);
    INSERT INTO products values(59,'Campera gris','Campera gris con capucha','campera',25,12500);
    INSERT INTO products values(60,'Campera Lacoste','Campera color beige Lacoste','campera',25,16000);
    INSERT INTO products values(61,'Campera Ferrari','Campera Ferrari negra y roja','campera',25,28000);
    INSERT INTO products values(62,'Campera negra','Cempera negra loar','campera',25,12000);
    INSERT INTO products values(63,'Campera Montagne','Campera Montagne beige con polar','campera',25,24000);
    INSERT INTO products values(64,'Campera rompe viento','Campera rompe viento roja y azul','campera',25,16500);
    INSERT INTO products values(65,'Campera negra simple','Campera negra con cierre rojo','campera',25,14000);
    INSERT INTO products values(66,'Campera Nike negra','Campera Nike negra','campera',25,18000);
    INSERT INTO products values(67,'Malla roja ','Malla del fenómeno','malla',25,2000);
    INSERT INTO products values(68,'Bermuda rosa','Bermuda rosa','bermuda',15,4000);
    INSERT INTO products values(69,'Bermuda verde','Bermuda verde con bolsillo','bermuda',10,4200);
    INSERT INTO products values(70,'Bermuda de jean','Bermuda de jean azul','bermuda',NULL,3000);
    INSERT INTO products values(71,'Bermuda negra','Bermuda negra con bolsillo','bermuda',NULL,2000);
    INSERT INTO products values(72,'Bermuda negra','Bermuda negra sin cierre','bermuda',NULL,2400);
    INSERT INTO products values(73,'Bermuda militar','Bermuda cargo militar','bermuda',NULL,5000);
    INSERT INTO products values(74,'Gorra cara Diego','Gorra de la cara de Diego','gorra',NULL,1500);
    INSERT INTO products values(75,'Gorro negro Adidas','Gorro negro Adidas','gorra',NULL,1200);
    INSERT INTO products values(76,'Gorra Goku','Gorra goku negra','gorra',NULL,2000);
    INSERT INTO products values(77,'Gorra tazmania','Gorra demonio de tazmania','gorra',NULL,2100);
    INSERT INTO products values(78,'Gorra bugs bunny','Gorra bugs bunny','gorra',NULL,2000);
    INSERT INTO products values(79,'Gorra AFA','Gorra AFA azul','gorra',10,1500);
    INSERT INTO products values(80,'Gorra símbolo $','Gorra simbolo dólar','gorra',NULL,1500);
    INSERT INTO products values(81,'Gorro U.R.S.S negro','Gorro de la Unión de la República Socialista Soviética negro','gorra',NULL,5000);
    INSERT INTO products values(82,'Piluso dólares','Piluso estampado con dólares','gorra',NULL,2000);
    INSERT INTO products values(83,'Neseser negro con tachas','Neseser negro con cierre frontal y tachas','accesorio',NULL,3200);
    INSERT INTO products values(84,'Riñonera Nike','Riñonera nike azul','accesorio',NULL,2100);
    INSERT INTO products values(85,'Billetera Maradona','Billetera con la cara de Maradona','accesorio',NULL,1000);
    INSERT INTO products values(86,'Billetera Everlast','Billetera Everlast gris y azul','accesorio',10,1520);
    INSERT INTO products values(87,'Billetera Everlast marrón','Billetera Everlast marrón ','accesorio',15,2000);
    INSERT INTO products values(88,'Riñonera negra','Riñonera negra','accesorio',NULL,2200);
    INSERT INTO products values(89,'Neseser negro','Neseser negro','accesorio',NULL,1500);

insert into img values(1,'1634059312561_img_.jpg', 2);
insert into img values(2,'1634399383827_img_.jpg', 4);
insert into img values(3,'1634063882064_img_.jpg', 5);
insert into img values(4,'1634081104621_img_.jpg', 9);


