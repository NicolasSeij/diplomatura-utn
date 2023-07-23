CREATE TABLE IF NOT EXISTS `login-test`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user` VARCHAR(250) NULL,
  `password` VARCHAR(250) NULL,
  PRIMARY KEY (`id`));

INSERT INTO `login-test`.`usuarios` (`usuario`, `password`) VALUES ('nico', MD5('0092'));
INSERT INTO `login-test`.`usuarios` (`usuario`, `password`) VALUES ('root', MD5('root'));

CREATE TABLE IF NOT EXISTS `login-test`.`novedades` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NULL,
  `subtitulo` VARCHAR(45) NULL,
  `cuerpo` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));
