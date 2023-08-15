CREATE TABLE IF NOT EXISTS `utn_course`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user` VARCHAR(250) NULL,
  `password` VARCHAR(250) NULL,
  PRIMARY KEY (`id`));

INSERT INTO `utn_course`.`usuarios` (`usuario`, `password`) VALUES ('juli', MD5('1234'));
INSERT INTO `utn_course`.`usuarios` (`usuario`, `password`) VALUES ('root', MD5('root'));

CREATE TABLE IF NOT EXISTS `utn_course`.`novedades` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NULL,
  `subtitulo` VARCHAR(45) NULL,
  `cuerpo` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `utn_course`.`novedades` 
ADD COLUMN `img_id` VARCHAR(250) NULL AFTER `cuerpo`;

