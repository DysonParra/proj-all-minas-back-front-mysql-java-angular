/*
 * @fileoverview    {DestinoRestAssembler}
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

import com.project.dev.api.dto.DestinoDTO;
import com.project.dev.api.web.rest.DestinoRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Description of {@code DestinoRestAssembler}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Component
public class DestinoRestAssembler implements RepresentationModelAssembler<DestinoDTO, EntityModel<DestinoDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<DestinoDTO> toModel(DestinoDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(DestinoRest.class).getEntity(String.valueOf(entityDTO.getStrIdDestino()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(DestinoRest.class).getAllEntities()).withRel("Destino"));
    }
}
