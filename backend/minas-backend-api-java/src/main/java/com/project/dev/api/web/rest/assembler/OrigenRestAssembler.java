/*
 * @fileoverview    {OrigenRestAssembler}
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
package com.project.dev.api.web.rest.assembler;

import com.project.dev.api.dto.OrigenDTO;
import com.project.dev.api.web.rest.OrigenRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Definición de {@code OrigenRestAssembler}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Component
public class OrigenRestAssembler implements RepresentationModelAssembler<OrigenDTO, EntityModel<OrigenDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<OrigenDTO> toModel(OrigenDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(OrigenRest.class).getEntity(String.valueOf(entityDTO.getStrIdOrigen()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(OrigenRest.class).getAllEntities()).withRel("Origen"));
    }
}
