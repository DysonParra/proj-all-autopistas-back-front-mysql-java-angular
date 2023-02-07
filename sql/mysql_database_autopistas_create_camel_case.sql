DROP DATABASE IF EXISTS `autopistas`;
CREATE DATABASE IF NOT EXISTS `autopistas`;
USE `autopistas`;

CREATE TABLE IF NOT EXISTS `Usuario` (
    `cedulaUsuario`                     BIGINT              NOT NULL,
    `nombreUsuario`                     VARCHAR(50)             NULL DEFAULT NULL,
    `apellidoUsuario`                   VARCHAR(50)             NULL DEFAULT NULL,
    `seudonimo`                         VARCHAR(30)             NULL DEFAULT NULL,
    `tipoUsuario`                       ENUM('1','2','3','4'),
    `contrasena`                        VARCHAR(30)             NULL DEFAULT NULL,
    `cargoUsuario`                      VARCHAR(30)             NULL DEFAULT NULL,
    PRIMARY KEY (`cedulaUsuario` ASC)
);

CREATE TABLE IF NOT EXISTS `TransitoDinamica` (
    `idDinamica`                        BIGINT              NOT NULL AUTO_INCREMENT,
    `idCategoria`                       INT(5)                  NULL DEFAULT NULL,
    `placaVehiculo`                     VARCHAR(10)             NULL DEFAULT NULL,
    `fechaHoraTransito`                 DATETIME                NULL DEFAULT NULL,
    `pesoGeneral`                       INT(6)                  NULL DEFAULT NULL,
    `pesoEjes`                          VARCHAR(50)             NULL DEFAULT NULL,
    `velocidad`                         FLOAT                   NULL DEFAULT NULL,
    `base64Placa`                       LONGTEXT                NULL DEFAULT NULL,
    PRIMARY KEY (`idDinamica` ASC)
);

CREATE TABLE IF NOT EXISTS `VehiculoSobrepeso` (
    `idRepeso`                          BIGINT              NOT NULL AUTO_INCREMENT,
    `idDinamica`                        BIGINT                  NULL DEFAULT NULL,
    `pesoMaximo`                        INT(6)                  NULL DEFAULT NULL,
    `diferenciaPeso`                    INT(6)                  NULL DEFAULT NULL,
    `placaVehiculo`                     VARCHAR(10)             NULL DEFAULT NULL,
    `borrado`                           BIT                     NULL DEFAULT NULL,
    PRIMARY KEY (`idRepeso` ASC)
);

CREATE TABLE IF NOT EXISTS `RegistroVehiculo` (
    `tiqueteNro`                        BIGINT              NOT NULL,
    `idRepeso`                          BIGINT                  NULL DEFAULT NULL,
    `idCategoria`                       BIGINT                  NULL DEFAULT NULL,
    `cedulaUsuario`                     BIGINT                  NULL DEFAULT NULL,
    `placaVehiculo`                     VARCHAR(10)             NULL DEFAULT NULL,
    `idMercancia`                       BIGINT                  NULL DEFAULT NULL,
    `cedulaConductor`                   BIGINT                  NULL DEFAULT NULL,
    `fechaHoraEstatica`                 DATETIME                NULL DEFAULT NULL,
    `pesoEstatica`                      BIGINT                  NULL DEFAULT NULL,
    `sobrepeso`                         BIGINT                  NULL DEFAULT NULL,
    `pesajeAutorizado`                  BIT                     NULL DEFAULT NULL,
    `comparendo`                        BIT                     NULL DEFAULT NULL,
    PRIMARY KEY (`tiqueteNro` ASC)
);

CREATE TABLE IF NOT EXISTS `Mercancia` (
    `idMercancia`                       BIGINT              NOT NULL,
    `nombreMercancia`                   VARCHAR(50)             NULL DEFAULT NULL,
    `descripcionMercancia`              VARCHAR(200)            NULL DEFAULT NULL,
    PRIMARY KEY (`idMercancia` ASC)
);

CREATE TABLE IF NOT EXISTS `Conductor` (
    `cedulaConductor`                   BIGINT              NOT NULL,
    `nombreConductor`                   VARCHAR(50)             NULL DEFAULT NULL,
    `apellidoConductor`                 VARCHAR(50)             NULL DEFAULT NULL,
    `telefono`                          VARCHAR(20)             NULL DEFAULT NULL,
    PRIMARY KEY (`cedulaConductor` ASC)
);

CREATE TABLE IF NOT EXISTS `Categoria` (
    `idCategoria`                       BIGINT              NOT NULL,
    `categoria`                         VARCHAR(6)              NULL DEFAULT NULL,
    `pesoMaximo`                        INT(6)                  NULL DEFAULT NULL,
    `tolerancia`                        INT(6)                  NULL DEFAULT NULL,
    `descripcion`                       VARCHAR(200)            NULL DEFAULT NULL,
    `ejeSencillo`                       INT(6)                  NULL DEFAULT NULL,
    `ejeTandem`                         INT(6)                  NULL DEFAULT NULL,
    `totalEjes`                         INT(6)                  NULL DEFAULT NULL,
    PRIMARY KEY (`idCategoria` ASC)
);

CREATE TABLE IF NOT EXISTS `Vehiculo` (
    `placaVehiculo`                     VARCHAR(10)         NOT NULL,
    `idCategoria`                       BIGINT                  NULL DEFAULT NULL,
    `observaciones`                     VARCHAR(200)            NULL DEFAULT NULL,
    PRIMARY KEY (`placaVehiculo` ASC)
);

CREATE TABLE IF NOT EXISTS `Comparendo` (
    `idComparendo`                      BIGINT              NOT NULL,
    `placaVehiculo`                     VARCHAR(10)             NULL DEFAULT NULL,
    `idPolicia`                         BIGINT                  NULL DEFAULT NULL,
    `cedulaConductor`                   BIGINT                  NULL DEFAULT NULL,
    `tiqueteNro`                        BIGINT                  NULL DEFAULT NULL,
    `codigoComparendo`                  INT(11)                 NULL DEFAULT NULL,
    `observaciones`                     VARCHAR(200)            NULL DEFAULT NULL,
    `tipoInfractor`                     ENUM('1','2','3')       NULL DEFAULT NULL,
    PRIMARY KEY (`idComparendo` ASC)
);

CREATE TABLE IF NOT EXISTS `TramaComunicacion` (
    `idTrama`                           BIGINT              NOT NULL,
    `nombreTrama`                       VARCHAR(50)             NULL DEFAULT NULL,
    `posicionInicial`                   INT(5)                  NULL DEFAULT NULL,
    `totalDatosPeso`                    INT(5)                  NULL DEFAULT NULL,
    `caracterFin`                       CHAR(5)                 NULL DEFAULT NULL,
    `caracterInicio`                    CHAR(5)                 NULL DEFAULT NULL,
    PRIMARY KEY (`idTrama` ASC)
);

CREATE TABLE IF NOT EXISTS `Configuracion` (
    `idConfiguracion`                   BIGINT              NOT NULL,
    `parametro`                         VARCHAR(50)             NULL DEFAULT NULL,
    `valor`                             LONGTEXT                NULL DEFAULT NULL,
    PRIMARY KEY (`idConfiguracion` ASC)
);

CREATE TABLE IF NOT EXISTS `Policia` (
    `idPolicia`                         BIGINT              NOT NULL,
    `nombrePolicia`                     VARCHAR(50)             NULL DEFAULT NULL,
    `apellidoPolicia`                   VARCHAR(50)             NULL DEFAULT NULL,
    `telefono`                          VARCHAR(20)             NULL DEFAULT NULL,
    PRIMARY KEY (`idPolicia` ASC)
);

CREATE TABLE IF NOT EXISTS `Menu` (
    `id`                                VARCHAR(200)        NOT NULL,
    `title`                             VARCHAR(100)            NULL DEFAULT NULL,
    `subtitle`                          VARCHAR(200)            NULL DEFAULT NULL,
    `type`                              VARCHAR(100)            NULL DEFAULT NULL,
    `icon`                              VARCHAR(100)            NULL DEFAULT NULL,
    `link`                              VARCHAR(100)            NULL DEFAULT NULL,
    `exactMatch`                        BIT                     NULL DEFAULT NULL,
    `active`                            BIT                     NULL DEFAULT NULL,
    `disabled`                          BIT                     NULL DEFAULT NULL,
    `badge`                             VARCHAR(50)             NULL DEFAULT NULL,
    `father`                            VARCHAR(200)            NULL DEFAULT NULL,
    PRIMARY KEY (`id` ASC)
);

CREATE TABLE IF NOT EXISTS `Badge` (
    `title`                             VARCHAR(50)         NOT NULL,
    `classes`                           VARCHAR(250)            NULL DEFAULT NULL,
    PRIMARY KEY (`title` ASC)
);


CREATE TABLE IF NOT EXISTS `Pesaje` (
    `id`                                BIGINT              NOT NULL AUTO_INCREMENT,
    `tiqueteNumero`                     BIGINT                  NULL DEFAULT NULL,
    `placa`                             VARCHAR(10)             NULL DEFAULT NULL,
    `codigo`                            VARCHAR(50)             NULL DEFAULT NULL,
    `numeroInterno`                     BIGINT                  NULL DEFAULT NULL,
    `tipoVehiculo`                      VARCHAR(20)             NULL DEFAULT NULL,
    `conductor`                         VARCHAR(100)            NULL DEFAULT NULL,
    `cedula`                            VARCHAR(20)             NULL DEFAULT NULL,
    `producto`                          VARCHAR(100)            NULL DEFAULT NULL,
    `planta`                            VARCHAR(100)            NULL DEFAULT NULL,
    `cliente`                           VARCHAR(100)            NULL DEFAULT NULL,
    `transportadora`                    VARCHAR(100)            NULL DEFAULT NULL,
    `fechaHoraPesoVacio`                DATETIME                NULL DEFAULT NULL,
    `fechaHoraPesoLleno`                DATETIME                NULL DEFAULT NULL,
    `civ`                               VARCHAR(50)             NULL DEFAULT NULL,
    `direccion`                         VARCHAR(80)             NULL DEFAULT NULL,
    `entregadoPor`                      VARCHAR(100)            NULL DEFAULT NULL,
    `recibidoPor`                       VARCHAR(100)            NULL DEFAULT NULL,
    `shipment`                          VARCHAR(50)             NULL DEFAULT NULL,
    `sello`                             VARCHAR(50)             NULL DEFAULT NULL,
    `r`                                 VARCHAR(50)             NULL DEFAULT NULL,
    `contenedor`                        VARCHAR(50)             NULL DEFAULT NULL,
    `observacion`                       VARCHAR(250)            NULL DEFAULT NULL,
    `tipoIngreso`                       ENUM('Despacho producto','Entrada materia prima', ''),
    PRIMARY KEY (`id` ASC)
);

CREATE TABLE IF NOT EXISTS `Periferico` (
    `id`                                BIGINT              NOT NULL AUTO_INCREMENT,
    `tipoPeriferico`                    ENUM('Bascula_Estatica','Bascula_Dinamica', ''),
    `ip`                                VARCHAR(50)             NULL DEFAULT NULL,
    `puerto`                            BIGINT                  NULL DEFAULT NULL,
    `codigo`                            VARCHAR(50)             NULL DEFAULT NULL,
    PRIMARY KEY (`id` ASC)
);

-- ---------------------------- --
-- --------FOREIGN KEYS-------- --
-- ---------------------------- --

ALTER TABLE `VehiculoSobrepeso`
    ADD INDEX `fkVehiculosSobrepesoIdDinamicaIdx` (`idDinamica` ASC),
    ADD CONSTRAINT `fkVehiculosSobrepesoIdDinamica`
        FOREIGN KEY (`idDinamica`)
        REFERENCES `TransitoDinamica` (`idDinamica`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `Vehiculo`
    ADD INDEX `fkVehiculoIdCategoriaIdx` (`idCategoria` ASC),
    ADD CONSTRAINT `fkVehiculoIdCategoria`
        FOREIGN KEY (`idCategoria`)
        REFERENCES `Categoria` (`idCategoria`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `RegistroVehiculo`
    ADD INDEX `fkRegistroVehiculosIdRepesoIdx` (`idRepeso` ASC),
    ADD INDEX `fkRegistroVehiculosCedulaUsuarioIdx` (`cedulaUsuario` ASC),
    ADD INDEX `fkRegistroVehiculosIdMercanciaIdx` (`idMercancia` ASC),
    ADD INDEX `fkRegistroVehiculosCedulaConductorIdx` (`cedulaConductor` ASC),
    ADD INDEX `fkRegistroVehiculosIdCategoriaIdx` (`idCategoria` ASC),
    ADD INDEX `fkRegistroVehiculosPlacaVehiculoIdx` (`placaVehiculo` ASC),
    ADD CONSTRAINT `fkRegistroVehiculosIdRepeso`
        FOREIGN KEY (`idRepeso`)
        REFERENCES `VehiculoSobrepeso` (`idRepeso`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fkRegistroVehiculosCedulaUsuario`
        FOREIGN KEY (`cedulaUsuario`)
        REFERENCES `Usuario` (`cedulaUsuario`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fkRegistroVehiculosIdMercancia`
        FOREIGN KEY (`idMercancia`)
        REFERENCES `Mercancia` (`idMercancia`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fkRegistroVehiculosCedulaConductor`
        FOREIGN KEY (`cedulaConductor`)
        REFERENCES `Conductor` (`cedulaConductor`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fkRegistroVehiculosIdCategoria`
        FOREIGN KEY (`idCategoria`)
        REFERENCES `Categoria` (`idCategoria`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fkRegistroVehiculosPlacaVehiculo`
        FOREIGN KEY (`placaVehiculo`)
        REFERENCES `Vehiculo` (`placaVehiculo`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `Comparendo`
    ADD INDEX `fkComparendosCedulaConductorIdx` (`cedulaConductor` ASC),
    ADD INDEX `fkComparendosTiqueteNroIdx` (`tiqueteNro` ASC),
    ADD INDEX `fkComparendosPlacaVehiculoIdx` (`placaVehiculo` ASC),
    ADD INDEX `fkComparendosIdPoliciaIdx` (`idPolicia` ASC),
    ADD CONSTRAINT `fkComparendosCedulaConductor`
        FOREIGN KEY (`cedulaConductor`)
        REFERENCES `Conductor` (`cedulaConductor`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fkComparendosTiqueteNro`
        FOREIGN KEY (`tiqueteNro`)
        REFERENCES `RegistroVehiculo` (`tiqueteNro`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fkComparendosPlacaVehiculo`
        FOREIGN KEY (`placaVehiculo`)
        REFERENCES `Vehiculo` (`placaVehiculo`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fkComparendosIdPolicia`
        FOREIGN KEY (`idPolicia`)
        REFERENCES `Policia` (`idPolicia`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `Menu`
    ADD INDEX `fkMenuBadgeIdx` (`badge` ASC),
    ADD INDEX `fkMenuFatherIdx` (`father` ASC),
    ADD CONSTRAINT `fkMenuBadge`
        FOREIGN KEY (`badge`)
        REFERENCES `Badge` (`title`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fkMenuFather`
        FOREIGN KEY (`father`)
        REFERENCES `Menu` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;
