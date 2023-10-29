/*
 * @fileoverview    {TemporalMapping}
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

import com.project.dev.api.domain.Temporal;
import com.project.dev.api.dto.TemporalDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * TODO: Description of {@code TemporalMapping}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Mapper(componentModel = "spring") //, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface TemporalMapping extends GenericMapping<TemporalDTO, Temporal> {

    /**
     * Obtiene una entidad en base a su DTO.
     *
     * @param dto es el DTO a convertir en entidad.
     * @return la entidad equivalente al dto.
     */
    // Deben ser el campo clave de la base de datos.
    @Mapping(source = "intIdTemporal", target = "intIdTemporal")
    @Override
    public Temporal getEntity(TemporalDTO dto);

    /**
     * Obtiene un DTO en base a su entidad.
     *
     * @param entity es la entidad a convertir en DTO.
     * @return el dto equivalente a la entidad.
     */
    // Deben ser el campo clave de la base de datos.
    @Mapping(source = "intIdTemporal", target = "intIdTemporal")
    @Override
    public TemporalDTO getDto(Temporal entity);

    /**
     * TODO: Description of {@code withId}.
     *
     * @param strId
     * @return
     */
    public default Temporal withId(String strId) {
        if (strId == null) {
            return null;
        }
        Temporal entity = new Temporal();
        entity.setIntIdTemporal(Integer.parseInt(strId));
        return entity;
    }
}
