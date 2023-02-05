DROP DATABASE IF EXISTS minas;
CREATE DATABASE IF NOT EXISTS minas;
USE minas;

CREATE TABLE IF NOT EXISTS `Bascula`(
    `idProveedor`                       INT                 NOT NULL,
    `rfid`                              VARCHAR(50)         NOT NULL,
    `codigoPartida`                     INT                 NOT NULL,
    `numeroMuestra`                     INT                 NOT NULL,
    `estadoPartida`                     INT                 NOT NULL,
    `fechaHoraEntrada`                  DATETIME            NOT NULL,
    `pesoBruto`                         FLOAT               NOT NULL,
    `pesoNeto`                          FLOAT               NOT NULL,
    `tipoVehiculo`                      VARCHAR(20)         NOT NULL,
    `mssCodigoPartida`                  VARCHAR(100)        NOT NULL,
    `mssFechaHoraTomaMuestra`           DATETIME            NOT NULL,
    PRIMARY KEY (
        `idProveedor` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Categoria`(
    `idCategoria`                       INT                 NOT NULL,
    `tipoVehiculo`                      VARCHAR(50)             NULL,
    `pesoMaximo`                        FLOAT                   NULL,
    `tolerancia`                        FLOAT                   NULL,
    `descripcion`                       VARCHAR(300)            NULL,
    `ejeSencillo`                       FLOAT                   NULL DEFAULT 0,
    `ejeTandem`                         FLOAT                   NULL DEFAULT 0,
    `ejeTridem`                         FLOAT                   NULL DEFAULT 0,
    `totalEjes`                         INT                     NULL,
    PRIMARY KEY (
        `idCategoria` ASC
    )
);

CREATE TABLE IF NOT EXISTS `CierrePartida`(
    `consecutivo`                       INT                 NOT NULL,
    `codigoPartida`                     INT                     NULL,
    `cifProveedor`                      VARCHAR(50)             NULL,
    `codigoVehiculo`                    INT                     NULL,
    `rfid`                              VARCHAR(100)            NULL,
    `peso`                              INT                     NULL,
    `fecha`                             DATETIME                NULL,
    `estado`                            VARCHAR(50)             NULL,
    `pesoEstimado`                      INT                     NULL,
    `tipo`                              VARCHAR(50)             NULL,
    PRIMARY KEY (
        `consecutivo` ASC
    )
);

CREATE TABLE IF NOT EXISTS `CodigoOrigen`(
    `id`                                INT                 NOT NULL AUTO_INCREMENT,
    `codigo`                            VARCHAR(10)             NULL,
    PRIMARY KEY (
        `id` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Conductor`(
    `identificacion`                    VARCHAR(30)         NOT NULL,
    `nombreConductor`                   VARCHAR(200)        NOT NULL,
    `fechaNacimiento`                   DATE                    NULL,
    `licenciaConduccion`                VARCHAR(50)             NULL,
    `fechaVencimiento`                  DATE                    NULL,
    `observaciones`                     VARCHAR(200)            NULL,
    `tipoSancion`                       VARCHAR(100)            NULL,
    `fechaInicioSancion`                DATE                    NULL,
    `fechaFinalSancion`                 DATE                    NULL,
    `diasSancion`                       VARCHAR(20)             NULL,
    PRIMARY KEY (
        `identificacion` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Configuracion`(
    `id`                                INT                 NOT NULL AUTO_INCREMENT,
    `tipo`                              NVARCHAR(50)            NULL,
    `indicador`                         NVARCHAR(500)           NULL,
    `baudios`                           NVARCHAR(50)            NULL,
    `bitsDatos`                         NVARCHAR(50)            NULL,
    `bitsParada`                        NVARCHAR(50)            NULL,
    `paridad`                           NVARCHAR(50)            NULL,
    `ip`                                NVARCHAR(50)            NULL,
    `puerto`                            NVARCHAR(50)            NULL,
    `usuario`                           NVARCHAR(50)            NULL,
    `contrasena`                        NVARCHAR(50)            NULL,
    `estado`                            BIT                     NULL,
    PRIMARY KEY (
        `id` ASC
    )
);

CREATE TABLE IF NOT EXISTS `ConsecutivoDiario`(
    `rfid`                              VARCHAR(50)         NOT NULL,
    `nroTiquete`                        INT                 NOT NULL,
    `consecutivoDia`                    INT                 NOT NULL,
    PRIMARY KEY (
        `rfid` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Contrato`(
    `idContrato`                        INT                 NOT NULL,
    `idParque`                          VARCHAR(30)         NOT NULL,
    `centroProduccion`                  VARCHAR(200)        NOT NULL,
    `carburante`                        VARCHAR(200)        NOT NULL,
    `tipoAgrupacion`                    VARCHAR(200)            NULL,
    `partidaMaestra`                    BIT                 NOT NULL,
    `tipoExistencia`                    INT                 NOT NULL,
    `descripcion`                       VARCHAR(200)            NULL,
    PRIMARY KEY (
        `idContrato` ASC
    )
);

CREATE TABLE IF NOT EXISTS `ControlAcceso`(
    `idControl`                         INT                 NOT NULL,
    `idContrato`                        INT                     NULL,
    `idMina`                            VARCHAR(50)             NULL,
    `idDestino`                         VARCHAR(50)             NULL,
    `rfid`                              VARCHAR(100)            NULL,
    `placa`                             VARCHAR(10)             NULL,
    `conductor`                         VARCHAR(200)            NULL,
    `cifProveedor`                      VARCHAR(50)             NULL,
    `fechaIngreso`                      DATETIME                NULL,
    `fechaSalida`                       DATETIME                NULL,
    `topeMensual`                       INT                     NULL,
    `acumulado`                         INT                     NULL,
    `fechaValidez`                      DATE                    NULL,
    `tipoTarjeta`                       VARCHAR(100)            NULL,
    PRIMARY KEY (
        `idControl` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Destino`(
    `idDestino`                         VARCHAR(50)         NOT NULL,
    `nombre`                            VARCHAR(100)            NULL,
    `telefono`                          VARCHAR(20)             NULL,
    `direccion`                         VARCHAR(200)            NULL,
    `observaciones`                     VARCHAR(200)            NULL,
    `seleccionado`                      VARCHAR(50)             NULL,
    PRIMARY KEY (
        `idDestino` ASC
    )
);

CREATE TABLE IF NOT EXISTS `FicherosProveedor`(
    `cif`                               VARCHAR(50)         NOT NULL,
    `nombre`                            VARCHAR(200)            NULL,
    `topeMensual`                       INT                     NULL,
    `fechaHoraCarga`                    DATETIME                NULL,
    `idUsuario`                         VARCHAR(20)             NULL,
    PRIMARY KEY (
        `cif` ASC
    )
);

CREATE TABLE IF NOT EXISTS `GeneradorPartida`(
    `consecutivo`                       INT                 NOT NULL AUTO_INCREMENT,
    `codigoPartida`                     INT                     NULL,
    `cifProveedor`                      VARCHAR(50)             NULL,
    `codigoVehiculo`                    INT                     NULL,
    `rfid`                              VARCHAR(100)            NULL,
    `peso`                              INT                     NULL,
    `fecha`                             DATETIME                NULL,
    `estado`                            VARCHAR(50)             NULL,
    `pesoEstimado`                      INT                     NULL,
    `tipo`                              VARCHAR(50)             NULL,
    PRIMARY KEY (
        `consecutivo` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Indicador`(
    `codigo`                            NVARCHAR(50)        NOT NULL,
    `nombre`                            VARCHAR(500)            NULL,
    `tamanoTrama`                       VARCHAR(10)             NULL,
    `posicionInicial`                   VARCHAR(10)             NULL,
    `totalDatosPeso`                    VARCHAR(10)             NULL,
    `caracterFinTrama`                  VARCHAR(10)             NULL,
    `caracterInicioTrama`               VARCHAR(10)             NULL,
    PRIMARY KEY (
        `codigo` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Mina`(
    `idMina`                            VARCHAR(50)         NOT NULL,
    `nombre`                            VARCHAR(200)            NULL,
    `localidad`                         VARCHAR(100)            NULL,
    `telefono`                          VARCHAR(30)             NULL,
    `idTituloMinero`                    VARCHAR(50)             NULL,
    `observaciones`                     VARCHAR(200)            NULL,
    `producto`                          VARCHAR(100)            NULL,
    `ticket`                            VARCHAR(50)             NULL,
    PRIMARY KEY (
        `idMina` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Muestra`(
    `idMuestra`                         INT                 NOT NULL AUTO_INCREMENT,
    `rfid`                              VARCHAR(100)            NULL,
    `partida`                           VARCHAR(10)             NULL,
    `camion`                            VARCHAR(10)             NULL,
    `fechaHora`                         DATETIME                NULL,
    `observaciones`                     VARCHAR(300)            NULL,
    PRIMARY KEY (
        `idMuestra` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Origen`(
    `idOrigen`                          VARCHAR(50)         NOT NULL,
    `nombre`                            VARCHAR(100)            NULL,
    `codigoRfid`                        VARCHAR(20)             NULL,
    `direccion`                         VARCHAR(200)            NULL,
    `observaciones`                     VARCHAR(200)            NULL,
    PRIMARY KEY (
        `idOrigen` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Parque`(
    `idParque`                          INT                 NOT NULL,
    `nombreParque`                      VARCHAR(100)        NOT NULL,
    `observaciones`                     VARCHAR(200)            NULL,
    `ubicacion`                         VARCHAR(200)            NULL,
    PRIMARY KEY (
        `idParque` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Producto`(
    `idProducto`                        INT                 NOT NULL,
    `producto`                          VARCHAR(100)            NULL,
    PRIMARY KEY (
        `idProducto` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Proveedor`(
    `cif`                               VARCHAR(50)         NOT NULL,
    `nombre`                            VARCHAR(200)        NOT NULL,
    `direccion`                         VARCHAR(200)            NULL,
    `pais`                              VARCHAR(100)            NULL,
    `poblacion`                         VARCHAR(100)            NULL,
    `codigoProveedor`                   VARCHAR(50)             NULL,
    `correoElectronico`                 VARCHAR(200)            NULL,
    `patio`                             VARCHAR(20)             NULL,
    `topeMensual`                       INT                     NULL,
    `acumulado`                         INT                     NULL,
    `observaciones`                     VARCHAR(300)            NULL,
    `topeOpcional`                      INT                     NULL,
    `topeAdicional`                     INT                     NULL,
    `topeSpot`                          INT                     NULL,
    `topeOtros`                         INT                     NULL,
    PRIMARY KEY (
        `cif` ASC
    )
);

CREATE TABLE IF NOT EXISTS `RegistroEntradaSalida`(
    `idEntrada`                         INT                 NOT NULL,
    `idParque`                          INT                     NULL,
    `transporte`                        VARCHAR(10)             NULL,
    `ticket`                            VARCHAR(20)             NULL,
    `matricula`                         VARCHAR(10)             NULL,
    `vagon`                             VARCHAR(50)             NULL,
    `fechaEntrada`                      DATETIME                NULL,
    `fechaSalida`                       DATETIME                NULL,
    `combustible`                       VARCHAR(50)             NULL,
    `tipoMovimiento`                    VARCHAR(20)             NULL,
    `nombre`                            VARCHAR(200)            NULL,
    `parvaAnterior`                     VARCHAR(50)             NULL,
    `fechaFinParva`                     DATE                    NULL,
    `patio`                             VARCHAR(100)            NULL,
    `fechaInicioParva`                  DATE                    NULL,
    `muestras`                          VARCHAR(100)            NULL,
    `nroBolsa`                          VARCHAR(50)             NULL,
    `codigoPartida`                     VARCHAR(10)             NULL,
    `consecutivoVehiculo`               VARCHAR(50)             NULL,
    `pesoEntrada`                       INT                     NULL,
    `pesoSalida`                        INT                     NULL,
    `pesoNeto`                          INT                     NULL,
    `unidad`                            VARCHAR(5)              NULL,
    `descripcion`                       VARCHAR(300)            NULL,
    `rutaFotos`                         LONGTEXT                NULL,
    `rfid`                              VARCHAR(100)            NULL,
    `procesoManual`                     BIT                     NULL,
    `usuario`                           VARCHAR(100)            NULL,
    `vehiculoDevuelto`                  BIT                     NULL,
    `cif`                               VARCHAR(50)             NULL,
    `idDestino`                         VARCHAR(50)             NULL,
    `idOrigen`                          VARCHAR(50)             NULL,
    `estado`                            VARCHAR(50)             NULL,
    `idPorDia`                          INT                     NULL,
    PRIMARY KEY (
        `idEntrada` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Sancion`(
    `numero`                            INT                 NOT NULL,
    `item`                              VARCHAR(200)            NULL,
    `sancionConductor`                  BIT                     NULL,
    `sancionVehiculo`                   BIT                     NULL,
    `tiempo`                            VARCHAR(200)            NULL,
    PRIMARY KEY (
        `numero` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Temporal`(
    `idTemporal`                        INT                 NOT NULL,
    `placa`                             VARCHAR(10)             NULL,
    `rfid`                              VARCHAR(50)             NULL,
    `proveedor`                         VARCHAR(100)            NULL,
    `tope`                              VARCHAR(20)             NULL,
    `acumulado`                         INT                     NULL,
    `fechaEntrada`                      DATETIME                NULL,
    `fechaSalida`                       DATETIME                NULL,
    `estado`                            VARCHAR(500)            NULL,
    PRIMARY KEY (
        `idTemporal` ASC
    )
);

CREATE TABLE IF NOT EXISTS `TituloMinero`(
    `idTitulo`                          VARCHAR(50)         NOT NULL,
    `nombre`                            VARCHAR(200)        NOT NULL,
    `localidad`                         VARCHAR(100)            NULL,
    `telefono`                          VARCHAR(50)             NULL,
    `cifProveedor`                      VARCHAR(50)             NULL,
    `observaciones`                     VARCHAR(200)            NULL,
    PRIMARY KEY (
        `idTitulo` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Usuario`(
    `cedula`                            INT                 NOT NULL,
    `nombre`                            VARCHAR(100)        NOT NULL,
    `apellido`                          VARCHAR(100)        NOT NULL,
    `email`                             NVARCHAR(100)           NULL,
    `telefono`                          NVARCHAR(50)            NULL,
    `rh`                                NCHAR(10)               NULL,
    `seudonimo`                         VARCHAR(50)             NULL,
    `tipo`                              VARCHAR(100)            NULL,
    `cargo`                             NVARCHAR(50)            NULL,
    `contrasena`                        LONGTEXT                NULL,
    `foto`                              BLOB                    NULL,
    PRIMARY KEY (
        `cedula` ASC
    )
);

CREATE TABLE IF NOT EXISTS `Vehiculo`(
    `rfid`                              VARCHAR(100)        NOT NULL,
    `placa`                             VARCHAR(10)         NOT NULL,
    `transporte`                        VARCHAR(10)             NULL,
    `revisionTecnomecanica`             DATE                    NULL,
    `seguro`                            VARCHAR(50)             NULL,
    `tara`                              INT                 NOT NULL,
    `capacidad`                         INT                 NOT NULL,
    `categoria`                         VARCHAR(300)            NULL,
    `idConductor`                       VARCHAR(30)             NULL,
    `cif`                               VARCHAR(50)             NULL,
    `idMina`                            VARCHAR(50)             NULL,
    `patio`                             VARCHAR(50)             NULL,
    `tope`                              VARCHAR(100)            NULL,
    PRIMARY KEY (
        `rfid` ASC
    )
);

CREATE TABLE IF NOT EXISTS `VehiculoEnTransito`(
    `idEntrada`                         INT                 NOT NULL,
    `idParque`                          INT                     NULL,
    `transporte`                        VARCHAR(10)             NULL,
    `ticket`                            VARCHAR(20)             NULL,
    `matricula`                         VARCHAR(10)             NULL,
    `vagon`                             VARCHAR(50)             NULL,
    `fechaEntrada`                      DATETIME                NULL,
    `fechaSalida`                       DATETIME                NULL,
    `combustible`                       VARCHAR(50)             NULL,
    `tipoMovimiento`                    VARCHAR(20)             NULL,
    `nombre`                            VARCHAR(200)            NULL,
    `parvaAnterior`                     VARCHAR(50)             NULL,
    `fechaFinParva`                     DATE                    NULL,
    `patio`                             VARCHAR(100)            NULL,
    `fechaInicioParva`                  DATE                    NULL,
    `muestras`                          VARCHAR(100)            NULL,
    `nroBolsa`                          VARCHAR(50)             NULL,
    `codigoPartida`                     VARCHAR(10)             NULL,
    `consecutivoVehiculo`               VARCHAR(50)             NULL,
    `pesoEntrada`                       INT                     NULL,
    `pesoSalida`                        INT                     NULL,
    `pesoNeto`                          INT                     NULL,
    `unidad`                            VARCHAR(5)              NULL,
    `descripcion`                       VARCHAR(300)            NULL,
    `rutaFotos`                         LONGTEXT                NULL,
    `rfid`                              VARCHAR(100)            NULL,
    `procesoManual`                     BIT                     NULL,
    `usuario`                           VARCHAR(100)            NULL,
    `vehiculoDevuelto`                  BIT                     NULL,
    `cif`                               VARCHAR(50)             NULL,
    `idDestino`                         VARCHAR(50)             NULL,
    `idOrigen`                          VARCHAR(50)             NULL,
    `estado`                            VARCHAR(50)             NULL,
    `idPorDia`                          INT                 NOT NULL,
    PRIMARY KEY (
        `idEntrada` ASC
    )
);

-- ---------------------------- --
-- --------FOREIGN KEYS-------- --
-- ---------------------------- --

ALTER TABLE `ControlAcceso`
   ADD CONSTRAINT `fkControlAccesoContrato`
        FOREIGN KEY (`idContrato`)
        REFERENCES `Contrato` (`idContrato`),
    ADD CONSTRAINT `fkControlAccesoMina`
        FOREIGN KEY (`idMina`)
        REFERENCES `Mina` (`idMina`),
    ADD CONSTRAINT `fkControlAccesoProveedor`
        FOREIGN KEY (`cifProveedor`)
        REFERENCES `Proveedor` (`cif`),
    ADD CONSTRAINT `fkControlAccesoVehiculo`
        FOREIGN KEY (`rfid`)
        REFERENCES `Vehiculo` (`rfid`);
/*
ALTER TABLE `FicherosProveedor`
    ADD CONSTRAINT `fkFicherosProveedorProveedor`
        FOREIGN KEY (`cif`)
        REFERENCES `Proveedor` (`cif`);
*/
ALTER TABLE `GeneradorPartida`
    ADD CONSTRAINT `fkGeneradorPartidaProveedor`
        FOREIGN KEY (`cifProveedor`)
        REFERENCES `Proveedor` (`cif`),
    ADD CONSTRAINT `fkGeneradorPartidaVehiculo`
        FOREIGN KEY (`rfid`)
        REFERENCES `Vehiculo` (`rfid`);

ALTER TABLE `Mina`
    ADD CONSTRAINT `fkMinaTituloMinero`
        FOREIGN KEY (`idTituloMinero`)
        REFERENCES `TituloMinero` (`idTitulo`);

ALTER TABLE `Muestra`
    ADD CONSTRAINT `fkMuestraVehiculo`
        FOREIGN KEY (`rfid`)
        REFERENCES `Vehiculo` (`rfid`);

ALTER TABLE `RegistroEntradaSalida`
    ADD CONSTRAINT `fkRegistroEntradaSalidaParque`
        FOREIGN KEY (`idParque`)
        REFERENCES `Parque` (`idParque`);

ALTER TABLE `TituloMinero`
    ADD CONSTRAINT `fkTituloMineroProveedor`
        FOREIGN KEY (`cifProveedor`)
        REFERENCES `Proveedor` (`cif`);

ALTER TABLE `Vehiculo`
    ADD CONSTRAINT `fkVehiculoConductor`
        FOREIGN KEY (`idConductor`)
        REFERENCES `Conductor` (`identificacion`),
    ADD CONSTRAINT `fkVehiculoProveedor`
        FOREIGN KEY (`cif`)
        REFERENCES `Proveedor` (`cif`);
