/*
 * @fileoverview    {ControlAccesoMapping}
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

import com.project.dev.api.domain.ControlAcceso;
import com.project.dev.api.dto.ControlAccesoDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * TODO: Definición de {@code ControlAccesoMapping}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Mapper(componentModel = "spring") //, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ControlAccesoMapping extends GenericMapping<ControlAccesoDTO, ControlAcceso> {

    /**
     * Obtiene una entidad en base a su DTO.
     *
     * @param dto es el DTO a convertir en entidad.
     * @return la entidad equivalente al dto.
     */
    // Deben ser el campo clave de la base de datos.
    @Mapping(source = "intIdControl", target = "intIdControl")
    @Override
    public ControlAcceso getEntity(ControlAccesoDTO dto);

    /**
     * Obtiene un DTO en base a su entidad.
     *
     * @param entity es la entidad a convertir en DTO.
     * @return el dto equivalente a la entidad.
     */
    // Deben ser el campo clave de la base de datos.
    @Mapping(source = "intIdControl", target = "intIdControl")
    @Override
    public ControlAccesoDTO getDto(ControlAcceso entity);

    /**
     * TODO: Definición de {@code withId}.
     *
     * @param strId
     * @return
     */
    public default ControlAcceso withId(String strId) {
        if (strId == null) {
            return null;
        }
        ControlAcceso entity = new ControlAcceso();
        entity.setIntIdControl(Integer.parseInt(strId));
        return entity;
    }
}
