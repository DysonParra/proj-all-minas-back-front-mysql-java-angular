/*
 * @fileoverview    {EntityNotFoundException}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
 */
package com.project.dev.api.service.exception;

/**
 * TODO: Definición de {@code EntityNotFoundException}.
 *
 * @author Dyson Parra
 * @since 11
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
