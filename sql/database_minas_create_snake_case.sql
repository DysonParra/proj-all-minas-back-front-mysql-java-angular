DROP DATABASE IF EXISTS minas;
CREATE DATABASE IF NOT EXISTS minas;
USE minas;

CREATE TABLE IF NOT EXISTS `bascula`(
    `id_proveedor`                      INT                 NOT NULL,
    `rfid`                              VARCHAR(50)         NOT NULL,
    `codigo_partida`                    INT                 NOT NULL,
    `numero_muestra`                    INT                 NOT NULL,
    `estado_partida`                    INT                 NOT NULL,
    `fecha_hora_entrada`                DATETIME            NOT NULL,
    `peso_bruto`                        FLOAT               NOT NULL,
    `peso_neto`                         FLOAT               NOT NULL,
    `tipo_vehiculo`                     VARCHAR(20)         NOT NULL,
    `mss_codigo_partida`                VARCHAR(100)        NOT NULL,
    `mss_fecha_hora_toma_muestra`       DATETIME            NOT NULL,
    PRIMARY KEY (
        `id_proveedor` ASC
    )
);

CREATE TABLE IF NOT EXISTS `categoria`(
    `id_categoria`                      INT                 NOT NULL,
    `tipo_vehiculo`                     VARCHAR(50)             NULL,
    `peso_maximo`                       FLOAT                   NULL,
    `tolerancia`                        FLOAT                   NULL,
    `descripcion`                       VARCHAR(300)            NULL,
    `eje_sencillo`                      FLOAT                   NULL DEFAULT 0,
    `eje_tandem`                        FLOAT                   NULL DEFAULT 0,
    `eje_tridem`                        FLOAT                   NULL DEFAULT 0,
    `total_ejes`                        INT                     NULL,
    PRIMARY KEY (
        `id_categoria` ASC
    )
);

CREATE TABLE IF NOT EXISTS `cierre_partida`(
    `consecutivo`                       INT                 NOT NULL,
    `codigo_partida`                    INT                     NULL,
    `cif_proveedor`                     VARCHAR(50)             NULL,
    `codigo_vehiculo`                   INT                     NULL,
    `rfid`                              VARCHAR(100)            NULL,
    `peso`                              INT                     NULL,
    `fecha`                             DATETIME                NULL,
    `estado`                            VARCHAR(50)             NULL,
    `peso_estimado`                     INT                     NULL,
    `tipo`                              VARCHAR(50)             NULL,
    PRIMARY KEY (
        `consecutivo` ASC
    )
);

CREATE TABLE IF NOT EXISTS `codigo_origen`(
    `id`                                INT                 NOT NULL AUTO_iNCREMENT,
    `codigo`                            VARCHAR(10)             NULL,
    PRIMARY KEY (
        `id` ASC
    )
);

CREATE TABLE IF NOT EXISTS `conductor`(
    `identificacion`                    VARCHAR(30)         NOT NULL,
    `nombre_conductor`                  VARCHAR(200)        NOT NULL,
    `fecha_nacimiento`                  DATE                    NULL,
    `licencia_conduccion`               VARCHAR(50)             NULL,
    `fecha_vencimiento`                 DATE                    NULL,
    `observaciones`                     VARCHAR(200)            NULL,
    `tipo_sancion`                      VARCHAR(100)            NULL,
    `fecha_inicio_sancion`              DATE                    NULL,
    `fecha_final_sancion`               DATE                    NULL,
    `dias_sancion`                      VARCHAR(20)             NULL,
    PRIMARY KEY (
        `identificacion` ASC
    )
);

CREATE TABLE IF NOT EXISTS `configuracion`(
    `id`                                INT                 NOT NULL AUTO_iNCREMENT,
    `tipo`                              NVARCHAR(50)            NULL,
    `indicador`                         NVARCHAR(500)           NULL,
    `baudios`                           NVARCHAR(50)            NULL,
    `bits_datos`                        NVARCHAR(50)            NULL,
    `bits_parada`                       NVARCHAR(50)            NULL,
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

CREATE TABLE IF NOT EXISTS `consecutivo_diario`(
    `rfid`                              VARCHAR(50)         NOT NULL,
    `nro_tiquete`                       INT                 NOT NULL,
    `consecutivo_dia`                   INT                 NOT NULL,
    PRIMARY KEY (
        `rfid` ASC
    )
);

CREATE TABLE IF NOT EXISTS `contrato`(
    `id_contrato`                       INT                 NOT NULL,
    `id_parque`                         VARCHAR(30)         NOT NULL,
    `centro_produccion`                 VARCHAR(200)        NOT NULL,
    `carburante`                        VARCHAR(200)        NOT NULL,
    `tipo_agrupacion`                   VARCHAR(200)            NULL,
    `partida_maestra`                   BIT                 NOT NULL,
    `tipo_existencia`                   INT                 NOT NULL,
    `descripcion`                       VARCHAR(200)            NULL,
    PRIMARY KEY (
        `id_contrato` ASC
    )
);

CREATE TABLE IF NOT EXISTS `control_acceso`(
    `id_control`                        INT                 NOT NULL,
    `id_contrato`                       INT                     NULL,
    `id_mina`                           VARCHAR(50)             NULL,
    `id_destino`                        VARCHAR(50)             NULL,
    `rfid`                              VARCHAR(100)            NULL,
    `placa`                             VARCHAR(10)             NULL,
    `conductor`                         VARCHAR(200)            NULL,
    `cif_proveedor`                     VARCHAR(50)             NULL,
    `fecha_ingreso`                     DATETIME                NULL,
    `fecha_salida`                      DATETIME                NULL,
    `tope_mensual`                      INT                     NULL,
    `acumulado`                         INT                     NULL,
    `fecha_validez`                     DATE                    NULL,
    `tipo_tarjeta`                      VARCHAR(100)            NULL,
    PRIMARY KEY (
        `id_control` ASC
    )
);

CREATE TABLE IF NOT EXISTS `destino`(
    `id_destino`                        VARCHAR(50)         NOT NULL,
    `nombre`                            VARCHAR(100)            NULL,
    `telefono`                          VARCHAR(20)             NULL,
    `direccion`                         VARCHAR(200)            NULL,
    `observaciones`                     VARCHAR(200)            NULL,
    `seleccionado`                      VARCHAR(50)             NULL,
    PRIMARY KEY (
        `id_destino` ASC
    )
);

CREATE TABLE IF NOT EXISTS `ficheros_proveedor`(
    `cif`                               VARCHAR(50)         NOT NULL,
    `nombre`                            VARCHAR(200)            NULL,
    `tope_mensual`                      INT                     NULL,
    `fecha_hora_carga`                  DATETIME                NULL,
    `id_usuario`                        VARCHAR(20)             NULL,
    PRIMARY KEY (
        `cif` ASC
    )
);

CREATE TABLE IF NOT EXISTS `generador_partida`(
    `consecutivo`                       INT                 NOT NULL AUTO_iNCREMENT,
    `codigo_partida`                    INT                     NULL,
    `cif_proveedor`                     VARCHAR(50)             NULL,
    `codigo_vehiculo`                   INT                     NULL,
    `rfid`                              VARCHAR(100)            NULL,
    `peso`                              INT                     NULL,
    `fecha`                             DATETIME                NULL,
    `estado`                            VARCHAR(50)             NULL,
    `peso_estimado`                     INT                     NULL,
    `tipo`                              VARCHAR(50)             NULL,
    PRIMARY KEY (
        `consecutivo` ASC
    )
);

CREATE TABLE IF NOT EXISTS `indicador`(
    `codigo`                            NVARCHAR(50)        NOT NULL,
    `nombre`                            VARCHAR(500)            NULL,
    `tamano_trama`                      VARCHAR(10)             NULL,
    `posicion_inicial`                  VARCHAR(10)             NULL,
    `total_datos_peso`                  VARCHAR(10)             NULL,
    `caracter_fin_trama`                VARCHAR(10)             NULL,
    `caracter_inicio_trama`             VARCHAR(10)             NULL,
    PRIMARY KEY (
        `codigo` ASC
    )
);

CREATE TABLE IF NOT EXISTS `mina`(
    `id_mina`                           VARCHAR(50)         NOT NULL,
    `nombre`                            VARCHAR(200)            NULL,
    `localidad`                         VARCHAR(100)            NULL,
    `telefono`                          VARCHAR(30)             NULL,
    `id_titulo_minero`                  VARCHAR(50)             NULL,
    `observaciones`                     VARCHAR(200)            NULL,
    `producto`                          VARCHAR(100)            NULL,
    `ticket`                            VARCHAR(50)             NULL,
    PRIMARY KEY (
        `id_mina` ASC
    )
);

CREATE TABLE IF NOT EXISTS `muestra`(
    `id_muestra`                        INT                 NOT NULL AUTO_iNCREMENT,
    `rfid`                              VARCHAR(100)            NULL,
    `partida`                           VARCHAR(10)             NULL,
    `camion`                            VARCHAR(10)             NULL,
    `fecha_hora`                        DATETIME                NULL,
    `observaciones`                     VARCHAR(300)            NULL,
    PRIMARY KEY (
        `id_muestra` ASC
    )
);

CREATE TABLE IF NOT EXISTS `origen`(
    `id_origen`                         VARCHAR(50)         NOT NULL,
    `nombre`                            VARCHAR(100)            NULL,
    `codigo_rfid`                       VARCHAR(20)             NULL,
    `direccion`                         VARCHAR(200)            NULL,
    `observaciones`                     VARCHAR(200)            NULL,
    PRIMARY KEY (
        `id_origen` ASC
    )
);

CREATE TABLE IF NOT EXISTS `parque`(
    `id_parque`                         INT                 NOT NULL,
    `nombre_parque`                     VARCHAR(100)        NOT NULL,
    `observaciones`                     VARCHAR(200)            NULL,
    `ubicacion`                         VARCHAR(200)            NULL,
    PRIMARY KEY (
        `id_parque` ASC
    )
);

CREATE TABLE IF NOT EXISTS `producto`(
    `id_producto`                       INT                 NOT NULL,
    `producto`                          VARCHAR(100)            NULL,
    PRIMARY KEY (
        `id_producto` ASC
    )
);

CREATE TABLE IF NOT EXISTS `proveedor`(
    `cif`                               VARCHAR(50)         NOT NULL,
    `nombre`                            VARCHAR(200)        NOT NULL,
    `direccion`                         VARCHAR(200)            NULL,
    `pais`                              VARCHAR(100)            NULL,
    `poblacion`                         VARCHAR(100)            NULL,
    `codigo_proveedor`                  VARCHAR(50)             NULL,
    `correo_electronico`                VARCHAR(200)            NULL,
    `patio`                             VARCHAR(20)             NULL,
    `tope_mensual`                      INT                     NULL,
    `acumulado`                         INT                     NULL,
    `observaciones`                     VARCHAR(300)            NULL,
    `tope_opcional`                     INT                     NULL,
    `tope_adicional`                    INT                     NULL,
    `tope_spot`                         INT                     NULL,
    `tope_otros`                        INT                     NULL,
    PRIMARY KEY (
        `cif` ASC
    )
);

CREATE TABLE IF NOT EXISTS `registro_entrada_salida`(
    `id_entrada`                        INT                 NOT NULL,
    `id_parque`                         INT                     NULL,
    `transporte`                        VARCHAR(10)             NULL,
    `ticket`                            VARCHAR(20)             NULL,
    `matricula`                         VARCHAR(10)             NULL,
    `vagon`                             VARCHAR(50)             NULL,
    `fecha_entrada`                     DATETIME                NULL,
    `fecha_salida`                      DATETIME                NULL,
    `combustible`                       VARCHAR(50)             NULL,
    `tipo_movimiento`                   VARCHAR(20)             NULL,
    `nombre`                            VARCHAR(200)            NULL,
    `parva_anterior`                    VARCHAR(50)             NULL,
    `fecha_fin_parva`                   DATE                    NULL,
    `patio`                             VARCHAR(100)            NULL,
    `fecha_inicio_parva`                DATE                    NULL,
    `muestras`                          VARCHAR(100)            NULL,
    `nro_bolsa`                         VARCHAR(50)             NULL,
    `codigo_partida`                    VARCHAR(10)             NULL,
    `consecutivo_vehiculo`              VARCHAR(50)             NULL,
    `peso_entrada`                      INT                     NULL,
    `peso_salida`                       INT                     NULL,
    `peso_neto`                         INT                     NULL,
    `unidad`                            VARCHAR(5)              NULL,
    `descripcion`                       VARCHAR(300)            NULL,
    `ruta_fotos`                        LONGTEXT                NULL,
    `rfid`                              VARCHAR(100)            NULL,
    `proceso_manual`                    BIT                     NULL,
    `usuario`                           VARCHAR(100)            NULL,
    `vehiculo_devuelto`                 BIT                     NULL,
    `cif`                               VARCHAR(50)             NULL,
    `id_destino`                        VARCHAR(50)             NULL,
    `id_origen`                         VARCHAR(50)             NULL,
    `estado`                            VARCHAR(50)             NULL,
    `id_por_dia`                        INT                     NULL,
    PRIMARY KEY (
        `id_entrada` ASC
    )
);

CREATE TABLE IF NOT EXISTS `sancion`(
    `numero`                            INT                 NOT NULL,
    `item`                              VARCHAR(200)            NULL,
    `sancion_conductor`                 BIT                     NULL,
    `sancion_vehiculo`                  BIT                     NULL,
    `tiempo`                            VARCHAR(200)            NULL,
    PRIMARY KEY (
        `numero` ASC
    )
);

CREATE TABLE IF NOT EXISTS `temporal`(
    `id_temporal`                       INT                 NOT NULL,
    `placa`                             VARCHAR(10)             NULL,
    `rfid`                              VARCHAR(50)             NULL,
    `proveedor`                         VARCHAR(100)            NULL,
    `tope`                              VARCHAR(20)             NULL,
    `acumulado`                         INT                     NULL,
    `fecha_entrada`                     DATETIME                NULL,
    `fecha_salida`                      DATETIME                NULL,
    `estado`                            VARCHAR(500)            NULL,
    PRIMARY KEY (
        `id_temporal` ASC
    )
);

CREATE TABLE IF NOT EXISTS `titulo_minero`(
    `id_titulo`                         VARCHAR(50)         NOT NULL,
    `nombre`                            VARCHAR(200)        NOT NULL,
    `localidad`                         VARCHAR(100)            NULL,
    `telefono`                          VARCHAR(50)             NULL,
    `cif_proveedor`                     VARCHAR(50)             NULL,
    `observaciones`                     VARCHAR(200)            NULL,
    PRIMARY KEY (
        `id_titulo` ASC
    )
);

CREATE TABLE IF NOT EXISTS `usuario`(
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

CREATE TABLE IF NOT EXISTS `vehiculo`(
    `rfid`                              VARCHAR(100)        NOT NULL,
    `placa`                             VARCHAR(10)         NOT NULL,
    `transporte`                        VARCHAR(10)             NULL,
    `revision_tecnomecanica`            DATE                    NULL,
    `seguro`                            VARCHAR(50)             NULL,
    `tara`                              INT                 NOT NULL,
    `capacidad`                         INT                 NOT NULL,
    `categoria`                         VARCHAR(300)            NULL,
    `id_conductor`                      VARCHAR(30)             NULL,
    `cif`                               VARCHAR(50)             NULL,
    `id_mina`                           VARCHAR(50)             NULL,
    `patio`                             VARCHAR(50)             NULL,
    `tope`                              VARCHAR(100)            NULL,
    PRIMARY KEY (
        `rfid` ASC
    )
);

CREATE TABLE IF NOT EXISTS `vehiculo_en_transito`(
    `id_entrada`                        INT                 NOT NULL,
    `id_parque`                         INT                     NULL,
    `transporte`                        VARCHAR(10)             NULL,
    `ticket`                            VARCHAR(20)             NULL,
    `matricula`                         VARCHAR(10)             NULL,
    `vagon`                             VARCHAR(50)             NULL,
    `fecha_entrada`                     DATETIME                NULL,
    `fecha_salida`                      DATETIME                NULL,
    `combustible`                       VARCHAR(50)             NULL,
    `tipo_movimiento`                   VARCHAR(20)             NULL,
    `nombre`                            VARCHAR(200)            NULL,
    `parva_anterior`                    VARCHAR(50)             NULL,
    `fecha_fin_parva`                   DATE                    NULL,
    `patio`                             VARCHAR(100)            NULL,
    `fecha_inicio_parva`                DATE                    NULL,
    `muestras`                          VARCHAR(100)            NULL,
    `nro_bolsa`                         VARCHAR(50)             NULL,
    `codigo_partida`                    VARCHAR(10)             NULL,
    `consecutivo_vehiculo`              VARCHAR(50)             NULL,
    `peso_entrada`                      INT                     NULL,
    `peso_salida`                       INT                     NULL,
    `peso_neto`                         INT                     NULL,
    `unidad`                            VARCHAR(5)              NULL,
    `descripcion`                       VARCHAR(300)            NULL,
    `ruta_fotos`                        LONGTEXT                NULL,
    `rfid`                              VARCHAR(100)            NULL,
    `proceso_manual`                    BIT                     NULL,
    `usuario`                           VARCHAR(100)            NULL,
    `vehiculo_devuelto`                 BIT                     NULL,
    `cif`                               VARCHAR(50)             NULL,
    `id_destino`                        VARCHAR(50)             NULL,
    `id_origen`                         VARCHAR(50)             NULL,
    `estado`                            VARCHAR(50)             NULL,
    `id_por_dia`                        INT                 NOT NULL,
    PRIMARY KEY (
        `id_entrada` ASC
    )
);

-- ---------------------------- --
-- --------FOREIGN KEYS-------- --
-- ---------------------------- --

ALTER TABLE `control_acceso`
   ADD CONSTRAINT `fk_control_acceso_contrato`
        FOREIGN KEY (`id_contrato`)
        REFERENCES `contrato` (`id_contrato`),
    ADD CONSTRAINT `fk_control_acceso_mina`
        FOREIGN KEY (`id_mina`)
        REFERENCES `mina` (`id_mina`),
    ADD CONSTRAINT `fk_control_acceso_proveedor`
        FOREIGN KEY (`cif_proveedor`)
        REFERENCES `proveedor` (`cif`),
    ADD CONSTRAINT `fk_control_acceso_vehiculo`
        FOREIGN KEY (`rfid`)
        REFERENCES `vehiculo` (`rfid`);
/*
ALTER TABLE `ficheros_proveedor`
    ADD CONSTRAINT `fk_ficheros_proveedor_proveedor`
        FOREIGN KEY (`cif`)
        REFERENCES `proveedor` (`cif`);
*/
ALTER TABLE `generador_partida`
    ADD CONSTRAINT `fk_generador_partida_proveedor`
        FOREIGN KEY (`cif_proveedor`)
        REFERENCES `proveedor` (`cif`),
    ADD CONSTRAINT `fk_generador_partida_vehiculo`
        FOREIGN KEY (`rfid`)
        REFERENCES `vehiculo` (`rfid`);

ALTER TABLE `mina`
    ADD CONSTRAINT `fk_mina_titulo_minero`
        FOREIGN KEY (`id_titulo_minero`)
        REFERENCES `titulo_minero` (`id_titulo`);

ALTER TABLE `muestra`
    ADD CONSTRAINT `fk_muestra_vehiculo`
        FOREIGN KEY (`rfid`)
        REFERENCES `vehiculo` (`rfid`);

ALTER TABLE `registro_entrada_salida`
    ADD CONSTRAINT `fk_registro_entrada_salida_parque`
        FOREIGN KEY (`id_parque`)
        REFERENCES `parque` (`id_parque`);

ALTER TABLE `titulo_minero`
    ADD CONSTRAINT `fk_titulo_minero_proveedor`
        FOREIGN KEY (`cif_proveedor`)
        REFERENCES `proveedor` (`cif`);

ALTER TABLE `vehiculo`
    ADD CONSTRAINT `fk_vehiculo_conductor`
        FOREIGN KEY (`id_conductor`)
        REFERENCES `conductor` (`identificacion`),
    ADD CONSTRAINT `fk_vehiculo_proveedor`
        FOREIGN KEY (`cif`)
        REFERENCES `proveedor` (`cif`);
