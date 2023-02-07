DROP DATABASE IF EXISTS `minas`;
CREATE DATABASE IF NOT EXISTS `minas`;
USE `minas`;

CREATE TABLE IF NOT EXISTS `Bascula` (
    `intIdProveedor`                    INT                 NOT NULL,
    `strRfid`                           VARCHAR(50)         NOT NULL,
    `intCodigoPartida`                  INT                 NOT NULL,
    `intNumeroMuestra`                  INT                 NOT NULL,
    `intEstadoPartida`                  INT                 NOT NULL,
    `dtFechaHoraEntrada`                DATETIME            NOT NULL,
    `fltPesoBruto`                      FLOAT               NOT NULL,
    `fltPesoNeto`                       FLOAT               NOT NULL,
    `strTipoVehiculo`                   VARCHAR(20)         NOT NULL,
    `strMssCodigoPartida`               VARCHAR(100)        NOT NULL,
    `dtMssFechaHoraTomaMuestra`         DATETIME            NOT NULL,
    PRIMARY KEY (`intIdProveedor` ASC)
);

CREATE TABLE IF NOT EXISTS `Categoria` (
    `intIdCategoria`                    INT                 NOT NULL,
    `strTipoVehiculo`                   VARCHAR(50)             NULL,
    `fltPesoMaximo`                     FLOAT                   NULL,
    `fltTolerancia`                     FLOAT                   NULL,
    `strDescripcion`                    VARCHAR(300)            NULL,
    `fltEjeSencillo`                    FLOAT                   NULL DEFAULT 0,
    `fltEjeTandem`                      FLOAT                   NULL DEFAULT 0,
    `fltEjeTridem`                      FLOAT                   NULL DEFAULT 0,
    `intTotalEjes`                      INT                     NULL,
    PRIMARY KEY (`intIdCategoria` ASC)
);

CREATE TABLE IF NOT EXISTS `CierrePartida` (
    `intConsecutivo`                    INT                 NOT NULL,
    `intCodigoPartida`                  INT                     NULL,
    `strCifProveedor`                   VARCHAR(50)             NULL,
    `intCodigoVehiculo`                 INT                     NULL,
    `strRfid`                           VARCHAR(100)            NULL,
    `intPeso`                           INT                     NULL,
    `dtFecha`                           DATETIME                NULL,
    `strEstado`                         VARCHAR(50)             NULL,
    `intPesoEstimado`                   INT                     NULL,
    `strTipo`                           VARCHAR(50)             NULL,
    PRIMARY KEY (`intConsecutivo` ASC)
);

CREATE TABLE IF NOT EXISTS `CodigoOrigen` (
    `intId`                             INT                 NOT NULL AUTO_INCREMENT,
    `strCodigo`                         VARCHAR(10)             NULL,
    PRIMARY KEY (`intId` ASC)
);

CREATE TABLE IF NOT EXISTS `Conductor` (
    `strIdentificacion`                 VARCHAR(30)         NOT NULL,
    `strNombreConductor`                VARCHAR(200)        NOT NULL,
    `dtFechaNacimiento`                 DATE                    NULL,
    `strLicenciaConduccion`             VARCHAR(50)             NULL,
    `dtFechaVencimiento`                DATE                    NULL,
    `strObservaciones`                  VARCHAR(200)            NULL,
    `strTipoSancion`                    VARCHAR(100)            NULL,
    `dtFechaInicioSancion`              DATE                    NULL,
    `dtFechaFinalSancion`               DATE                    NULL,
    `strDiasSancion`                    VARCHAR(20)             NULL,
    PRIMARY KEY (`strIdentificacion` ASC)
);

CREATE TABLE IF NOT EXISTS `Configuracion` (
    `intId`                             INT                 NOT NULL AUTO_INCREMENT,
    `strTipo`                           NVARCHAR(50)            NULL,
    `strIndicador`                      NVARCHAR(500)           NULL,
    `strBaudios`                        NVARCHAR(50)            NULL,
    `strBitsDatos`                      NVARCHAR(50)            NULL,
    `strBitsParada`                     NVARCHAR(50)            NULL,
    `strParidad`                        NVARCHAR(50)            NULL,
    `strIp`                             NVARCHAR(50)            NULL,
    `strPuerto`                         NVARCHAR(50)            NULL,
    `strUsuario`                        NVARCHAR(50)            NULL,
    `strContrasena`                     NVARCHAR(50)            NULL,
    `bitEstado`                         BIT                     NULL,
    PRIMARY KEY (`intId` ASC)
);

CREATE TABLE IF NOT EXISTS `ConsecutivoDiario` (
    `strRfid`                           VARCHAR(50)         NOT NULL,
    `intNroTiquete`                     INT                 NOT NULL,
    `intConsecutivoDia`                 INT                 NOT NULL,
    PRIMARY KEY (`strRfid` ASC)
);

CREATE TABLE IF NOT EXISTS `Contrato` (
    `intIdContrato`                     INT                 NOT NULL,
    `strIdParque`                       VARCHAR(30)         NOT NULL,
    `strCentroProduccion`               VARCHAR(200)        NOT NULL,
    `strCarburante`                     VARCHAR(200)        NOT NULL,
    `strTipoAgrupacion`                 VARCHAR(200)            NULL,
    `bitPartidaMaestra`                 BIT                 NOT NULL,
    `intTipoExistencia`                 INT                 NOT NULL,
    `strDescripcion`                    VARCHAR(200)            NULL,
    PRIMARY KEY (`intIdContrato` ASC)
);

CREATE TABLE IF NOT EXISTS `ControlAcceso` (
    `intIdControl`                      INT                 NOT NULL,
    `intIdContrato`                     INT                     NULL,
    `strIdMina`                         VARCHAR(50)             NULL,
    `strIdDestino`                      VARCHAR(50)             NULL,
    `strRfid`                           VARCHAR(100)            NULL,
    `strPlaca`                          VARCHAR(10)             NULL,
    `strConductor`                      VARCHAR(200)            NULL,
    `strCifProveedor`                   VARCHAR(50)             NULL,
    `dtFechaIngreso`                    DATETIME                NULL,
    `dtFechaSalida`                     DATETIME                NULL,
    `intTopeMensual`                    INT                     NULL,
    `intAcumulado`                      INT                     NULL,
    `dtFechaValidez`                    DATE                    NULL,
    `strTipoTarjeta`                    VARCHAR(100)            NULL,
    PRIMARY KEY (`intIdControl` ASC)
);

CREATE TABLE IF NOT EXISTS `Destino` (
    `strIdDestino`                      VARCHAR(50)         NOT NULL,
    `strNombre`                         VARCHAR(100)            NULL,
    `strTelefono`                       VARCHAR(20)             NULL,
    `strDireccion`                      VARCHAR(200)            NULL,
    `strObservaciones`                  VARCHAR(200)            NULL,
    `strSeleccionado`                   VARCHAR(50)             NULL,
    PRIMARY KEY (`strIdDestino` ASC)
);

CREATE TABLE IF NOT EXISTS `FicherosProveedor` (
    `strCif`                            VARCHAR(50)         NOT NULL,
    `strNombre`                         VARCHAR(200)            NULL,
    `intTopeMensual`                    INT                     NULL,
    `dtFechaHoraCarga`                  DATETIME                NULL,
    `strIdUsuario`                      VARCHAR(20)             NULL,
    PRIMARY KEY (`strCif` ASC)
);

CREATE TABLE IF NOT EXISTS `GeneradorPartida` (
    `intConsecutivo`                    INT                 NOT NULL AUTO_INCREMENT,
    `intCodigoPartida`                  INT                     NULL,
    `strCifProveedor`                   VARCHAR(50)             NULL,
    `intCodigoVehiculo`                 INT                     NULL,
    `strRfid`                           VARCHAR(100)            NULL,
    `intPeso`                           INT                     NULL,
    `dtFecha`                           DATETIME                NULL,
    `strEstado`                         VARCHAR(50)             NULL,
    `intPesoEstimado`                   INT                     NULL,
    `strTipo`                           VARCHAR(50)             NULL,
    PRIMARY KEY (`intConsecutivo` ASC)
);

CREATE TABLE IF NOT EXISTS `Indicador` (
    `strCodigo`                         NVARCHAR(50)        NOT NULL,
    `strNombre`                         VARCHAR(500)            NULL,
    `strTamanoTrama`                    VARCHAR(10)             NULL,
    `strPosicionInicial`                VARCHAR(10)             NULL,
    `strTotalDatosPeso`                 VARCHAR(10)             NULL,
    `strCaracterFinTrama`               VARCHAR(10)             NULL,
    `strCaracterInicioTrama`            VARCHAR(10)             NULL,
    PRIMARY KEY (`strCodigo` ASC)
);

CREATE TABLE IF NOT EXISTS `Mina` (
    `strIdMina`                         VARCHAR(50)         NOT NULL,
    `strNombre`                         VARCHAR(200)            NULL,
    `strLocalidad`                      VARCHAR(100)            NULL,
    `strTelefono`                       VARCHAR(30)             NULL,
    `strIdTituloMinero`                 VARCHAR(50)             NULL,
    `strObservaciones`                  VARCHAR(200)            NULL,
    `strProducto`                       VARCHAR(100)            NULL,
    `strTicket`                         VARCHAR(50)             NULL,
    PRIMARY KEY (`strIdMina` ASC)
);

CREATE TABLE IF NOT EXISTS `Muestra` (
    `intIdMuestra`                      INT                 NOT NULL AUTO_INCREMENT,
    `strRfid`                           VARCHAR(100)            NULL,
    `strPartida`                        VARCHAR(10)             NULL,
    `strCamion`                         VARCHAR(10)             NULL,
    `dtFechaHora`                       DATETIME                NULL,
    `strObservaciones`                  VARCHAR(300)            NULL,
    PRIMARY KEY (`intIdMuestra` ASC)
);

CREATE TABLE IF NOT EXISTS `Origen` (
    `strIdOrigen`                       VARCHAR(50)         NOT NULL,
    `strNombre`                         VARCHAR(100)            NULL,
    `strCodigoRfid`                     VARCHAR(20)             NULL,
    `strDireccion`                      VARCHAR(200)            NULL,
    `strObservaciones`                  VARCHAR(200)            NULL,
    PRIMARY KEY (`strIdOrigen` ASC)
);

CREATE TABLE IF NOT EXISTS `Parque` (
    `intIdParque`                       INT                 NOT NULL,
    `strNombreParque`                   VARCHAR(100)        NOT NULL,
    `strObservaciones`                  VARCHAR(200)            NULL,
    `strUbicacion`                      VARCHAR(200)            NULL,
    PRIMARY KEY (`intIdParque` ASC)
);

CREATE TABLE IF NOT EXISTS `Producto` (
    `intIdProducto`                     INT                 NOT NULL,
    `strProducto`                       VARCHAR(100)            NULL,
    PRIMARY KEY (`intIdProducto` ASC)
);

CREATE TABLE IF NOT EXISTS `Proveedor` (
    `strCif`                            VARCHAR(50)         NOT NULL,
    `strNombre`                         VARCHAR(200)        NOT NULL,
    `strDireccion`                      VARCHAR(200)            NULL,
    `strPais`                           VARCHAR(100)            NULL,
    `strPoblacion`                      VARCHAR(100)            NULL,
    `strCodigoProveedor`                VARCHAR(50)             NULL,
    `strCorreoElectronico`              VARCHAR(200)            NULL,
    `strPatio`                          VARCHAR(20)             NULL,
    `intTopeMensual`                    INT                     NULL,
    `intAcumulado`                      INT                     NULL,
    `strObservaciones`                  VARCHAR(300)            NULL,
    `intTopeOpcional`                   INT                     NULL,
    `intTopeAdicional`                  INT                     NULL,
    `intTopeSpot`                       INT                     NULL,
    `intTopeOtros`                      INT                     NULL,
    PRIMARY KEY (`strCif` ASC)
);

CREATE TABLE IF NOT EXISTS `RegistroEntradaSalida` (
    `intIdEntrada`                      INT                 NOT NULL,
    `intIdParque`                       INT                     NULL,
    `strTransporte`                     VARCHAR(10)             NULL,
    `strTicket`                         VARCHAR(20)             NULL,
    `strMatricula`                      VARCHAR(10)             NULL,
    `strVagon`                          VARCHAR(50)             NULL,
    `dtFechaEntrada`                    DATETIME                NULL,
    `dtFechaSalida`                     DATETIME                NULL,
    `strCombustible`                    VARCHAR(50)             NULL,
    `strTipoMovimiento`                 VARCHAR(20)             NULL,
    `strNombre`                         VARCHAR(200)            NULL,
    `strParvaAnterior`                  VARCHAR(50)             NULL,
    `dtFechaFinParva`                   DATE                    NULL,
    `strPatio`                          VARCHAR(100)            NULL,
    `dtFechaInicioParva`                DATE                    NULL,
    `strMuestras`                       VARCHAR(100)            NULL,
    `strNroBolsa`                       VARCHAR(50)             NULL,
    `strCodigoPartida`                  VARCHAR(10)             NULL,
    `strConsecutivoVehiculo`            VARCHAR(50)             NULL,
    `intPesoEntrada`                    INT                     NULL,
    `intPesoSalida`                     INT                     NULL,
    `intPesoNeto`                       INT                     NULL,
    `strUnidad`                         VARCHAR(5)              NULL,
    `strDescripcion`                    VARCHAR(300)            NULL,
    `txtRutaFotos`                      LONGTEXT                NULL,
    `strRfid`                           VARCHAR(100)            NULL,
    `bitProcesoManual`                  BIT                     NULL,
    `strUsuario`                        VARCHAR(100)            NULL,
    `bitVehiculoDevuelto`               BIT                     NULL,
    `strCif`                            VARCHAR(50)             NULL,
    `strIdDestino`                      VARCHAR(50)             NULL,
    `strIdOrigen`                       VARCHAR(50)             NULL,
    `strEstado`                         VARCHAR(50)             NULL,
    `intIdPorDia`                       INT                     NULL,
    PRIMARY KEY (`intIdEntrada` ASC)
);

CREATE TABLE IF NOT EXISTS `Sancion` (
    `intNumero`                         INT                 NOT NULL,
    `strItem`                           VARCHAR(200)            NULL,
    `bitSancionConductor`               BIT                     NULL,
    `bitSancionVehiculo`                BIT                     NULL,
    `strTiempo`                         VARCHAR(200)            NULL,
    PRIMARY KEY (`intNumero` ASC)
);

CREATE TABLE IF NOT EXISTS `Temporal` (
    `intIdTemporal`                     INT                 NOT NULL,
    `strPlaca`                          VARCHAR(10)             NULL,
    `strRfid`                           VARCHAR(50)             NULL,
    `strProveedor`                      VARCHAR(100)            NULL,
    `strTope`                           VARCHAR(20)             NULL,
    `intAcumulado`                      INT                     NULL,
    `dtFechaEntrada`                    DATETIME                NULL,
    `dtFechaSalida`                     DATETIME                NULL,
    `strEstado`                         VARCHAR(500)            NULL,
    PRIMARY KEY (`intIdTemporal` ASC)
);

CREATE TABLE IF NOT EXISTS `TituloMinero` (
    `strIdTitulo`                       VARCHAR(50)         NOT NULL,
    `strNombre`                         VARCHAR(200)        NOT NULL,
    `strLocalidad`                      VARCHAR(100)            NULL,
    `strTelefono`                       VARCHAR(50)             NULL,
    `strCifProveedor`                   VARCHAR(50)             NULL,
    `strObservaciones`                  VARCHAR(200)            NULL,
    PRIMARY KEY (`strIdTitulo` ASC)
);

CREATE TABLE IF NOT EXISTS `Usuario` (
    `intCedula`                         INT                 NOT NULL,
    `strNombre`                         VARCHAR(100)        NOT NULL,
    `strApellido`                       VARCHAR(100)        NOT NULL,
    `strEmail`                          NVARCHAR(100)           NULL,
    `strTelefono`                       NVARCHAR(50)            NULL,
    `crRh`                              NCHAR(10)               NULL,
    `strSeudonimo`                      VARCHAR(50)             NULL,
    `strTipo`                           VARCHAR(100)            NULL,
    `strCargo`                          NVARCHAR(50)            NULL,
    `txtContrasena`                     LONGTEXT                NULL,
    `btFoto`                            BLOB                    NULL,
    PRIMARY KEY (`intCedula` ASC)
);

CREATE TABLE IF NOT EXISTS `Vehiculo` (
    `strRfid`                           VARCHAR(100)        NOT NULL,
    `strPlaca`                          VARCHAR(10)         NOT NULL,
    `strTransporte`                     VARCHAR(10)             NULL,
    `dtRevisionTecnomecanica`           DATE                    NULL,
    `strSeguro`                         VARCHAR(50)             NULL,
    `intTara`                           INT                 NOT NULL,
    `intCapacidad`                      INT                 NOT NULL,
    `strCategoria`                      VARCHAR(300)            NULL,
    `strIdConductor`                    VARCHAR(30)             NULL,
    `strCif`                            VARCHAR(50)             NULL,
    `strIdMina`                         VARCHAR(50)             NULL,
    `strPatio`                          VARCHAR(50)             NULL,
    `strTope`                           VARCHAR(100)            NULL,
    PRIMARY KEY (`strRfid` ASC)
);

CREATE TABLE IF NOT EXISTS `VehiculoEnTransito` (
    `intIdEntrada`                      INT                 NOT NULL,
    `intIdParque`                       INT                     NULL,
    `strTransporte`                     VARCHAR(10)             NULL,
    `strTicket`                         VARCHAR(20)             NULL,
    `strMatricula`                      VARCHAR(10)             NULL,
    `strVagon`                          VARCHAR(50)             NULL,
    `dtFechaEntrada`                    DATETIME                NULL,
    `dtFechaSalida`                     DATETIME                NULL,
    `strCombustible`                    VARCHAR(50)             NULL,
    `strTipoMovimiento`                 VARCHAR(20)             NULL,
    `strNombre`                         VARCHAR(200)            NULL,
    `strParvaAnterior`                  VARCHAR(50)             NULL,
    `dtFechaFinParva`                   DATE                    NULL,
    `strPatio`                          VARCHAR(100)            NULL,
    `dtFechaInicioParva`                DATE                    NULL,
    `strMuestras`                       VARCHAR(100)            NULL,
    `strNroBolsa`                       VARCHAR(50)             NULL,
    `strCodigoPartida`                  VARCHAR(10)             NULL,
    `strConsecutivoVehiculo`            VARCHAR(50)             NULL,
    `intPesoEntrada`                    INT                     NULL,
    `intPesoSalida`                     INT                     NULL,
    `intPesoNeto`                       INT                     NULL,
    `strUnidad`                         VARCHAR(5)              NULL,
    `strDescripcion`                    VARCHAR(300)            NULL,
    `txtRutaFotos`                      LONGTEXT                NULL,
    `strRfid`                           VARCHAR(100)            NULL,
    `bitProcesoManual`                  BIT                     NULL,
    `strUsuario`                        VARCHAR(100)            NULL,
    `bitVehiculoDevuelto`               BIT                     NULL,
    `strCif`                            VARCHAR(50)             NULL,
    `strIdDestino`                      VARCHAR(50)             NULL,
    `strIdOrigen`                       VARCHAR(50)             NULL,
    `strEstado`                         VARCHAR(50)             NULL,
    `intIdPorDia`                       INT                 NOT NULL,
    PRIMARY KEY (`intIdEntrada` ASC)
);

-- ---------------------------- --
-- --------FOREIGN KEYS-------- --
-- ---------------------------- --

ALTER TABLE `ControlAcceso`
   ADD CONSTRAINT `fkControlAccesoContrato`
        FOREIGN KEY (`intIdContrato`)
        REFERENCES `Contrato` (`intIdContrato`),
    ADD CONSTRAINT `fkControlAccesoMina`
        FOREIGN KEY (`strIdMina`)
        REFERENCES `Mina` (`strIdMina`),
    ADD CONSTRAINT `fkControlAccesoProveedor`
        FOREIGN KEY (`strCifProveedor`)
        REFERENCES `Proveedor` (`strCif`),
    ADD CONSTRAINT `fkControlAccesoVehiculo`
        FOREIGN KEY (`strRfid`)
        REFERENCES `Vehiculo` (`strRfid`);
/*
ALTER TABLE `FicherosProveedor`
    ADD CONSTRAINT `fkFicherosProveedorProveedor`
        FOREIGN KEY (`strCif`)
        REFERENCES `Proveedor` (`strCif`);
*/
ALTER TABLE `GeneradorPartida`
    ADD CONSTRAINT `fkGeneradorPartidaProveedor`
        FOREIGN KEY (`strCifProveedor`)
        REFERENCES `Proveedor` (`strCif`),
    ADD CONSTRAINT `fkGeneradorPartidaVehiculo`
        FOREIGN KEY (`strRfid`)
        REFERENCES `Vehiculo` (`strRfid`);

ALTER TABLE `Mina`
    ADD CONSTRAINT `fkMinaTituloMinero`
        FOREIGN KEY (`strIdTituloMinero`)
        REFERENCES `TituloMinero` (`strIdTitulo`);

ALTER TABLE `Muestra`
    ADD CONSTRAINT `fkMuestraVehiculo`
        FOREIGN KEY (`strRfid`)
        REFERENCES `Vehiculo` (`strRfid`);

ALTER TABLE `RegistroEntradaSalida`
    ADD CONSTRAINT `fkRegistroEntradaSalidaParque`
        FOREIGN KEY (`intIdParque`)
        REFERENCES `Parque` (`intIdParque`);

ALTER TABLE `TituloMinero`
    ADD CONSTRAINT `fkTituloMineroProveedor`
        FOREIGN KEY (`strCifProveedor`)
        REFERENCES `Proveedor` (`strCif`);

ALTER TABLE `Vehiculo`
    ADD CONSTRAINT `fkVehiculoConductor`
        FOREIGN KEY (`strIdConductor`)
        REFERENCES `Conductor` (`strIdentificacion`),
    ADD CONSTRAINT `fkVehiculoProveedor`
        FOREIGN KEY (`strCif`)
        REFERENCES `Proveedor` (`strCif`);
