DROP DATABASE IF EXISTS `autopistas`;
CREATE DATABASE IF NOT EXISTS `autopistas`;
USE `autopistas`;

CREATE TABLE IF NOT EXISTS `usuario` (
    `cedula_usuario`                    BIGINT              NOT NULL,
    `nombre_usuario`                    VARCHAR(50)             NULL DEFAULT NULL,
    `apellido_usuario`                  VARCHAR(50)             NULL DEFAULT NULL,
    `seudonimo`                         VARCHAR(30)             NULL DEFAULT NULL,
    `tipo_usuario`                      ENUM('1','2','3','4'),
    `contrasena`                        VARCHAR(30)             NULL DEFAULT NULL,
    `cargo_usuario`                     VARCHAR(30)             NULL DEFAULT NULL,
    PRIMARY KEY (`cedula_usuario` ASC)
);

CREATE TABLE IF NOT EXISTS `transito_dinamica` (
    `id_dinamica`                       BIGINT              NOT NULL AUTO_INCREMENT,
    `id_categoria`                      INT(5)                  NULL DEFAULT NULL,
    `placa_vehiculo`                    VARCHAR(10)             NULL DEFAULT NULL,
    `fecha_hora_transito`               DATETIME                NULL DEFAULT NULL,
    `peso_general`                      INT(6)                  NULL DEFAULT NULL,
    `peso_ejes`                         VARCHAR(50)             NULL DEFAULT NULL,
    `velocidad`                         FLOAT                   NULL DEFAULT NULL,
    `base_64_placa`                     LONGTEXT                NULL DEFAULT NULL,
    PRIMARY KEY (`id_dinamica` ASC)
);

CREATE TABLE IF NOT EXISTS `vehiculo_sobrepeso` (
    `id_repeso`                         BIGINT              NOT NULL AUTO_INCREMENT,
    `id_dinamica`                       BIGINT                  NULL DEFAULT NULL,
    `peso_maximo`                       INT(6)                  NULL DEFAULT NULL,
    `diferencia_peso`                   INT(6)                  NULL DEFAULT NULL,
    `placa_vehiculo`                    VARCHAR(10)             NULL DEFAULT NULL,
    `borrado`                           BIT                     NULL DEFAULT NULL,
    PRIMARY KEY (`id_repeso` ASC)
);

CREATE TABLE IF NOT EXISTS `registro_vehiculo` (
    `tiquete_nro`                       BIGINT              NOT NULL,
    `id_repeso`                         BIGINT                  NULL DEFAULT NULL,
    `id_categoria`                      BIGINT                  NULL DEFAULT NULL,
    `cedula_usuario`                    BIGINT                  NULL DEFAULT NULL,
    `placa_vehiculo`                    VARCHAR(10)             NULL DEFAULT NULL,
    `id_mercancia`                      BIGINT                  NULL DEFAULT NULL,
    `cedula_conductor`                  BIGINT                  NULL DEFAULT NULL,
    `fecha_hora_estatica`               DATETIME                NULL DEFAULT NULL,
    `peso_estatica`                     BIGINT                  NULL DEFAULT NULL,
    `sobrepeso`                         BIGINT                  NULL DEFAULT NULL,
    `pesaje_autorizado`                 BIT                     NULL DEFAULT NULL,
    `comparendo`                        BIT                     NULL DEFAULT NULL,
    PRIMARY KEY (`tiquete_nro` ASC)
);

CREATE TABLE IF NOT EXISTS `mercancia` (
    `id_mercancia`                      BIGINT              NOT NULL,
    `nombre_mercancia`                  VARCHAR(50)             NULL DEFAULT NULL,
    `descripcion_mercancia`             VARCHAR(200)            NULL DEFAULT NULL,
    PRIMARY KEY (`id_mercancia` ASC)
);

CREATE TABLE IF NOT EXISTS `conductor` (
    `cedula_conductor`                  BIGINT              NOT NULL,
    `nombre_conductor`                  VARCHAR(50)             NULL DEFAULT NULL,
    `apellido_conductor`                VARCHAR(50)             NULL DEFAULT NULL,
    `telefono`                          VARCHAR(20)             NULL DEFAULT NULL,
    PRIMARY KEY (`cedula_conductor` ASC)
);

CREATE TABLE IF NOT EXISTS `categoria` (
    `id_categoria`                      BIGINT              NOT NULL,
    `categoria`                         VARCHAR(6)              NULL DEFAULT NULL,
    `peso_maximo`                       INT(6)                  NULL DEFAULT NULL,
    `tolerancia`                        INT(6)                  NULL DEFAULT NULL,
    `descripcion`                       VARCHAR(200)            NULL DEFAULT NULL,
    `eje_sencillo`                      INT(6)                  NULL DEFAULT NULL,
    `eje_tandem`                        INT(6)                  NULL DEFAULT NULL,
    `total_ejes`                        INT(6)                  NULL DEFAULT NULL,
    PRIMARY KEY (`id_categoria` ASC)
);

CREATE TABLE IF NOT EXISTS `vehiculo` (
    `placa_vehiculo`                    VARCHAR(10)         NOT NULL,
    `id_categoria`                      BIGINT                  NULL DEFAULT NULL,
    `observaciones`                     VARCHAR(200)            NULL DEFAULT NULL,
    PRIMARY KEY (`placa_vehiculo` ASC)
);

CREATE TABLE IF NOT EXISTS `comparendo` (
    `id_comparendo`                     BIGINT              NOT NULL,
    `placa_vehiculo`                    VARCHAR(10)             NULL DEFAULT NULL,
    `id_policia`                        BIGINT                  NULL DEFAULT NULL,
    `cedula_conductor`                  BIGINT                  NULL DEFAULT NULL,
    `tiquete_nro`                       BIGINT                  NULL DEFAULT NULL,
    `codigo_comparendo`                 INT(11)                 NULL DEFAULT NULL,
    `observaciones`                     VARCHAR(200)            NULL DEFAULT NULL,
    `tipo_infractor`                    ENUM('1','2','3')       NULL DEFAULT NULL,
    PRIMARY KEY (`id_comparendo` ASC)
);

CREATE TABLE IF NOT EXISTS `trama_comunicacion` (
    `id_trama`                          BIGINT              NOT NULL,
    `nombre_trama`                      VARCHAR(50)             NULL DEFAULT NULL,
    `posicion_inicial`                  INT(5)                  NULL DEFAULT NULL,
    `total_datos_peso`                  INT(5)                  NULL DEFAULT NULL,
    `caracter_fin`                      CHAR(5)                 NULL DEFAULT NULL,
    `caracter_inicio`                   CHAR(5)                 NULL DEFAULT NULL,
    PRIMARY KEY (`id_trama` ASC)
);

CREATE TABLE IF NOT EXISTS `configuracion` (
    `id_configuracion`                  BIGINT              NOT NULL,
    `parametro`                         VARCHAR(50)             NULL DEFAULT NULL,
    `valor`                             LONGTEXT                NULL DEFAULT NULL,
    PRIMARY KEY (`id_configuracion` ASC)
);

CREATE TABLE IF NOT EXISTS `policia` (
    `id_policia`                        BIGINT              NOT NULL,
    `nombre_policia`                    VARCHAR(50)             NULL DEFAULT NULL,
    `apellido_policia`                  VARCHAR(50)             NULL DEFAULT NULL,
    `telefono`                          VARCHAR(20)             NULL DEFAULT NULL,
    PRIMARY KEY (`id_policia` ASC)
);

CREATE TABLE IF NOT EXISTS `menu` (
    `id`                                VARCHAR(200)        NOT NULL,
    `title`                             VARCHAR(100)            NULL DEFAULT NULL,
    `subtitle`                          VARCHAR(200)            NULL DEFAULT NULL,
    `type`                              VARCHAR(100)            NULL DEFAULT NULL,
    `icon`                              VARCHAR(100)            NULL DEFAULT NULL,
    `link`                              VARCHAR(100)            NULL DEFAULT NULL,
    `exact_match`                       BIT                     NULL DEFAULT NULL,
    `active`                            BIT                     NULL DEFAULT NULL,
    `disabled`                          BIT                     NULL DEFAULT NULL,
    `badge`                             VARCHAR(50)             NULL DEFAULT NULL,
    `father`                            VARCHAR(200)            NULL DEFAULT NULL,
    PRIMARY KEY (`id` ASC)
);

CREATE TABLE IF NOT EXISTS `badge` (
    `title`                             VARCHAR(50)         NOT NULL,
    `classes`                           VARCHAR(250)            NULL DEFAULT NULL,
    PRIMARY KEY (`title` ASC)
);


CREATE TABLE IF NOT EXISTS `pesaje` (
    `id`                                BIGINT              NOT NULL AUTO_INCREMENT,
    `tiquete_numero`                    BIGINT                  NULL DEFAULT NULL,
    `placa`                             VARCHAR(10)             NULL DEFAULT NULL,
    `codigo`                            VARCHAR(50)             NULL DEFAULT NULL,
    `numero_interno`                    BIGINT                  NULL DEFAULT NULL,
    `tipo_vehiculo`                     VARCHAR(20)             NULL DEFAULT NULL,
    `conductor`                         VARCHAR(100)            NULL DEFAULT NULL,
    `cedula`                            VARCHAR(20)             NULL DEFAULT NULL,
    `producto`                          VARCHAR(100)            NULL DEFAULT NULL,
    `planta`                            VARCHAR(100)            NULL DEFAULT NULL,
    `cliente`                           VARCHAR(100)            NULL DEFAULT NULL,
    `transportadora`                    VARCHAR(100)            NULL DEFAULT NULL,
    `fecha_hora_peso_vacio`             DATETIME                NULL DEFAULT NULL,
    `fecha_hora_peso_lleno`             DATETIME                NULL DEFAULT NULL,
    `civ`                               VARCHAR(50)             NULL DEFAULT NULL,
    `direccion`                         VARCHAR(80)             NULL DEFAULT NULL,
    `entregado_por`                     VARCHAR(100)            NULL DEFAULT NULL,
    `recibido_por`                      VARCHAR(100)            NULL DEFAULT NULL,
    `shipment`                          VARCHAR(50)             NULL DEFAULT NULL,
    `sello`                             VARCHAR(50)             NULL DEFAULT NULL,
    `r`                                 VARCHAR(50)             NULL DEFAULT NULL,
    `contenedor`                        VARCHAR(50)             NULL DEFAULT NULL,
    `observacion`                       VARCHAR(250)            NULL DEFAULT NULL,
    `tipo_ingreso`                      ENUM('Despacho producto','Entrada materia prima', ''),
    PRIMARY KEY (`id` ASC)
);

CREATE TABLE IF NOT EXISTS `periferico` (
    `id`                                BIGINT              NOT NULL AUTO_INCREMENT,
    `tipo_periferico`                   ENUM('Bascula_Estatica','Bascula_Dinamica', ''),
    `ip`                                VARCHAR(50)             NULL DEFAULT NULL,
    `puerto`                            BIGINT                  NULL DEFAULT NULL,
    `codigo`                            VARCHAR(50)             NULL DEFAULT NULL,
    PRIMARY KEY (`id` ASC)
);

-- ---------------------------- --
-- --------FOREIGN KEYS-------- --
-- ---------------------------- --

ALTER TABLE `vehiculo_sobrepeso`
    ADD INDEX `fk_vehiculos_sobrepeso_id_dinamica_idx` (`id_dinamica` ASC),
    ADD CONSTRAINT `fk_vehiculos_sobrepeso_id_dinamica`
        FOREIGN KEY (`id_dinamica`)
        REFERENCES `transito_dinamica` (`id_dinamica`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `vehiculo`
    ADD INDEX `fk_vehiculo_id_categoria_idx` (`id_categoria` ASC),
    ADD CONSTRAINT `fk_vehiculo_id_categoria`
        FOREIGN KEY (`id_categoria`)
        REFERENCES `categoria` (`id_categoria`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `registro_vehiculo`
    ADD INDEX `fk_registro_vehiculos_id_repeso_idx` (`id_repeso` ASC),
    ADD INDEX `fk_registro_vehiculos_cedula_usuario_idx` (`cedula_usuario` ASC),
    ADD INDEX `fk_registro_vehiculos_id_mercancia_idx` (`id_mercancia` ASC),
    ADD INDEX `fk_registro_vehiculos_cedula_conductor_idx` (`cedula_conductor` ASC),
    ADD INDEX `fk_registro_vehiculos_id_categoria_idx` (`id_categoria` ASC),
    ADD INDEX `fk_registro_vehiculos_placa_vehiculo_idx` (`placa_vehiculo` ASC),
    ADD CONSTRAINT `fk_registro_vehiculos_id_repeso`
        FOREIGN KEY (`id_repeso`)
        REFERENCES `vehiculo_sobrepeso` (`id_repeso`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fk_registro_vehiculos_cedula_usuario`
        FOREIGN KEY (`cedula_usuario`)
        REFERENCES `usuario` (`cedula_usuario`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fk_registro_vehiculos_id_mercancia`
        FOREIGN KEY (`id_mercancia`)
        REFERENCES `mercancia` (`id_mercancia`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fk_registro_vehiculos_cedula_conductor`
        FOREIGN KEY (`cedula_conductor`)
        REFERENCES `conductor` (`cedula_conductor`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fk_registro_vehiculos_id_categoria`
        FOREIGN KEY (`id_categoria`)
        REFERENCES `categoria` (`id_categoria`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fk_registro_vehiculos_placa_vehiculo`
        FOREIGN KEY (`placa_vehiculo`)
        REFERENCES `vehiculo` (`placa_vehiculo`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `comparendo`
    ADD INDEX `fk_comparendos_cedula_conductor_idx` (`cedula_conductor` ASC),
    ADD INDEX `fk_comparendos_tiquete_nro_idx` (`tiquete_nro` ASC),
    ADD INDEX `fk_comparendos_placa_vehiculo_idx` (`placa_vehiculo` ASC),
    ADD INDEX `fk_comparendos_id_policia_idx` (`id_policia` ASC),
    ADD CONSTRAINT `fk_comparendos_cedula_conductor`
        FOREIGN KEY (`cedula_conductor`)
        REFERENCES `conductor` (`cedula_conductor`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fk_comparendos_tiquete_nro`
        FOREIGN KEY (`tiquete_nro`)
        REFERENCES `registro_vehiculo` (`tiquete_nro`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fk_comparendos_placa_vehiculo`
        FOREIGN KEY (`placa_vehiculo`)
        REFERENCES `vehiculo` (`placa_vehiculo`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fk_comparendos_id_policia`
        FOREIGN KEY (`id_policia`)
        REFERENCES `policia` (`id_policia`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `menu`
    ADD INDEX `fk_menu_badge_idx` (`badge` ASC),
    ADD INDEX `fk_menu_father_idx` (`father` ASC),
    ADD CONSTRAINT `fk_menu_badge`
        FOREIGN KEY (`badge`)
        REFERENCES `badge` (`title`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fk_menu_father`
        FOREIGN KEY (`father`)
        REFERENCES `menu` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;
