/*
 * @fileoverview    {GeneradorPartidaMapping}
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

import com.project.dev.api.domain.GeneradorPartida;
import com.project.dev.api.dto.GeneradorPartidaDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * TODO: Definición de {@code GeneradorPartidaMapping}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Mapper(componentModel = "spring") //, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface GeneradorPartidaMapping extends GenericMapping<GeneradorPartidaDTO, GeneradorPartida> {

    /**
     * Obtiene una entidad en base a su DTO.
     *
     * @param dto es el DTO a convertir en entidad.
     * @return la entidad equivalente al dto.
     */
    // Deben ser el campo clave de la base de datos.
    @Mapping(source = "intConsecutivo", target = "intConsecutivo")
    @Override
    public GeneradorPartida getEntity(GeneradorPartidaDTO dto);

    /**
     * Obtiene un DTO en base a su entidad.
     *
     * @param entity es la entidad a convertir en DTO.
     * @return el dto equivalente a la entidad.
     */
    // Deben ser el campo clave de la base de datos.
    @Mapping(source = "intConsecutivo", target = "intConsecutivo")
    @Override
    public GeneradorPartidaDTO getDto(GeneradorPartida entity);

    /**
     * TODO: Definición de {@code withId}.
     *
     * @param strId
     * @return
     */
    public default GeneradorPartida withId(String strId) {
        if (strId == null) {
            return null;
        }
        GeneradorPartida entity = new GeneradorPartida();
        entity.setIntConsecutivo(Integer.parseInt(strId));
        return entity;
    }
}
