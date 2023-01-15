/*
 * @fileoverview    {EntityNotFoundException} se encarga de realizar tareas específicas.
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementación realizada.
 * @version 2.0     Documentación agregada.
 */
package com.project.dev.api.service.exception;

/**
 * TODO: Definición de {@code EntityNotFoundException}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
public class EntityNotFoundException extends RuntimeException {

    /**
     * Indica que no fue posible encontrar una entidad indicada.
     *
     * @param id es identificador de la entidad.
     */
    public EntityNotFoundException(Long id) {
        super("No se puede encontrar la entidad " + id);
    }

    /**
     * Indica que no fue posible encontrar una entidad indicada.
     *
     * @param id es identificador de la entidad.
     */
    public EntityNotFoundException(String id) {
        super("No se puede encontrar la entidad " + id);
    }

}
