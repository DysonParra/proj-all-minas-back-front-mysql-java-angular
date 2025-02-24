/*
 * @fileoverview    {BaseRepository}
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
package com.project.dev.api.repository;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

/**
 * TODO: Description of {@code BaseRepository}.
 *
 * @param <T>
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
public class BaseRepository<T> implements GenericRepository<T> {

    protected EntityManager entityManager;
    private Class<T> type;

    /**
     * Constructor.
     *
     */
    public BaseRepository() {
        Type t = getClass().getGenericSuperclass();
        ParameterizedType pt = (ParameterizedType) t;
        type = (Class) pt.getActualTypeArguments()[0];
    }

    /**
     * Obtiene el manejador de entidad.
     *
     * @return el manejador de entidad. 
     */
    public EntityManager getEntityManager() {
        return entityManager;
    }

    /**
     * Asigna un manejador de entidad.
     *
     * @param entityManager nuevo manejador de entidad.
     */
    @PersistenceContext
    public void setEntityManager(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    /**
     * Guarda información en la base de datos.
     *
     * @param t la información a guardar.
     * @return la información guardada.
     */
    @Override
    public T saveData(final T t) {
        entityManager.persist(t);
        return t;
    }

    /**
     * Elimina información de la base de datos.
     *
     * @param object la información a borrar.
     */
    @Override
    public void deleteData(final Object object) {
        entityManager.remove(entityManager.merge(object));
    }

    /**
     * Obtiene información de la base de datos.
     *
     * @param id el id de la información a obtener.
     * @return la información con el id indicado.
     */
    @Override
    public T getData(final Object id) {
        return entityManager.find(type, id);
    }

    /**
     * Actualiza información en la base de datos.
     *
     * @param t la información a actualizar.
     * @return la información actualizada.
     */
    @Override
    public T updateChanges(final T t) {
        return entityManager.merge(t);
    }

    /**
     * Obtiene todos los registros de la base de datos.
     *
     * @return los registros obtenidos de la base de datos.
     */
    @Override
    public Iterable<T> getAll() {
        CriteriaBuilder cb = this.entityManager.getCriteriaBuilder();
        CriteriaQuery<T> criteriaQuery = cb.createQuery(type);
        Root<T> root = criteriaQuery.from(type);
        criteriaQuery.select(root);
        TypedQuery<T> query = entityManager.createQuery(criteriaQuery);
        return query.getResultList();
    }
}
