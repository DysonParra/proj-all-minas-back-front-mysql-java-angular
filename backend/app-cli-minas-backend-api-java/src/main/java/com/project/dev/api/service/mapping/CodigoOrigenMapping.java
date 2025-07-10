/*
 * @overview        {CodigoOrigenMapping}
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

import com.project.dev.api.domain.CodigoOrigen;
import com.project.dev.api.dto.CodigoOrigenDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * TODO: Description of {@code CodigoOrigenMapping}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Mapper(componentModel = "spring")
public interface CodigoOrigenMapping extends GenericMapping<CodigoOrigenDTO, CodigoOrigen> {

    /**
     * Obtiene una entidad con base en su DTO usando el campo clave de la base de datos.
     *
     * @param dto es el DTO a convertir en entidad.
     * @return la entidad equivalente al dto.
     */
    @Mapping(source = "intId", target = "intId")
    @Override
    public CodigoOrigen getEntity(CodigoOrigenDTO dto);

    /**
     * Obtiene un DTO con base en su entidad usando el campo clave de la base de datos.
     *
     * @param entity es la entidad a convertir en DTO.
     * @return el DTO equivalente a la entidad.
     */
    @Mapping(source = "intId", target = "intId")
    @Override
    public CodigoOrigenDTO getDto(CodigoOrigen entity);

    /**
     * Obtiene una entidad usando el ID suministrado.
     *
     * @param strId es el id de la entidad.
     * @return la entidad con el ID suministrado.
     */
    public default CodigoOrigen withId(String strId) {
        if (strId == null) {
            return null;
        }
        CodigoOrigen entity = new CodigoOrigen();
        entity.setIntId(Integer.parseInt(strId));
        return entity;
    }
}
