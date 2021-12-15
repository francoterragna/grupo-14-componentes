CREATE TABLE `products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` TEXT NOT NULL,
   `description` TEXT,
   `category_id` INT NOT NULL,
   `discount` INT,
   `price` FLOAT NOT NULL,
   `stock` INT NOT NULL,
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
   `id` INT AUTO_INCREMENT,
   `name` TEXT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `ventas_users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `user_id` INT NOT NULL,
   `product_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `product_size` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `product_id` INT NOT NULL,
   `size_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `category` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` TEXT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `img` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` TEXT NOT NULL,
   `product_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `products` ADD CONSTRAINT `FK_0eb1811e-1a5c-4c2b-bf02-3f84abac8b94` FOREIGN KEY (`category_id`) REFERENCES `category`(`id`)  ;

ALTER TABLE `ventas_users` ADD CONSTRAINT `FK_9424ce0c-f0c3-4f05-99c6-0fa134818e46` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)  ;

ALTER TABLE `ventas_users` ADD CONSTRAINT `FK_f4b002c9-322d-4a6f-a062-6a8692f50f4f` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)  ;

ALTER TABLE `product_size` ADD CONSTRAINT `FK_0b3d4a76-421c-42d7-b389-b10a10c155c2` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)  ;

ALTER TABLE `product_size` ADD CONSTRAINT `FK_a58e8ca8-75fb-4f3b-91a7-233aa2343bfe` FOREIGN KEY (`size_id`) REFERENCES `sizes`(`id`)  ;

ALTER TABLE `img` ADD CONSTRAINT `FK_833eafd4-2c70-461f-bf7e-58b62ad70213` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)  ;

insert into category values (1, 'remera');
insert into category values (2, 'buzo');
insert into category values (3, 'pantalon');
insert into category values (4, 'camisa');
insert into category values (5, 'malla');
insert into category values (6, 'medias');
insert into category values (7, 'gorra');
insert into category values (8, 'campera');
insert into category values (9, 'bermuda');
insert into category values (10, 'accesorio');


 INSERT INTO products values(2,'Remera París','Remera paris Messi',1,10,25000,10);
    INSERT INTO products values(3,'Buzo','Buzo negro',2,NULL,15000,10);
    INSERT INTO products values(4,'Remera París Negra','Remera bien piolonaaa',1,20,4000,10);
    INSERT INTO products values(5,'Remera blanca','Remera blanca',1,15,354,10);
    INSERT INTO products values(6,'Remera Nirvana','Remera negra con estampado de la banda Nirvana',1,20,4000,10);
    INSERT INTO products values(7,'Remera Hollister','Remera Hollister color azul oscuro con estampado colorido',1,10,3200,10);
    INSERT INTO products values(8,'Remera con Botones','Remera blanca con botones',1,NULL,2500,10);
    INSERT INTO products values(9,'Remera negra','Remera negra con estampado de sonrisa blanca',1,15,3000,10);
    INSERT INTO products values(10,'Remera Bob Marley','Remera negra con estampado de Bob Marley y su tradicional frase',1,30,5000,10);
    INSERT INTO products values(11,'Remera con bolsillo','Remera blanca y gris con bolsillo ',1,NULL,4000,10);
    INSERT INTO products values(12,'Remera Calavera ','Remera Blanca con estampado de Calavera',1,20,2000,10);
    INSERT INTO products values(13,'Remera negra','Remera negra ajustada al cuerpo',1,5,4000,10);
    INSERT INTO products values(14,'Buzo Nike','Buzo Nike Gris',2,20,7000,10);
    INSERT INTO products values(15,'Buzo Beige','Buzo Beige',2,50,6000,10);
    INSERT INTO products values(16,'Buzo Adidas','Buzo Adidas Gris',2,20,8000,10);
    INSERT INTO products values(17,'Buzo Blanco','Buzo Blanco Abercrombie',2,10,9000,10);
    INSERT INTO products values(18,'Buzo Adidas Deportivo','Buzo Adidas Gris ',2,20,4000,10);
    INSERT INTO products values(19,'Buzo Fila Tricolor','Buzo Fila Tricolor',2,NULL,5000,10);
    INSERT INTO products values(20,'Buzo Hollister','Buzo Hollister Negro',2,60,10000,10);
    INSERT INTO products values(21,'Buzo Abercrombie','Buzo Abercrombie',2,20,4000,10);
    INSERT INTO products values(22,'Buzo Tommy','Buzo Tommy Azul',2,15,4500,10);
    INSERT INTO products values(23,'Buzo Fila Negro','Buzo Fila Negro',2,25,7600,10);
    INSERT INTO products values(24,'Jean Celeste Roto','Jean Celeste Roto',3,20,5000,10);
    INSERT INTO products values(25,'Jean Celeste Chupin','Jean Celeste Chupin',3,10,3000,10);
    INSERT INTO products values(26,'Pantalón Cuadrille Negro','Pantalón Cuadrille Negro',3,20,6000,10);
    INSERT INTO products values(27,'Jean Blanco','Jean Blanco',3,20,7800,10);
    INSERT INTO products values(28,'Pantalón Cuadrille Gris','Pantalón Cuadrille Gris',3,50,6000,10);
    INSERT INTO products values(29,'Jogger Oscuro','Jogger Oscuro',3,20,3200,10);
    INSERT INTO products values(30,'Jogger Crema','Jogger Crema',3,5,4000,10);
    INSERT INTO products values(31,'Jean Negro Roto','Jean Negro Roto',3,20,6580,10);
    INSERT INTO products values(32,'Jean Blanco Roto','Jean Blanco Roto',3,20,4500,10);
    INSERT INTO products values(33,'Camisa Cuadros','Camisa Cuadros rojos y negros',4,10,6790,10);
    INSERT INTO products values(34,'Camisa Rayas ','Camisa Rayas ',4,20,4500,10);
    INSERT INTO products values(35,'Camisa Cuadros','Blanco y negro',4,10,4000,10);
    INSERT INTO products values(36,'Camisa Estampados','Camisa Estampados',4,40,7000,10);
    INSERT INTO products values(37,'Camisa Azul Oscuro','Camisa Elegante Azul Oscuro',4,15,8000,10);
    INSERT INTO products values(38,'Camisa Celeste','Camisa Celeste Elegante',4,50,3500,10);
    INSERT INTO products values(39,'Camisa con Puntos','Camisa blanca con Puntos negros ',4,10,6000,10);
    INSERT INTO products values(40,'Camisa manga corta','Camisa manga corta mostaza',4,10,5000,10);
    INSERT INTO products values(41,'Camisa manga corta','Camisa Floreada',4,30,3000,10);
    INSERT INTO products values(42,'Traje de Baño con dibujos','Traje de Baño Blanco con estampas de colores',5,10,4000,10);
    INSERT INTO products values(43,'Traje de Baño con rayas','Traje de baño con rayas blancas y azules',5,NULL,3000,10);
    INSERT INTO products values(44,'Traje de Baño Liso','Traje de Baño Liso Color verde militar',5,NULL,2500,10);
    INSERT INTO products values(45,'Traje de Baño con dibujos','Traje de baño rosa con dibujos de cactus',5,NULL,3400,10);
    INSERT INTO products values(46,'Traje de Baño Liso','Traje de Baño Liso color Rojo',5,NULL,2800,10);
    INSERT INTO products values(47,'Traje de Baño Liso','Traje de Baño Liso color rosa',5,10,2000,10);
    INSERT INTO products values(48,'Traje de Baño con dibujos','Traje de Baño con dibujos color negro y dibujos azules',5,20,4000,10);
    INSERT INTO products values(49,'Traje de Baño Liso','Traje de Baño Liso: Color Azul marino',5,10,2000,10);
    INSERT INTO products values(50,'Traje de Baño con dibujos','Traje de Baño con dibujos y colores tropicales',5,5,4000,10);
    INSERT INTO products values(51,'Medias B&W','Medias blancas con líneas negras',6,NULL,1000,10);
    INSERT INTO products values(52,'Medias Fuego','Medias Fuego en blanco y en negro',6,10,800,10);
    INSERT INTO products values(53,'Medias Aliens','Medias negras con Aliens Verdes',6,NULL,800,10);
    INSERT INTO products values(54,'Medias Rolling Stones','Medias Rolling Stones en blanco y en negro',6,5,1000,10);
    INSERT INTO products values(55,'Medias Jordan','Medias Jordan Rojas',6,20,1000,10);
    INSERT INTO products values(56,'Medias Stars War','Medias Stars War Negras y amarillas',6,10,2000,10);
    INSERT INTO products values(57,'Medias NASA','Medias con dibujos de la NASA',6,10,1200,10);
    INSERT INTO products values(58,'Campera AFA','Campera del campeón de América',7,25,20000,10);
    INSERT INTO products values(59,'Campera gris','Campera gris con capucha',7,25,12500,10);
    INSERT INTO products values(60,'Campera Lacoste','Campera color beige Lacoste',7,25,16000,10);
    INSERT INTO products values(61,'Campera Ferrari','Campera Ferrari negra y roja',7,25,28000,10);
    INSERT INTO products values(62,'Campera negra','Cempera negra loar',7,25,12000,10);
    INSERT INTO products values(63,'Campera Montagne','Campera Montagne beige con polar',7,25,24000,10);
    INSERT INTO products values(64,'Campera rompe viento','Campera rompe viento roja y azul',7,25,16500,10);
    INSERT INTO products values(65,'Campera negra simple','Campera negra con cierre rojo',7,25,14000,10);
    INSERT INTO products values(66,'Campera Nike negra','Campera Nike negra',7,25,18000,10);
    INSERT INTO products values(67,'Malla roja ','Malla del fenómeno',5,25,2000,10);
    INSERT INTO products values(68,'Bermuda rosa','Bermuda rosa',8,15,4000,10);
    INSERT INTO products values(69,'Bermuda verde','Bermuda verde con bolsillo',8,10,4200,10);
    INSERT INTO products values(70,'Bermuda de jean','Bermuda de jean azul',8,NULL,3000,10);
    INSERT INTO products values(71,'Bermuda negra','Bermuda negra con bolsillo',8,NULL,2000,10);
    INSERT INTO products values(72,'Bermuda negra','Bermuda negra sin cierre',8,NULL,2400,10);
    INSERT INTO products values(73,'Bermuda militar','Bermuda cargo militar',8,NULL,5000,10);
    INSERT INTO products values(74,'Gorra cara Diego','Gorra de la cara de Diego',9,NULL,1500,10);
    INSERT INTO products values(75,'Gorro negro Adidas','Gorro negro Adidas',9,NULL,1200,10);
    INSERT INTO products values(76,'Gorra Goku','Gorra goku negra',9,NULL,2000,10);
    INSERT INTO products values(77,'Gorra tazmania','Gorra demonio de tazmania',9,NULL,2100,10);
    INSERT INTO products values(78,'Gorra bugs bunny','Gorra bugs bunny',9,NULL,2000,10);
    INSERT INTO products values(79,'Gorra AFA','Gorra AFA azul',9,10,1500,10);
    INSERT INTO products values(80,'Gorra símbolo $','Gorra simbolo dólar',9,NULL,1500,10);
    INSERT INTO products values(81,'Gorro U.R.S.S negro','Gorro de la Unión de la República Socialista Soviética negro',9,NULL,5000,10);
    INSERT INTO products values(82,'Piluso dólares','Piluso estampado con dólares',9,NULL,2000,10);
    INSERT INTO products values(83,'Neseser negro con tachas','Neseser negro con cierre frontal y tachas',10,NULL,3200,10);
    INSERT INTO products values(84,'Riñonera Nike','Riñonera nike azul',10,NULL,2100,10);
    INSERT INTO products values(85,'Billetera Maradona','Billetera con la cara de Maradona',10,NULL,1000,10);
    INSERT INTO products values(86,'Billetera Everlast','Billetera Everlast gris y azul',10,10,1520,10);
    INSERT INTO products values(87,'Billetera Everlast marrón','Billetera Everlast marrón ',10,15,2000,10);
    INSERT INTO products values(88,'Riñonera negra','Riñonera negra',10,NULL,2200,10);
    INSERT INTO products values(89,'Neseser negro','Neseser negro',10,NULL,1500,10);
   
insert into img values(1,'1634059312561_img_.jpg', 2);
insert into img values(2,'1634399383827_img_.jpg', 4);
insert into img values(3,'1634063882064_img_.jpg', 5);
-- insert into img values (4,'1634081104621_img_.jpg', 9); NO ANDA
insert into img values (5, '1634060899870_img_.jpg', 3);
insert into img values (6, '1634080901977_img_.jpg', 6);
insert into img values (7, '1634081013537_img_.jpg', 7);
insert into img values (8, '1634081068882_img_.jpg', 8);
insert into img values (10, '1634081158676_img_.jpg', 10);
insert into img values (11, '1634081189094_img_.jpg', 11);
insert into img values (12, '1634081226372_img_.jpg', 12);
insert into img values (13, '1634081261533_img_.jpg', 13);
insert into img values (14, '1634082044835_img_.jpg', 14);
insert into img values (15, '1634082093078_img_.jpg', 15);
insert into img values (16, '1634082121023_img_.jpg', 16);
insert into img values (17, '1634082165575_img_.jpg', 17);
insert into img values (18, '1634082212148_img_.jpg', 18);
insert into img values (19, '1634082250780_img_.jpg', 19);
insert into img values (20, '1634082288966_img_.jpg', 20);
insert into img values (21, '1634082326077_img_.jpg', 21);
insert into img values (22, '1634082390380_img_.jpg', 22);
insert into img values (23, '1634082435855_img_.jpg', 23);
insert into img values (24, '1634082973362_img_.png', 24);
insert into img values (25, '1634083010629_img_.jpg', 25);
insert into img values (26, '1634083042484_img_.jpg', 26);
insert into img values (27, '1634083069108_img_.jpg', 27);
insert into img values (28, '1634083092858_img_.jpg', 28);
insert into img values (29, '1634083121897_img_.jpg', 29);
insert into img values (30, '1634083150401_img_.jpg', 30);
insert into img values (31, '1634083182484_img_.jpg', 31);
insert into img values (32, '1634083212039_img_.jpg', 32);
insert into img values (33, '1634084060352_img_.jpg', 33);
insert into img values (34, '1634084134945_img_.jpg', 34);
insert into img values (35, '1634084174850_img_.jpg', 35);
insert into img values (36, '1634084236113_img_.jpg', 36);
insert into img values (37, '1634084283326_img_.jpg', 37);
insert into img values (38, '1634084317500_img_.jpg', 38);
insert into img values (39, '1634084360225_img_.jpg', 39);
insert into img values (40, '1634084426774_img_.jpg', 40);
insert into img values (41, '1634084467062_img_.jpg', 41);
insert into img values (42, '1634091835595_img_.jpg', 42);
insert into img values (43, '1634091957402_img_.jpg', 43);
insert into img values (44, '1634092445761_img_.jpg', 44);
insert into img values (45, '1634092477289_img_.jpg', 45);
insert into img values (46, '1634092512171_img_.jpg', 46);
insert into img values (47, '1634092550330_img_.jpg', 47);
insert into img values (48, '1634092635243_img_.jpg', 48);
insert into img values (49, '1634092665900_img_.jpg', 49);
insert into img values (50, '1634092701882_img_.jpg', 50);
insert into img values (51, '1634093641928_img_.jpg', 51);
insert into img values (52, '1634093685160_img_.jpg', 52);
insert into img values (53, '1634093714134_img_.jpg', 53);
insert into img values (54, '1634093798322_img_.jpg', 54);
insert into img values (55, '1634093825651_img_.jpg', 55);
insert into img values (56, '1634093871333_img_.jpg', 56);
insert into img values (57, '1634093903043_img_.jpg', 57);
insert into img values (58, '1634172638743_img_.jpg', 58);
insert into img values (59, '1634172719455_img_.jpg', 59);
insert into img values (60, '1634172784864_img_.jpg', 60);
insert into img values (61, '1634172912051_img_.jpg', 61);
insert into img values (62, '1634172978472_img_.jpg', 62);
insert into img values (63, '1634173058092_img_.jpg', 63);
insert into img values (64, '1634173121983_img_.jpg', 64);
insert into img values (65, '1634173150642_img_.jpg', 65);
insert into img values (66, '1634173204562_img_.jpg', 66);
insert into img values (67, '1634173612319_img_.jpg', 67);
insert into img values (68, '1634173688778_img_.jpg', 68);
insert into img values (69, '1634173716587_img_.jpg', 69);
insert into img values (70, '1634173743623_img_.jpg', 70);
insert into img values (71, '1634173795190_img_.jpg', 71);
insert into img values (72, '1634173828556_img_.jpg', 72);
insert into img values (73, '1634174562165_img_.jpg', 73);
insert into img values (74, '1634175128264_img_.jpeg', 74);
insert into img values (75, '1634175155913_img_.jpg', 75);
insert into img values (76, '1634175196163_img_.jpg', 76);
insert into img values (77, '1634175225448_img_.jpg', 77);
insert into img values (78, '1634175273595_img_.jpg', 78);
insert into img values (79, '1634175301164_img_.jpg', 79);
insert into img values (80, '1634175360934_img_.jpg', 80);
insert into img values (81, '1634175443659_img_.jpg', 81);
insert into img values (82, '1634175598682_img_.jpg', 82);
insert into img values (83, '1634242101177_img_.jpg', 83);
insert into img values (84, '1634242249545_img_.jpg', 84);
insert into img values (85, '1634243139124_img_.jpg', 85);
insert into img values (86, '1634243174137_img_.jpg', 86);
insert into img values (87, '1634243238352_img_.jpg', 87);
insert into img values (88, '1634243311692_img_.jpg', 88);
insert into img values (89, '1634243445371_img_.jpg', 89);
    
insert into sizes values (1, 'XS');
insert into sizes values (2, 'S');
insert into sizes values (3, 'M');
insert into sizes values (4, 'L');
insert into sizes values (5, 'XL');
insert into sizes values (6, 'XXL');