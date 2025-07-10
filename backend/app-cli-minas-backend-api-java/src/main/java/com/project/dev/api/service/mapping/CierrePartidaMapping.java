/*
 * @overview        {CierrePartidaMapping}
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
package com.project.dev.api.service.mapping;

import com.project.dev.api.domain.CierrePartida;
import com.project.dev.api.dto.CierrePartidaDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * TODO: Description of {@code CierrePartidaMapping}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Mapper(componentModel = "spring")
public interface CierrePartidaMapping extends GenericMapping<CierrePartidaDTO, CierrePartida> {

    /**
     * Obtiene una entidad con base en su DTO usando el campo clave de la base de datos.
     *
     * @param dto es el DTO a convertir en entidad.
     * @return la entidad equivalente al dto.
     */
    @Mapping(source = "intConsecutivo", target = "intConsecutivo")
    @Override
    public CierrePartida getEntity(CierrePartidaDTO dto);

    /**
     * Obtiene un DTO con base en su entidad usando el campo clave de la base de datos.
     *
     * @param entity es la entidad a convertir en DTO.
     * @return el DTO equivalente a la entidad.
     */
    @Mapping(source = "intConsecutivo", target = "intConsecutivo")
    @Override
    public CierrePartidaDTO getDto(CierrePartida entity);

    /**
     * Obtiene una entidad usando el ID suministrado.
     *
     * @param strId es el id de la entidad.
     * @return la entidad con el ID suministrado.
     */
    public default CierrePartida withId(String strId) {
        if (strId == null) {
            return null;
        }
        CierrePartida entity = new CierrePartida();
        entity.setIntConsecutivo(Integer.parseInt(strId));
        return entity;
    }
}
