/*
 * @fileoverview    {GenericRepository}
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
package com.project.dev.api.repository;

/**
 * TODO: Definición de {@code GenericRepository}.
 *
 * @param <T>
 *
 * @author Dyson Parra
 * @since 1.8
 */
public interface GenericRepository<T> {

    /**
     * Guarda información en la base de datos.
     *
     * @param t la información a guardar.
     * @return la información guardada.
     */
    public T saveData(T t);

    /**
     * Elimina información de la base de datos.
     *
     * @param t la información a borrar.
     */
    public void deleteData(T t);

    /**
     * Obtiene información de la base de datos.
     *
     * @param t el id de la información a obtener.
     * @return la información con el id indicado.
     */
    public T getData(T t);

    /**
     * Actualiza información en la base de datos.
     *
     * @param t la información a actualizar.
     * @return la información actualizada.
     */
    public T updateChanges(T t);

    /**
     * Obtiene todos los registros de la base de datos.
     *
     * @return los registros obtenidos de la base de datos.
     */
    public Iterable<T> getAll();
}
