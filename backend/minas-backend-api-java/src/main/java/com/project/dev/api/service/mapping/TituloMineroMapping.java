/*
 * @fileoverview    {TituloMineroMapping}
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

import com.project.dev.api.domain.TituloMinero;
import com.project.dev.api.dto.TituloMineroDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * TODO: Description of {@code TituloMineroMapping}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Mapper(componentModel = "spring") //, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface TituloMineroMapping extends GenericMapping<TituloMineroDTO, TituloMinero> {

    /**
     * Obtiene una entidad en base a su DTO usando el campo clave de la base de datos.
     *
     * @param dto es el DTO a convertir en entidad.
     * @return la entidad equivalente al dto.
     */
    @Mapping(source = "strIdTitulo", target = "strIdTitulo")
    @Override
    public TituloMinero getEntity(TituloMineroDTO dto);

    /**
     * Obtiene un DTO en base a su entidad usando el campo clave de la base de datos.
     *
     * @param entity es la entidad a convertir en DTO.
     * @return el dto equivalente a la entidad.
     */
    @Mapping(source = "strIdTitulo", target = "strIdTitulo")
    @Override
    public TituloMineroDTO getDto(TituloMinero entity);

    /**
     * TODO: Description of {@code withId}.
     *
     * @param strId
     * @return
     */
    public default TituloMinero withId(String strId) {
        if (strId == null) {
            return null;
        }
        TituloMinero entity = new TituloMinero();
        entity.setStrIdTitulo(String.valueOf(strId));
        return entity;
    }
}
