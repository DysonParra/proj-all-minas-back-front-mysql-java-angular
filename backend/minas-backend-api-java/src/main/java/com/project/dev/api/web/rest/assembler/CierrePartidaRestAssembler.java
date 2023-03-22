/*
 * @fileoverview    {CierrePartidaRestAssembler}
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
package com.project.dev.api.web.rest.assembler;

import com.project.dev.api.dto.CierrePartidaDTO;
import com.project.dev.api.web.rest.CierrePartidaRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Definición de {@code CierrePartidaRestAssembler}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Component
public class CierrePartidaRestAssembler implements RepresentationModelAssembler<CierrePartidaDTO, EntityModel<CierrePartidaDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<CierrePartidaDTO> toModel(CierrePartidaDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(CierrePartidaRest.class).getEntity(String.valueOf(entityDTO.getIntConsecutivo()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(CierrePartidaRest.class).getAllEntities()).withRel("CierrePartida"));
    }
}
