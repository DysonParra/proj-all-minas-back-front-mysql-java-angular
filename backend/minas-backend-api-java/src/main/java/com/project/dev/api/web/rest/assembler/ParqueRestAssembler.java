/*
 * @fileoverview    {ParqueRestAssembler}
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

import com.project.dev.api.dto.ParqueDTO;
import com.project.dev.api.web.rest.ParqueRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Definición de {@code ParqueRestAssembler}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Component
public class ParqueRestAssembler implements RepresentationModelAssembler<ParqueDTO, EntityModel<ParqueDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<ParqueDTO> toModel(ParqueDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(ParqueRest.class).getEntity(String.valueOf(entityDTO.getIntIdParque()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(ParqueRest.class).getAllEntities()).withRel("Parque"));
    }
}
