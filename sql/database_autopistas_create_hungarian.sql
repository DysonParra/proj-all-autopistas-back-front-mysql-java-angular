DROP DATABASE IF EXISTS autopistas;
CREATE DATABASE IF NOT EXISTS autopistas;
USE autopistas;

CREATE TABLE IF NOT EXISTS `Usuario` (
    `intCedulaUsuario`                  BIGINT              NOT NULL,
    `strNombreUsuario`                  VARCHAR(50)             NULL DEFAULT NULL,
    `strApellidoUsuario`                VARCHAR(50)             NULL DEFAULT NULL,
    `strSeudonimo`                      VARCHAR(30)             NULL DEFAULT NULL,
    `enmTipoUsuario`                    ENUM('1','2','3','4'),
    `strContrasena`                     VARCHAR(30)             NULL DEFAULT NULL,
    `strCargoUsuario`                   VARCHAR(30)             NULL DEFAULT NULL,
    PRIMARY KEY (
       `intCedulaUsuario` ASC
    )
);

CREATE TABLE IF NOT EXISTS `TransitoDinamica` (
    `intIdDinamica`                     BIGINT              NOT NULL AUTO_INCREMENT,
    `intIdCategoria`                    INT(5)                  NULL DEFAULT NULL,
    `strPlacaVehiculo`                  VARCHAR(8)              NULL DEFAULT NULL,
    `dtFechaHoraTransito`               DATETIME                NULL DEFAULT NULL,
    `intPesoGeneral`                    INT(6)                  NULL DEFAULT NULL,
    `strPesoEjes`                       VARCHAR(50)             NULL DEFAULT NULL,
    `fltVelocidad`                      FLOAT                   NULL DEFAULT NULL,
    `txtBase64Placa`                    LONGTEXT                NULL DEFAULT NULL,
    PRIMARY KEY (
       `intIdDinamica` ASC
    )
);

CREATE TABLE IF NOT EXISTS `VehiculoSobrepeso` (
    `intIdRepeso`                       BIGINT              NOT NULL AUTO_INCREMENT,
    `intIdDinamica`                     BIGINT                  NULL DEFAULT NULL,
    `intPesoMaximo`                     INT(6)                  NULL DEFAULT NULL,
    `intDiferenciaPeso`                 INT(6)                  NULL DEFAULT NULL,
    `strPlacaVehiculo`                  VARCHAR(8)              NULL DEFAULT NULL,
    `bitBorrado`                        BIT                     NULL DEFAULT NULL,
    PRIMARY KEY (
       `intIdRepeso` ASC
    )
);

CREATE TABLE IF NOT EXISTS `RegistroVehiculo` (
    `intTiqueteNro`                     BIGINT              NOT NULL,
    `intIdRepeso`                       BIGINT                  NULL DEFAULT NULL,
    `intIdCategoria`                    BIGINT                  NULL DEFAULT NULL,
    `intCedulaUsuario`                  BIGINT                  NULL DEFAULT NULL,
    `strPlacaVehiculo`                  VARCHAR(10)             NULL DEFAULT NULL,
    `intIdMercancia`                    BIGINT                  NULL DEFAULT NULL,
    `intCedulaConductor`                BIGINT                  NULL DEFAULT NULL,
    `dtFechaHoraEstatica`               DATETIME                NULL DEFAULT NULL,
    `intPesoEstatica`                   BIGINT                  NULL DEFAULT NULL,
    `intSobrepeso`                      BIGINT                  NULL DEFAULT NULL,
    `bitPesajeAutorizado`               BIT                     NULL DEFAULT NULL,
    `bitComparendo`                     BIT                     NULL DEFAULT NULL,
    PRIMARY KEY (
       `intTiqueteNro` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Mercancia` (
    `intIdMercancia`                    BIGINT              NOT NULL,
    `strNombreMercancia`                VARCHAR(50)             NULL DEFAULT NULL,
    `strDescripcionMercancia`           VARCHAR(200)            NULL DEFAULT NULL,
    PRIMARY KEY (
       `intIdMercancia` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Conductor` (
    `intCedulaConductor`                BIGINT              NOT NULL,
    `strNombreConductor`                VARCHAR(50)             NULL DEFAULT NULL,
    `strApellidoConductor`              VARCHAR(50)             NULL DEFAULT NULL,
    `strTelefono`                       VARCHAR(20)             NULL DEFAULT NULL,
    PRIMARY KEY (
       `intCedulaConductor` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Categoria` (
    `intIdCategoria`                    BIGINT              NOT NULL,
    `strCategoria`                      VARCHAR(6)              NULL DEFAULT NULL,
    `intPesoMaximo`                     INT(6)                  NULL DEFAULT NULL,
    `intTolerancia`                     INT(6)                  NULL DEFAULT NULL,
    `strDescripcion`                    VARCHAR(200)            NULL DEFAULT NULL,
    `intEjeSencillo`                    INT(6)                  NULL DEFAULT NULL,
    `intEjeTandem`                      INT(6)                  NULL DEFAULT NULL,
    `intTotalEjes`                      INT(6)                  NULL DEFAULT NULL,
    PRIMARY KEY (
       `intIdCategoria` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Vehiculo` (
    `strPlacaVehiculo`                  VARCHAR(6)          NOT NULL,
    `intIdCategoria`                    BIGINT                  NULL DEFAULT NULL,
    `strObservaciones`                  VARCHAR(200)            NULL DEFAULT NULL,
    PRIMARY KEY (
       `strPlacaVehiculo` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Comparendo` (
    `intIdComparendo`                   BIGINT              NOT NULL,
    `strPlacaVehiculo`                  VARCHAR(6)              NULL DEFAULT NULL,
    `intIdPolicia`                      BIGINT                  NULL DEFAULT NULL,
    `intCedulaConductor`                BIGINT                  NULL DEFAULT NULL,
    `intTiqueteNro`                     BIGINT                  NULL DEFAULT NULL,
    `intCodigoComparendo`               INT(11)                 NULL DEFAULT NULL,
    `strObservaciones`                  VARCHAR(200)            NULL DEFAULT NULL,
    `enmTipoInfractor`                  ENUM('1','2','3')       NULL DEFAULT NULL,
    PRIMARY KEY (
       `intIdComparendo` ASC
    )
);

CREATE TABLE IF NOT EXISTS `TramaComunicacion` (
    `intIdTrama`                        BIGINT              NOT NULL,
    `strNombreTrama`                    VARCHAR(50)             NULL DEFAULT NULL,
    `intPosicionInicial`                INT(5)                  NULL DEFAULT NULL,
    `intTotalDatosPeso`                 INT(5)                  NULL DEFAULT NULL,
    `crCaracterFin`                     CHAR(5)                 NULL DEFAULT NULL,
    `crCaracterInicio`                  CHAR(5)                 NULL DEFAULT NULL,
    PRIMARY KEY (
       `intIdTrama` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Configuracion` (
    `intIdConfiguracion`                BIGINT              NOT NULL,
    `strParametro`                      VARCHAR(50)             NULL DEFAULT NULL,
    `txtValor`                          LONGTEXT                NULL DEFAULT NULL,
    PRIMARY KEY (
       `intIdConfiguracion` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Policia` (
    `intIdPolicia`                      BIGINT              NOT NULL,
    `strNombrePolicia`                  VARCHAR(50)             NULL DEFAULT NULL,
    `strApellidoPolicia`                VARCHAR(50)             NULL DEFAULT NULL,
    `strTelefono`                       VARCHAR(20)             NULL DEFAULT NULL,
    PRIMARY KEY (
       `intIdPolicia` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Menu` (
    `strId`                             VARCHAR(200)        NOT NULL,
    `strTitle`                          VARCHAR(100)            NULL DEFAULT NULL,
    `strSubtitle`                       VARCHAR(200)            NULL DEFAULT NULL,
    `strType`                           VARCHAR(100)            NULL DEFAULT NULL,
    `strIcon`                           VARCHAR(100)            NULL DEFAULT NULL,
    `strLink`                           VARCHAR(100)            NULL DEFAULT NULL,
    `bitExactMatch`                     BIT                     NULL DEFAULT NULL,
    `bitActive`                         BIT                     NULL DEFAULT NULL,
    `bitDisabled`                       BIT                     NULL DEFAULT NULL,
    `strBadge`                          VARCHAR(50)             NULL DEFAULT NULL,
    `strFather`                         VARCHAR(200)            NULL DEFAULT NULL,
    PRIMARY KEY (
       `strId` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Badge` (
    `strTitle`                          VARCHAR(50)         NOT NULL,
    `strClasses`                        VARCHAR(250)            NULL DEFAULT NULL,
    PRIMARY KEY (
       `strTitle` ASC
    )
);


CREATE TABLE IF NOT EXISTS `Pesaje` (
    `intId`                             BIGINT              NOT NULL AUTO_INCREMENT,
    `intTiqueteNumero`                  BIGINT                  NULL DEFAULT NULL,
    `strPlaca`                          VARCHAR(10)             NULL DEFAULT NULL,
    `strCodigo`                         VARCHAR(50)             NULL DEFAULT NULL,
    `intNumeroInterno`                  BIGINT                  NULL DEFAULT NULL,
    `strTipoVehiculo`                   VARCHAR(20)             NULL DEFAULT NULL,
    `strConductor`                      VARCHAR(100)            NULL DEFAULT NULL,
    `strCedula`                         VARCHAR(20)             NULL DEFAULT NULL,
    `strProducto`                       VARCHAR(100)            NULL DEFAULT NULL,
    `strPlanta`                         VARCHAR(100)            NULL DEFAULT NULL,
    `strCliente`                        VARCHAR(100)            NULL DEFAULT NULL,
    `strTransportadora`                 VARCHAR(100)            NULL DEFAULT NULL,
    `dtFechaHoraPesoVacio`              DATETIME                NULL DEFAULT NULL,
    `dtFechaHoraPesoLleno`              DATETIME                NULL DEFAULT NULL,
    `strCiv`                            VARCHAR(50)             NULL DEFAULT NULL,
    `strDireccion`                      VARCHAR(80)             NULL DEFAULT NULL,
    `strEntregadoPor`                   VARCHAR(100)            NULL DEFAULT NULL,
    `strRecibidoPor`                    VARCHAR(100)            NULL DEFAULT NULL,
    `strShipment`                       VARCHAR(50)             NULL DEFAULT NULL,
    `strSello`                          VARCHAR(50)             NULL DEFAULT NULL,
    `strR`                              VARCHAR(50)             NULL DEFAULT NULL,
    `strContenedor`                     VARCHAR(50)             NULL DEFAULT NULL,
    `strObservacion`                    VARCHAR(250)            NULL DEFAULT NULL,
    `enmTipoIngreso`                    ENUM('Despacho producto','Entrada materia prima', ''),
    PRIMARY KEY (
       `intId` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Periferico` (
    `intId`                             BIGINT              NOT NULL AUTO_INCREMENT,
    `enmTipoPeriferico`                 ENUM('Bascula_Estatica','Bascula_Dinamica', ''),
    `strIp`                             VARCHAR(50)             NULL DEFAULT NULL,
    `intPuerto`                         BIGINT                  NULL DEFAULT NULL,
    `strCodigo`                         VARCHAR(50)             NULL DEFAULT NULL,
    PRIMARY KEY (
       `intId` ASC
    )
);

-- ---------------------------- --
-- --------FOREIGN KEYS-------- --
-- ---------------------------- --

ALTER TABLE `VehiculoSobrepeso`
    ADD INDEX `fkVehiculosSobrepesoIdDinamicaIdx` (`intIdDinamica` ASC),
    ADD CONSTRAINT `fkVehiculosSobrepesoIdDinamica`
        FOREIGN KEY (`intIdDinamica`)
        REFERENCES `TransitoDinamica` (`intIdDinamica`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `Vehiculo`
    ADD INDEX `fkVehiculoIdCategoriaIdx` (`intIdCategoria` ASC),
    ADD CONSTRAINT `fkVehiculoIdCategoria`
        FOREIGN KEY (`intIdCategoria`)
        REFERENCES `Categoria` (`intIdCategoria`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `RegistroVehiculo`
    ADD INDEX `fkRegistroVehiculosIdRepesoIdx` (`intIdRepeso` ASC),
    ADD INDEX `fkRegistroVehiculosCedulaUsuarioIdx` (`intCedulaUsuario` ASC),
    ADD INDEX `fkRegistroVehiculosIdMercanciaIdx` (`intIdMercancia` ASC),
    ADD INDEX `fkRegistroVehiculosCedulaConductorIdx` (`intCedulaConductor` ASC),
    ADD INDEX `fkRegistroVehiculosIdCategoriaIdx` (`intIdCategoria` ASC),
    ADD INDEX `fkRegistroVehiculosPlacaVehiculoIdx` (`strPlacaVehiculo` ASC),
    ADD CONSTRAINT `fkRegistroVehiculosIdRepeso`
        FOREIGN KEY (`intIdRepeso`)
        REFERENCES `VehiculoSobrepeso` (`intIdRepeso`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fkRegistroVehiculosCedulaUsuario`
        FOREIGN KEY (`intCedulaUsuario`)
        REFERENCES `Usuario` (`intCedulaUsuario`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fkRegistroVehiculosIdMercancia`
        FOREIGN KEY (`intIdMercancia`)
        REFERENCES `Mercancia` (`intIdMercancia`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fkRegistroVehiculosCedulaConductor`
        FOREIGN KEY (`intCedulaConductor`)
        REFERENCES `Conductor` (`intCedulaConductor`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fkRegistroVehiculosIdCategoria`
        FOREIGN KEY (`intIdCategoria`)
        REFERENCES `Categoria` (`intIdCategoria`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fkRegistroVehiculosPlacaVehiculo`
        FOREIGN KEY (`strPlacaVehiculo`)
        REFERENCES `Vehiculo` (`strPlacaVehiculo`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `Comparendo`
    ADD INDEX `fkComparendosCedulaConductorIdx` (`intCedulaConductor` ASC),
    ADD INDEX `fkComparendosTiqueteNroIdx` (`intTiqueteNro` ASC),
    ADD INDEX `fkComparendosPlacaVehiculoIdx` (`strPlacaVehiculo` ASC),
    ADD INDEX `fkComparendosIdPoliciaIdx` (`intIdPolicia` ASC),
    ADD CONSTRAINT `fkComparendosCedulaConductor`
        FOREIGN KEY (`intCedulaConductor`)
        REFERENCES `Conductor` (`intCedulaConductor`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fkComparendosTiqueteNro`
        FOREIGN KEY (`intTiqueteNro`)
        REFERENCES `RegistroVehiculo` (`intTiqueteNro`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fkComparendosPlacaVehiculo`
        FOREIGN KEY (`strPlacaVehiculo`)
        REFERENCES `Vehiculo` (`strPlacaVehiculo`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fkComparendosIdPolicia`
        FOREIGN KEY (`intIdPolicia`)
        REFERENCES `Policia` (`intIdPolicia`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;

ALTER TABLE `Menu`
    ADD INDEX `fkMenuBadgeIdx` (`strBadge` ASC),
    ADD INDEX `fkMenuFatherIdx` (`strFather` ASC),
    ADD CONSTRAINT `fkMenuBadge`
        FOREIGN KEY (`strBadge`)
        REFERENCES `Badge` (`strTitle`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    ADD CONSTRAINT `fkMenuFather`
        FOREIGN KEY (`strFather`)
        REFERENCES `Menu` (`strId`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION;
