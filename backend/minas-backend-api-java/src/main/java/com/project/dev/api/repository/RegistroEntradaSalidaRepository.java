/*
 * @fileoverview    {RegistroEntradaSalidaRepository} se encarga de realizar tareas específicas.
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

import com.project.dev.api.domain.RegistroEntradaSalida;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * TODO: Definición de {@code RegistroEntradaSalidaRepository}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@org.springframework.stereotype.Repository
public interface RegistroEntradaSalidaRepository extends JpaRepository<RegistroEntradaSalida, Integer> {

    /**
     * Obtiene los registros de la base de datos con un id indicado.
     *
     * @param id es el id a buscar en base de datos.
     * @return los registros obtenidos.
     */
    public List<RegistroEntradaSalida> findByIntIdEntrada(Integer id);

    /**
     * Busca en base de datos los registros que contengan una cadena específica.
     *
     * @param strSearch la cadena a buscar en base de datos.
     * @return los registros obtenidos.
     */
    // TODO: Especificar campo de la entidad donde realizar la búsqueda.
    @Query("SELECT m FROM RegistroEntradaSalida m WHERE m.intIdEntrada LIKE CONCAT('%', :strSearch, '%')")
    public List<RegistroEntradaSalida> searchEntities(@Param("strSearch") String strSearch);

    /**
     * Busca en base de datos los registros que contengan una cadena específica.
     *
     * @param strSearch la cadena a buscar en base de datos.
     * @param pageable  indica la manera en que se paginarán los registros obtenidos.
     * @return los registros obtenidos.
     */
    // TODO: Especificar campo de la entidad donde realizar la búsqueda.
    @Query("SELECT m FROM RegistroEntradaSalida m WHERE m.intIdEntrada LIKE CONCAT('%', :strSearch, '%')")
    public Page<RegistroEntradaSalida> searchEntities(@Param("strSearch") String strSearch, Pageable pageable);
}
